const express = require("express");
const router = express.Router();
const { superAdminLogin, blockUserFromAllPanels,getTokens,getAdminsDetails } = require("../controllers/loginControler");
const { requireAdminAuth } = require("../middleware/authMiddleware");

router.post("/login", superAdminLogin);
router.get("/getTokens",requireAdminAuth, getTokens);
router.get("/getAdminsDetails",requireAdminAuth, getAdminsDetails);
router.post("/block-user", blockUserFromAllPanels);

module.exports = router;
