const express = require("express");
const router = express.Router();
const {
  getPatients,
  putPatients,
  deletePatients,
  patchPatients,
  postPatient,
} = require("../controllers/patients");
const { check } = require("express-validator");

const { validateInsertPatientData } = require("../validators/patients");
const { userAuth } = require("../middleware/auth");

router.get("/patients", getPatients);
router.post("/patients", postPatient);
router.put("/patients", validateInsertPatientData, putPatients);
router.delete("/patients/:id", deletePatients);
router.patch("/patients/:id", validateInsertPatientData, patchPatients);

module.exports = router;
