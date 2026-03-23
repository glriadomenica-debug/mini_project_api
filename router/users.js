const express = require("express");
const router = express.Router();
const user = require("../controller/user_controller");

router.get("/", user.getAll);
router.get("/:id", user.getByID);
router.post("/", user.store);
router.put("/:id", user.update);
router.delete("/:id", user.destroy);


module.exports = router;