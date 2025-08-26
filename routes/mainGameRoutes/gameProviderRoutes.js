const express = require("express");
const router = express.Router();
const { webGames, gameProvider, updateGameProvider, addGameProvider, deleteGameProvider } = require("../../controllers/mainGame/gameProviders");

router.get("/webGames", webGames);
router.get("/", gameProvider);
router.patch("/", updateGameProvider);
router.post("/add", addGameProvider);
router.delete("/", deleteGameProvider);

module.exports = router;
