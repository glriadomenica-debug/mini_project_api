const express = require("express");

const router = express.Router();
const transaction = require("../controller/transactions_controller");
const validateTransaction = require("../middleware/validateTransaction");
const validateAuth = require("../middleware/validateAuth");

router.get("/", validateAuth.validateToken, transaction.getAll);
router.get("/:id", validateAuth.validateToken, transaction.getById);
router.post("/", validateAuth.validateToken, validateTransaction, transaction.store);
router.put("/:id", validateAuth.validateToken, transaction.update);
router.delete("/:id", validateAuth.validateToken, transaction.destroy);

module.exports = router;