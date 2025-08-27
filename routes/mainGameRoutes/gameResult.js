const express = require("express");
const router = express.Router();
const { mainGameResult, pastResult, mainWinnerList,mainGameResultDelete,confirmPayment } = require("../../controllers/mainGame/mainGameResult");

router.post("/", mainGameResult);
router.get("/pastResult", pastResult);
router.get("/mainWinnerList", mainWinnerList);
router.delete("/", mainGameResultDelete);
router.post("/confirmPayment", confirmPayment);

module.exports = router;
