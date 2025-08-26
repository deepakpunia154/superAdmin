const express = require("express");
const router = express.Router();
const { gameSetting,addGameSetting}= require("../../controllers/mainGame/mainGameSetting");

router.get("/", gameSetting);
// router.patch("/", updateGameProvider);
router.post("/add", addGameSetting);

// router.delete("/", deleteGameProvider);

module.exports = router;
