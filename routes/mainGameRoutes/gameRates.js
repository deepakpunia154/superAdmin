const express = require("express");
const router = express.Router();
const { gameRates, addGameRates, updateGameRates,deleteGameRates } = require("../../controllers/mainGame/mainGameRates");

router.get("/", gameRates);
router.delete("/", deleteGameRates);
router.patch("/", updateGameRates);
router.post("/add", addGameRates);

module.exports = router;
