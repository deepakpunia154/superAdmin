const { callPanelApi } = require("../../helper/common");

module.exports = {
    analysisReport: async (req, res) => {
        try {
            const { userName, limit = 25, page = 1, panelName } = req.query;
            const result = await callPanelApi(
                "/userAnalysis/analysisReport",
                "GET",
                {userName,limit,page},
                panelName
            );
            res.json({
                status: true,
                message: "User analysis generated successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
}