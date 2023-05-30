const { validationResult } = require("express-validator");
const Patients = require("../models/Patients");

// GET : retrieve all patients from the DB
const getPatients = async (req, res) => {
  const allPatients = await Patients.find();

  console.log(allPatients);
  res.json(allPatients);
};

// POST : retrieve one patient from the DB, based on name
const postPatient = async (req, res) => {
  try {
    const patient = await Patients.findOne({
      id: req.body.id,
    }).select("name email phoneNumber");
    res.json(patient);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting patient deatils" });
  }
};

// PUT : add a patient record to the DB
const putPatients = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const createdPatient = new Patients({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });

  await createdPatient.save();

  res.json({ status: "ok", msg: "created" });
};
//DELETE: delete patients by id
const deletePatients = async (req, res) => {
  try {
    await Patients.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "patient detail deleted" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting patient detail" });
  }
};

//PATCH:
const patchPatients = async (req, res) => {
  try {
    const updatedPatient = {};
    if ("phoneNumber" in req.body)
      updatedPatient.phoneNumber = req.body.phoneNumber;
    if ("email" in req.body) updatedPatient.email = req.body.email;
    if ("password" in req.body) updatedPatient.password = req.body.password;

    await Patients.findByIdAndUpdate(req.params.id, updatedPatient);

    console.log(updatedPatient);

    res.json({ status: "ok", msg: "patient updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating patient" });
  }
};

module.exports = {
  getPatients,
  postPatient,
  putPatients,
  deletePatients,
  patchPatients,
};
