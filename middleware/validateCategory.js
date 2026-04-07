const { body } = require("express-validator");

const validateCategory = [
  body("nama_category")
    .notEmpty()
    .withMessage("Nama category tidak boleh kosong"),
  body("deskripsi").notEmpty().withMessage("Deskripsi tidak boleh kosong"),
];

module.exports = validateCategory;
