const express = require("express");
const router = express.Router();
const { getrevertPayment, paymentRevert } = require("../../controllers/mainGame/revertResultPayment");

router.get("/", getrevertPayment);
router.post("/", paymentRevert);

module.exports = router;
