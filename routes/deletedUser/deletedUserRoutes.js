const express = require("express");
const router = express.Router();
const { deleteduser,getTimeHistory  } = require("../../controllers/deletedUser/deletedUserController");

router.get("/", deleteduser);
router.get("/getTimeHistory", getTimeHistory);
 
module.exports = router;
