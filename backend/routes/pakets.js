const express = require("express");
const router = express.Router();
const paketController = require("../controller/paketController");

router.get("/", paketController.getAllPaket);
router.get("/:id", paketController.getPaketById);

module.exports = router;
