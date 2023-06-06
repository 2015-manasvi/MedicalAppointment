const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: Number,
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
