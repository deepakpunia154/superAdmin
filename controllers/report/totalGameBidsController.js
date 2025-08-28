const { callPanelApi } = require("../../helper/common");

module.exports = {
    getGames: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/totalBidsReport/games",
                "GET",
                null,
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
    gameBidsData: async (req, res) => {
        try {
            const { date, gameType, limit, page, providerName, session, userName, panelName } = req.body;
            const result = await callPanelApi(
                "/totalBidsReport/gameBidsData",
                "POST",
                { date, gameType, limit, page, providerName, session, userName, },
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
