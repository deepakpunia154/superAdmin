const express = require("express");
const router = express.Router();
const { viewWallet,newCredit,walletUpdate,newHistroy,getProfile } = require("../../controllers/wallet/viewWalletController");

router.get("/list", viewWallet);
router.get("/newCredit", newCredit);
router.put("/walletUpdate", walletUpdate);
router.get("/newHistroy", newHistroy);
router.get("/getProfile", getProfile);

module.exports = router;
