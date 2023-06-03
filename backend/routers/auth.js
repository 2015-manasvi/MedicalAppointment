const express = require("express");
const {
  validateRegistrationData,
  validateLoginData,
} = require("../validators/auth");
const router = express.Router();

const { register, login, refresh } = require("../controllers/auth1");
const checkValid = require("../middleware/checkValid");

router.put("/register", checkValid, register);
router.post("/login", checkValid, login);
router.post("/refresh", refresh);
module.exports = router;
