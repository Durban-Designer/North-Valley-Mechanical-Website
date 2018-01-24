var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
jwtOptions.secretOrKey = 'LokisBreath-420';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  User.findOne({"_id": jwt_payload.id}, function(err, user) {
    if (err) {
          return next(err, false);
      }
      if (user) {
          return next(null, user);
      } else {
          return next(null, false);
      }
  });
});

app.use(passport.initialize());
passport.use(strategy);
app.use(bodyParser.json());

router.post("/login", (req, res) => {
  User.findOne({"email": req.body.email}, function (err, users) {
    if (err) throw err;
    if (users !== null) {
      bcrypt.compare(req.body.password, users.password, function(err, isMatch) {
        if (err) return (err);
        if (isMatch === true) {
          var payload = {"id": users.id};
          var token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({userId: users.id, token: token, role: users.role});
        } else {
          res.status(401).send(false);
        }
      })
    } else {
      res.status(401).send(false);
    }
  })
})

router.post("/", (req,res) => {
  var newUser = new User({
  email: req.body.email,
  password: req.body.password,
  role: req.body.role,
  firstName: req.body.firstName,
  middleName: req.body.middleName,
  lastName: req.body.lastName,
  phone: req.body.phone,
  address1: req.body.address1,
  address2: req.body.address2
  })

  newUser.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      User.findOne({"email": req.body.email}, function (err, users) {
        var payload = {"id": users.id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.status(201).json({userId: payload.id, token: token, role: users.role});
      })
    }
  })
})

router.get("/all/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var userid = new mongodb.ObjectID(req.params["id"]);
  User.find({},function (err, users) {
    if (err) {
      res.send(err);
    } else {
      User.findOne({"_id": userid},function (err, user) {
        if (err) {
          res.send(err);
        } else if (user.role === 'employee') {
          res.send(users);
        } else {
          res.status(401).send('Unauthorized')
        }
      })
    }
  })
})

router.get("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var userid = new mongodb.ObjectID(req.params["id"]);
  User.findOne({"_id": userid},function (err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  var userid = new mongodb.ObjectID(req.params["id"]);
  User.find({"_id": userid},function (err, user) {
    if (err) {
        res.status(500).send(err);
    } else {
        var user = user[0];
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        user.role = req.body.role || user.role;
        user.firstName = req.body.firstName || user.firstName;
        user.middleName = req.body.middleName || user.middleName;
        user.lastName = req.body.lastName || user.lastName;
        user.phone = req.body.phone || user.phone;
        user.address1 = req.body.address1 || user.address1;
        user.address2 = req.body.address2 || user.address2;

        user.save(function (err, user) {
            if (err) {
              res.status(500).send(err)
            }
            res.send(user);
        });
      }
  });
})

router.delete("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  var userid = new mongodb.ObjectID(req.params["id"]);
  User.find({_id: userid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
