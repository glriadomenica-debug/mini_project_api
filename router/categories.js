const express = require("express");
const router = express.Router();
const category = require("../controller/category_controller");

router.get("/", category.getAll);
router.get("/:id", category.getByID);
router.post("/", category.store);
router.put("/:id", category.update);
router.delete("/:id", category.destroy);

module.exports = router;
