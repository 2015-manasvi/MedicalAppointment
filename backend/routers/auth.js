const express = require("express");
const {
  validateRegistrationData,
  validateLoginData,
} = require("../validators/auth");
const router = express.Router();

const {
  register,
  refresh,
  Userlogin,
  Adminlogin,
} = require("../controllers/auth1");
const checkValid = require("../middleware/checkValid");

router.put("/register", checkValid, register);
router.post("/userlogin", checkValid, Userlogin);
router.post("/adminlogin", checkValid, Adminlogin);
router.post("/refresh", refresh);
module.exports = router;
