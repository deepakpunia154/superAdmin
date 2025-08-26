const express = require("express");
const router = express.Router();
const { superAdminLogin, blockUserFromAllPanels } = require("../controllers/loginControler");

router.post("/login", superAdminLogin);
router.post("/block-user", blockUserFromAllPanels);

module.exports = router;
