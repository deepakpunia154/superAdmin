const express = require("express");
const router = express.Router();
const { gameSetting, addGameSetting, updateAllGameSetting, updateGameSetting } = require("../../controllers/mainGame/mainGameSetting");

router.get("/", gameSetting);
router.patch("/all", updateAllGameSetting);
router.patch("/", updateGameSetting);
router.post("/add", addGameSetting);

module.exports = router;
