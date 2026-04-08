const express = require("express");
const router = express.Router();
const category = require("../controller/category_controller");
const validateCategory = require("../middleware/validateCategory");
const validateAuth = require("../middleware/validateAuth");

router.get("/", category.getAll);
router.get("/:id", category.getByID);
router.post("/", validateAuth.validateToken, validateCategory, category.store);
router.put("/:id", validateAuth.validateToken, category.update);
router.delete("/:id", validateAuth.validateToken, category.destroy);

module.exports = router;
