//change
const { body } = require("express-validator");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

const validateRegistration = [
  body("nama").notEmpty().withMessage("Nama harus ada"),
  body("email").isEmail().withMessage("Email harus ada").normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password harus ada")
    .isLength({ min: 8 })
    .withMessage("Password harus sampai 8 karakter"),
  body("role").notEmpty().withMessage("Role tidak boleh kosong"),
];

const validateLogin = [
  body("email").isEmail().withMessage("Email is required").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("You are not authorized", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decodedToken;
    next();
  } catch (error) {
    // next(error);
    return res.status(401).json({ message : "Invalid Token"})
  }
};

const validateUpdatePassword = [
  body("email").isEmail().withMessage("Email is required").normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];

module.exports = {
  validateRegistration,
  validateLogin,
  validateToken,
  validateUpdatePassword,
};
