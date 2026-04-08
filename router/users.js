const express = require("express");
const router = express.Router();
const user = require("../controller/user_controller");
const validateUser = require("../middleware/validateUser");
const validateAuth = require("../middleware/validateAuth");

router.get("/", user.getAll);
router.get("/:id", user.getByID);
router.post("/", validateAuth.validateToken,validateUser,user.store);
router.put("/:id", validateAuth.validateToken,user.update); 
router.delete("/:id", validateAuth.validateToken, user.destroy);

module.exports = router; 
