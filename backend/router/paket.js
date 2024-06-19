const express = require("express");
const paketController = require("../controller/paketController");
const router = express.Router();

router.get("/", paketController.getAllPaket);

module.exports = router;
