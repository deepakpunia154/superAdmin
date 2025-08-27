const { callPanelApi } = require("../../helper/common");

module.exports = {
    reqOn_Off: async (req, res) => {
        try {
            const result = await callPanelApi(
                "/reqOn_Off",
                "GET",
            );

            res.json({
                status: true,
                message: "Get request on off data successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    withdrawReqOnOff: async (req, res) => {
        try {
            const { endDate, maxdeposit, maxwithdrawamount, minimumaddamount, minwithdraw, requestCount, startDate, panelName } = req.body;
            const result = await callPanelApi(
                "/reqOn_Off/withdrawReqOnOff",
                "POST",
                { endDate, maxdeposit, maxwithdrawamount, minimumaddamount, minwithdraw, requestCount, startDate, },
                panelName
            );
            res.json({
                status: true,
                message: "Update withdraw request successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getWithdrawReqOnOff: async (req, res) => {
        try {
            const result = await callPanelApi(
                "/reqOn_Off/getWithdrawReqOnOff",
                "GET",
            );

            res.json({
                status: true,
                message: "Get reqest on off list successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateReq: async (req, res) => {
        try {
            const { reason, rowId, status, panelName } = req.body;
            const result = await callPanelApi(
                "/reqOn_Off/updateReq",
                "POST",
                { reason, rowId, status },
                panelName
            );
            res.json({
                status: true,
                message: "Update request successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

}