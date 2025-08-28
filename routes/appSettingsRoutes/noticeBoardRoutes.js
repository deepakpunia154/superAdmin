const express = require("express");
const router = express.Router();
const { noticeBoard,updateNotice } = require("../../controllers/appSettings/noticeBoardController");

router.get("/", noticeBoard);
router.put("/updateNotice", updateNotice);
  
module.exports = router;
