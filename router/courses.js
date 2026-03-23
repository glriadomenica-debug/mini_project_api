const express = require("express");
const router = express.Router();
const course = require("../controller/course_controller");

router.get("/", course.getAll);
router.get("/:id", course.getByID);
router.post("/", course.store);
router.put("/:id", course.update);
router.delete("/:id", course.destroy);

module.exports = router;
