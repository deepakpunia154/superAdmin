const express = require("express");
const router = express.Router();
const panelController = require("../controllers/panelController");
const { requireAdminAuth } = require("../middleware/authMiddleware");

router.post("/add", requireAdminAuth, panelController.addPanel);
router.put("/togglePanel", requireAdminAuth, panelController.togglePanelStatus);
router.get("/", requireAdminAuth, panelController.getPanels);
router.get("/:id", requireAdminAuth, panelController.getPanelById);
router.put("/:id", requireAdminAuth, panelController.updatePanel);
router.delete("/:id", requireAdminAuth, panelController.deletePanel);

module.exports = router;
