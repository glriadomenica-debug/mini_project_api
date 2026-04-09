const { body } = require("express-validator");

const validateTransaction = [
  body("id_user")
    .notEmpty()
    .withMessage("User id is required")
    .isInt()
    .withMessage("Must be a number"),
  body("id_course")
    .notEmpty()
    .withMessage("Course id is required")
    .isInt()
    .withMessage("Must be a number"),
  body("total_price")
    .notEmpty()
    .withMessage("Total price is required")
    .isFloat()
    .withMessage("Must be a number"),
  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isString()
    .withMessage("Status must be 'Paid'or'Pending'"),
];

module.exports = validateTransaction;
