const express = require("express");
const { getParts } = require("../controllers/partController");
const router = express.Router();

router.get("/", getParts);

module.exports = router;
