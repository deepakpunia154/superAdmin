// get-pending-payouts
// 

const express = require("express");
const router = express.Router();
const { getPendingPayouts, updatePendingPayoutRequest, getPayoutRequests, approvePayment } = require("../../controllers/gatewayRequests/payoutLists");

router.get("/get-pending-payouts", getPendingPayouts);
router.post("/update-pending-payout-request", updatePendingPayoutRequest);
router.get("/get-payout-requests", getPayoutRequests);
router.post("/approve-payout", approvePayment);


module.exports = router;
