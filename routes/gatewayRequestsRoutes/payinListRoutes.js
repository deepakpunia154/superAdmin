


const express = require("express");
const router = express.Router();
const { getHistory,payinRequests  } = require("../../controllers/gatewayRequests/payinLists");

router.get("/getHistory", getHistory);
router.get("/get-payin-requests", payinRequests);
 

module.exports = router;
