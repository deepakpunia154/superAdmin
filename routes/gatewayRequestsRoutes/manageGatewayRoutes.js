
const express = require("express");
const router = express.Router();
const { paymentGateways, activatedGateways } = require("../../controllers/gatewayRequests/manageGateways");
router.get("/payment-gateways", paymentGateways);
router.put("/activated-gateways/:name", activatedGateways);

module.exports = router;
