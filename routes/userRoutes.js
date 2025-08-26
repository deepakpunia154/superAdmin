const express = require("express");
const router = express.Router();
const { getAllUsers,blockUser, getUserProfileById,deleteUserByAdmin }= require("../controllers/usersController");

router.get("/list", getAllUsers);
router.post("/block", blockUser);
router.get("/profile", getUserProfileById);
router.delete("/", deleteUserByAdmin);

module.exports = router;
