const express = require("express");
const router = express.Router();
const {
  getPatients,
  postPatientById,
  putPatients,
  deletePatients,
  patchPatients,
  postPatient,
} = require("../controllers/patients");
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const { validateInsertPatientData } = require("../validators/patients");

router.get("/patients", getPatients);
router.post("/patients", postPatient);
router.put("/patients", validateInsertPatientData, putPatients);
router.delete("/patients/:id", deletePatients);
router.patch("/patients/:id", validateInsertPatientData, patchPatients);

module.exports = router;
