const mongoose = require("mongoose");
const { collection } = require("./Roles");

const AuthSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    hash: { type: String, require: true },
    role: { type: "String", require: true, default: "user" },
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: "auth",
    useNewUrlParser: true,
    dbName: "medicalappointment",
  }
);

module.exports = mongoose.model("auth", AuthSchema);
