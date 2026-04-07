const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const validateAuth = require("../middleware/validateAuth");

router.post(
  "/registration",
  validateAuth.validateRegistration,
  authController.registration,
);
router.post("/login", validateAuth.validateLogin, authController.login);

router.get("/profile", validateAuth.validateToken, authController.profile);

router.put(
  "/profile",

  validateAuth.validateToken,
  validateAuth.validateUpdatePassword,
  authController.updatePassword,
);

module.exports = router;
