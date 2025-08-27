const express = require("express");
const router = express.Router();
const { reqOn_Off,getWithdrawReqOnOff,updateReq,withdrawReqOnOff } = require("../../controllers/wallet/reqOnOffController");

router.get("/", reqOn_Off);
router.post("/withdrawReqOnOff", withdrawReqOnOff);
router.get("/getWithdrawReqOnOff", getWithdrawReqOnOff);
router.put("/updateReq", updateReq);
module.exports = router;
