const express = require("express");
const router = express.Router();
const { notification,insertNotification,deleteNotification  } = require("../../controllers/notifications/notificationController");

router.get("/", notification);
router.post("/insertNotification", insertNotification);
router.delete("/deleteNotification", deleteNotification);
 
module.exports = router;
