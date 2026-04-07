const { body } = require("express-validator");

const validateUser = [
  body("nama").notEmpty().withMessage("Nama is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("role").notEmpty().withMessage("Role is required"),
];

module.exports = validateUser;
