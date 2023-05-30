const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    hash: { type: String, require: true },
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: "auth",
    useNewUrlParser: true,
    dbName: "medicalappointment",
  }
);

module.exports = mongoose.model("auth", AuthSchema);
