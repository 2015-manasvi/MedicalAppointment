const { body, param, check } = require("express-validator");

const validateInsertPatientData = [
  body("id", " id is required").not().isEmpty(),
  body("username", "username is required").not().isEmpty(),
  body("username", "must have a min of 1 and a max of 20 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("password", "password is required").not().isEmpty(),
  body("name", "year is required").not().isEmpty(),
  body("name", "must have a min of 1 and a max of 20 characters").isLength({
    min: 1,
    max: 50,
  }),

  body("email", "email is required").not().isEmpty(),
  body("email", "must have a min of 1 and a max of 20 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("phoneNumber", "phoneNumber is required").not().isEmpty(),
  body("phoneNumber", "must have a min length 5").isLength({
    min: 5,
  }),
];

module.exports = { validateInsertPatientData };
