const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const {
  getDoctors,

  putDoctors,
  deleteDoctors,
  patchDoctors,
  postDoctor,
  getSlots,
} = require("../controllers/doctors");
const { validateInsertDoctorData } = require("../validators/doctors");

router.get("/doctors", getDoctors);
router.post("/doctors", postDoctor);
router.put("/doctors", validateInsertDoctorData, putDoctors);
router.delete("/doctors/:id", deleteDoctors);
router.patch("/doctors/:id", patchDoctors);
router.post("/getslots", getSlots);

module.exports = router;
