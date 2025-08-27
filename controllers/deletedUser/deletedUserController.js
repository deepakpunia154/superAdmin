const { callPanelApi } = require("../../helper/common");

module.exports = {
    deleteduser: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || "";
            const panelName = req.query.panelName;
            const result = await callPanelApi(
                "/deleteduser",
                "POST",
                { page, limit, searchQuery: search },
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

    getTimeHistory: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/deleteduser/getTimeHistory",
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
}
