const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getDoctors,
  putDoctors,
  deleteDoctors,
  patchDoctors,
  postDoctor,
  getSlots,
} = require("../controllers/doctors");
const { validateInsertDoctorData } = require("../validators/doctors");
const { adminAuth, userAuth } = require("../middleware/auth");

router.get("/doctors", userAuth, getDoctors);
router.post("/doctors", adminAuth, postDoctor);
router.put("/doctors", adminAuth, validateInsertDoctorData, putDoctors);
router.delete("/doctors/:id", adminAuth, deleteDoctors);
router.patch("/doctors/:id", adminAuth, patchDoctors);
router.post("/getslots", getSlots);

module.exports = router;
