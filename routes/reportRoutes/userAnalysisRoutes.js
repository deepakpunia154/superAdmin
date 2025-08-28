const express = require("express");
const router = express.Router();
const { analysisReport } = require("../../controllers/report/userAnalysisController");

router.get("/analysisReport", analysisReport);
 
module.exports = router;
