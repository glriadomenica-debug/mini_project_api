const { body } = require("express-validator");

const validateCourse = [
  body("nama_course").notEmpty().withMessage("Course name is required"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat()
    .withMessage("Must be a number"),
  body("kuota")
    .notEmpty()
    .withMessage("Kuota is required")
    .isFloat()
    .withMessage("Must be a number"),
  body("id_category")
    .notEmpty()
    .withMessage("ID category is required")
    .isInt()
    .withMessage("Must be a number"),
  body("id_users")
    .notEmpty()
    .withMessage("ID users is required")
    .isInt()
    .withMessage("Must be a number"),
];

module.exports = validateCourse;
