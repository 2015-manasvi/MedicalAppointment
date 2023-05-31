const { body, param } = require("express-validator");

const validateInsertDoctorData = [
  body("id", "id is required").not().isEmpty(),
  body("username", "username is required").not().isEmpty(),
  body("username", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("password", "password is required").not().isEmpty(),
  body("password", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 100,
  }),
  body("name", "year is required").not().isEmpty(),
  body("name", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),

  body("email", "email is required").not().isEmpty(),
  body("email", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("phoneNumber", "phoneNumber is required").not().isEmpty(),
  body(
    "phoneNumber",
    "must have a min of 1 and a max of 10 characters"
  ).isLength({
    min: 5,
  }),

  body("specialization", "specialization is required").not().isEmpty(),
  body(
    "specialization",
    "must have a min of 1 and a max of 50 characters"
  ).isLength({
    min: 1,
    max: 50,
  }),
];

module.exports = { validateInsertDoctorData };
