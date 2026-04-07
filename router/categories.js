const express = require("express");
const router = express.Router();
const category = require("../controller/category_controller");
const validateCategory = require("../middleware/validateCategory");
const validateAuth = require("../middleware/validateAuth");

router.get("/", validateAuth.validateToken, category.getAll);
router.get("/:id", category.getByID);
router.post("/", category.store);
router.put("/:id", category.update);
router.delete("/:id", category.destroy);

module.exports = router;
  