const express = require("express");
const router = express.Router();
const { walletContect, getHeadLine,getUpi,updatewalletContact,updateHeadline } = require("../../controllers/appSettings/walletContectController");

router.get("/", walletContect);
router.get("/headLine", getHeadLine);
router.get("/upi", getUpi);
router.put("/updatewalletContact", updatewalletContact);
router.put("/updateHeadline", updateHeadline);

module.exports = router;
