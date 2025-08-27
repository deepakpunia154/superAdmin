const express = require("express");
const router = express.Router();
const { userReport } = require("../../controllers/report/salesReportController");

router.post("/userReport", userReport);

module.exports = router;
