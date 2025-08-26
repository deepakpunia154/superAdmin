const express = require("express");
const router = express.Router();
const { gameProvider,updateGameProvider,addGameProvider,deleteGameProvider }= require("../../controllers/mainGame/gameProviders");

router.get("/", gameProvider);
router.patch("/", updateGameProvider);
router.post("/add", addGameProvider);
router.delete("/", deleteGameProvider);

module.exports = router;
