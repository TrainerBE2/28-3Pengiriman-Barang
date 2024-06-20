var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
const token = require("../middleware/verifyToken");

router.get("/", userController.getAllUser);

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.delete("/:id", userController.deleteUserbyId);

router.get("/:id", token, userController.getUserById);
router.get("/:id/profile", token, userController.profileUser);
router.put("/:id", token, userController.updateUserById);

router.get("/:id/pakets", token, userController.getAllPaketByUserId);
router.get(
     "/:userId/pakets/:paketId",
     token,
     userController.getPaketDetailByUserId
);

module.exports = router;
