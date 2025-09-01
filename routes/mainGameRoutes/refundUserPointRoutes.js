const express = require("express");
const router = express.Router();
const { refundList,refundAll } = require("../../controllers/mainGame/refundUserPoint");

router.post("/list", refundList);
router.post("/all", refundAll);

module.exports = router;
