const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");

const {
  getAppointments,
  postAppointment,
  putAppointments,
  deleteAppointments,
  patchAppointment,
} = require("../controllers/appointments");

router.get("/appointment", getAppointments);
router.post("/appointment", postAppointment);
router.put("/appointment", putAppointments);
router.delete("/appointment/:id", deleteAppointments);
router.patch("/appointment/:id", patchAppointment);

module.exports = router;
