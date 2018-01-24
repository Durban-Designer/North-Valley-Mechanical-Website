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
var Appointment = mongoose.model("Appointment");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var recordsPerPage = 8;

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

router.post("/", (req,res) => {
  var newAppointment = new Appointment({
  name: req.body.name,
  address: req.body.address,
  addressTwo: req.body.addressTwo,
  city: req.body.city,
  state: req.body.state,
  zip: req.body.zip,
  country: req.body.country,
  email: req.body.email,
  phone: req.body.phone,
  contactTime: req.body.contactTime,
  customerType: req.body.customerType,
  timeStart: req.body.timeStart,
  timeEnd: req.body.timeEnd,
  date: req.body.date,
  type: req.body.type,
  comment: req.body.comment
  })

  newAppointment.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var pageNum = req.params["page"] || 1;
  Appointment
  .find()
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, appointments) {
    if (err) {
      res.send(err);
    } else {
      res.send(appointments);
    }
  })
})

router.get("/name/:name/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var appointmentName = req.params["name"];
  var pageNum = req.params["page"] || 1;
  Appointment
  .find({"name": {$regex: '^' + appointmentName}})
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, appointments) {
    if (err) {
      res.send(err);
    } else {
      res.send(appointments);
    }
  })
})

router.get("/id/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var appointmentid = new mongodb.ObjectID(req.params["id"]);
  Appointment.find({"_id": appointmentid},function (err, appointments) {
    if (err) {
      res.send(err);
    } else {
      res.send(appointments);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var appointmentid = new mongodb.ObjectID(req.params["id"]);
  Appointment.find({"_id": leadid},function (err, lead) {
    if (err) {
        res.status(500).send(err);
    } else {
        var appointment = appointment[0];
        appointment.name = req.body.name || appointment.name;
        appointment.address = req.body.address || appointment.address;
        appointment.addressTwo = req.body.addressTwo || appointment.addressTwo;
        appointment.city = req.body.city || appointment.city;
        appointment.state = req.body.state || appointment.state;
        appointment.zip = req.body.zip || appointment.zip;
        appointment.country = req.body.country || appointment.country;
        appointment.email = req.body.email || appointment.email;
        appointment.phone = req.body.phone || appointment.phone;
        appointment.contactTime = req.body.contactTime || appointment.contactTime;
        appointment.customerType = req.body.customerType || appointment.customerType;
        appointment.timeStart = req.body.timeStart || appointment.timeStart;
        appointment.timeEnd = req.body.timeEnd || appointment.timeEnd;
        appointment.date = req.body.date || appointment.date;
        appointment.type = req.body.type || appointment.type;
        appointment.comment = req.body.comment || appointment.comment;

        appointment.save(function (err, appointment) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(appointment);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var appointmentid = new mongodb.ObjectID(req.params["id"]);
  Appointment.find({_id: appointmentid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
