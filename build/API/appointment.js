var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  addressTwo: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  contactTime: {
    type: String,
    required: true
  },
  customerType: {
    type: String,
    required: true
  },
  timeStart: {
    type: Number,
    required: false
  },
  timeEnd: {
    type: Number,
    required: false
  },
  date: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  }
})

var Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
