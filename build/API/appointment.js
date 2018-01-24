var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  contactTime: {
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
  message: {
    type: String,
    required: false
  }
})

var Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
