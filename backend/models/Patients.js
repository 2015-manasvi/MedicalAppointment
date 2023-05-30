const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: 5,
    },
  },
  {
    collection: "patients",
    useNewUrlParser: true,
    dbName: "medicalappointment",
  }
);
module.exports = mongoose.model("patients", patientsSchema);
