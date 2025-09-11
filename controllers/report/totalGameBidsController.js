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
            let { date, gameType, limit, page, providerName, session, userName, panelName } = req.body;
            if (!providerName || providerName === "0") {
                return res.status(400).json({
                    status: false,
                    message: "Invalid provider selected. Please choose a valid provider."
                });
            }
            if (!gameType || gameType === "0") {
                return res.status(400).json({
                    status: false,
                    message: "Invalid game type selected. Please choose a valid game type."
                });
            }
            const result = await callPanelApi(
                "/totalBidsReport/gameBidsData",
                "POST",
                { date, gameType, limit, page, providerName, session, userName },
                panelName
            );
            if (!Array.isArray(result) || result.length === 0) {
                return res.status(500).json({
                    status: false,
                    message: "Invalid response from panel API",
                    raw: result
                });
            }
            const successPanels = result.filter(p => p?.data?.status === true);
            const errorPanels = result.filter(p => p?.data?.status === false);
            if (successPanels.length > 0) {
                const allEmpty = successPanels.every(
                    p => Array.isArray(p.data?.data) && p.data.data.length === 0
                );
                if (allEmpty) {
                    return res.json({
                        status: true,
                        message: "No records found for the selected filters",
                        data: result
                    });
                }
                return res.json({
                    status: true,
                    message: "User report generated successfully",
                    data: result
                });
            }
            return res.status(400).json({
                status: false,
                message: "All panels returned errors",
                errors: errorPanels.map(p => ({
                    panel: p.panel,
                    message: p.data?.message || "Unknown error",
                    error: p.data?.error || null
                })),
                data: result
            });
        } catch (err) {
            console.error("Error in gameBidsData:", err);
            res.status(500).json({
                status: false,
                message: "Something went wrong",
                error: err.message
            });
        }
    }
}
