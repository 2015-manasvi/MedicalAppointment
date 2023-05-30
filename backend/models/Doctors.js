const mongoose = require("mongoose");

// const slotSchema = new mongoose.Schema({
//     time : {
//         type: String,
//     },
//     isBooked : {
//         type: Boolean,
//         default: false
//     }
// })

// const dateSchedule = new mongoose.Schema({
//     date : {
//         type: String
//     },
//     slots : [slotSchema]
// })

const doctorSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
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
    specialization: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },

    //dates : [dateSchedule]
  },
  {
    collection: "doctors",
    useNewUrlParser: true,
    dbName: "medicalappointment",
  }
);

module.exports = mongoose.model("doctors", doctorSchema);
