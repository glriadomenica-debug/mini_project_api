const { body } = require("express-validator");

const validateTransaction = [
  body("id_user").notEmpty().withMessage("User id is required").isInt().withMessage("Must be a number"),
  body("id_course").notEmpty.withMessage("").isInt().withMessage(""),
  body("total_price").notEmpty.withMessage("").isNumber().withMessage(""),
  body("status").notEmpty.withMessage("").isString().withMessage("")
]