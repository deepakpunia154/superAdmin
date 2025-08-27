const express = require("express");
const router = express.Router();
const { getProfile } = require("../../controllers/wallet/invoicesController");

router.get("/getProfile", getProfile);

module.exports = router;
