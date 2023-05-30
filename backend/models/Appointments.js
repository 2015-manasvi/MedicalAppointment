const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      required: true,
      type: String,
    },
    dateId: {
      required: true,
      type: String,
    },
    slotId: {
      required: true,
      type: String,
    },
    patientId: {
      required: true,
      type: String,
    },
    date: {
      type: String,
    },
    slotTime: {
      type: String,
    },
    doctorName: {
      type: String,
    },
    doctorEmail: {
      type: String,
    },
    patientName: {
      type: String,
    },
  },
  {
    collection: "appointments",
    useNewUrlParser: true,
    dbName: "medicalappointment",
  }
);
module.exports = mongoose.model("appointments", appointmentSchema);
