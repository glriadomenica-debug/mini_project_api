const express = require("express");
const router = express.Router();
const course = require("../controller/course_controller");
const validateCourse = require("../middleware/validateCourse");
const validateAuth = require("../middleware/validateAuth");

router.get(
  "/with-relations",
  validateAuth.validateToken,
  course.getAllWithRelation,
);
router.get("/course-count", validateAuth.validateToken, course.getCountInstructor);
router.get("/",course.getAll);
router.get("/:id", course.getByID);
router.post("/", validateAuth.validateToken, validateCourse, course.store);
router.put("/:id", validateAuth.validateToken, course.update);
router.delete("/:id", validateAuth.validateToken, course.destroy);

module.exports = router;
 