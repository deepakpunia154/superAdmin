const express = require("express");
const router = express.Router();
const { createEmployee } = require("../../controllers/masters/registerUserEmpController");

router.post("/employees/createEmployee", createEmployee);
 

module.exports = router;
