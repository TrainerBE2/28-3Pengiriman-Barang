var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllUser);
router.post("/", userController.registerUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserbyId);

module.exports = router;
