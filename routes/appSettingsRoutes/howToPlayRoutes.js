const express = require("express");
const router = express.Router();
const { howToPlay,updateHtp  } = require("../../controllers/appSettings/howToPlayController");

router.get("/htp", howToPlay);
router.put("/updateHtp", updateHtp);
 
module.exports = router;
