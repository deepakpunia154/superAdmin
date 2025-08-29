const { callPanelApi } = require("../../helper/common");

module.exports = {
    getUserBidData: async (req, res) => {
        try {
            const { market, limit , page,username, panelName } = req.body;
            const result = await callPanelApi(
                "/userBids/getUserBidData",
                "POST",
                {username,market,limit,page},
                panelName
            );
            res.json({
                status: true,
                message: "User bid data retrieved successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
}