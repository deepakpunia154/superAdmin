const express = require("express");
const router = express.Router();
const { getGames, gameBidsData } = require("../../controllers/report/totalGameBidsController");

router.get("/games", getGames);
router.post("/gameBidsData", gameBidsData);

module.exports = router;
