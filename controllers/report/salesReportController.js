const { callPanelApi } = require("../../helper/common");

module.exports = {
    userReport: async (req, res) => {
        try {
            const { endDate, gameId, startDate, userId, panelName } = req.body;
            const result = await callPanelApi(
                "/mainSalesReport/userReport",
                "POST",
                { endDate, gameId, startDate, userId, },
                panelName
            );
            res.json({
                status: true,
                message: "User report generated successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
}
