const express = require("express");
const router = express.Router();
const { versionSetting ,getCallFeatureStatus,updateAppSet,updateAppOtpFlags } = require("../../controllers/appSettings/versionSettingsController");
const multer = require("multer");
const upload = multer();

router.get("/", versionSetting);
router.get("/getCallFeatureStatus", getCallFeatureStatus);
router.put("/updateAppOtpFlags", updateAppOtpFlags); 
router.put("/updateAppSet", upload.single("apk"), updateAppSet);
 
module.exports = router;
