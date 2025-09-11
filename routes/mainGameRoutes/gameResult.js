const express = require("express");
const router = express.Router();
const { mainGameResult, getMainGameResult, pastResult, mainWinnerList,mainGameResultDelete,confirmPayment } = require("../../controllers/mainGame/mainGameResult");

router.post("/", mainGameResult);
router.get("/", getMainGameResult);
router.get("/pastResult", pastResult);
router.post("/mainWinnerList", mainWinnerList);
router.delete("/", mainGameResultDelete);
router.post("/confirmPayment", confirmPayment);

module.exports = router;
