const express = require("express");
const { addOrder } = require("../controllers/orderController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/add", protect, addOrder);

module.exports = router;
