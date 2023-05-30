const Patient = require("../models/Patients");
const Doctor = require("../models/Doctors");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    if (req.body.role == "patient") {
      const userDetails = await Patient.findOne({
        username: req.body.username,
      });
      if (!userDetails) {
        return res.status(400).json({ status: "error", msg: "not authorised" });
      }
      console.log("request password", req.body.password);
      const result = await bcrypt.compare(
        req.body.password,
        userDetails.password
      );
      if (!result) {
        return res.status(401).json({ status: "error", message: "login fail" });
      } else {
        res.json(userDetails);
      }
    } else {
      const userDetails2 = await Doctor.findOne({
        username: req.body.username,
      });
      if (!userDetails2) {
        return res.status(400).json({ status: "error", msg: "not authorised" });
      }

      const result2 = await bcrypt.compare(
        req.body.password,
        userDetails2.password
      );
      if (!result2) {
        return res.status(401).json({ status: "error", message: "login fail" });
      } else {
        res.json(userDetails2);
      }
    }
  } catch (error) {
    return res.status(400).json({ status: "error", msg: "login fail" });
  }
};

module.exports = {
  login,
};
