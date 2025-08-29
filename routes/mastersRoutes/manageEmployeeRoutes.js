const express = require("express");
const router = express.Router();
const { employees, updatePassword, blockEmployee, fetchEmpById, deleteEmp } = require("../../controllers/masters/manageEmployeeController");

router.get("/employees", employees);
router.put("/employees/updatePassword", updatePassword);
router.put("/employees/blockEmployee", blockEmployee);
router.get("/employees/empById", fetchEmpById);
router.delete("/employees/deleteEmp", deleteEmp);

module.exports = router;
