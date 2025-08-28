const express = require("express");
const router = express.Router();
const { refundList,refundAll } = require("../../controllers/mainGame/refundUserPoint");

router.get("/list", refundList);
router.post("/all", refundAll);

module.exports = router;
