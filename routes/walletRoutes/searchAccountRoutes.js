const express = require("express");
const router = express.Router();
const { getAllAccount } = require("../../controllers/wallet/searchAccountController");

router.post("/getAccount", getAllAccount);

module.exports = router;
