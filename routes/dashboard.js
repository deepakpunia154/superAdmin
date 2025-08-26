const express = require("express");
const router = express.Router();
const { dashboardCount,getAllUsers }= require("../controllers/dashboard");

router.get("/count", dashboardCount);
router.get("/user", getAllUsers);


module.exports = router;
