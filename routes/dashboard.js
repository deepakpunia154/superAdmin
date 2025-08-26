const express = require("express");
const router = express.Router();
const { dashboardCount, getBriefDeposit, userReportAll, checkUpdateCount, getUserRegisterCount } = require("../controllers/dashboard");

router.get("/count", dashboardCount);
router.get("/getBriefDeposit", getBriefDeposit);
router.get("/userReportAll", userReportAll);
router.get("/checkUpdateCount", checkUpdateCount);
router.get("/getUserRegisterCount", getUserRegisterCount);

module.exports = router;
