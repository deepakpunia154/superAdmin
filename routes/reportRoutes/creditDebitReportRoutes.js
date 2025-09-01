const express = require("express");
const router = express.Router();
const {creditDebitReport,report } = require("../../controllers/report/creditDebitReportController");

router.get("/", creditDebitReport);
router.post("/report", report);

module.exports = router;
