const { callPanelApi } = require("../../helper/common");

module.exports = {
    withdraw: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/withdraw",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Withdraw fetch successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateWithdraw: async (req, res) => {
        try {
            const { id, timing, number, sec_title, pri_title, panelName } = req.body;
            const result = await callPanelApi(
                "/withdraw/updateWithdraw",
                "POST",
                { id, timing, number, sec_title, pri_title },
                panelName
            );
            res.json({
                status: true,
                message: "User list fetch successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
    
}