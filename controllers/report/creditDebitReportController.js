const { callPanelApi } = require("../../helper/common");
module.exports = {
    creditDebitReport: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/creditDebitReport",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Credit Debit Report retrieved successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    report: async (req, res) => {
        try {
            const { adminName, date, limit, page, reqType, search, panelName } = req.body;
            const result = await callPanelApi(
                "/creditDebitReport/report",
                "POST",
                { adminName, date, limit, page, reqType, searchKey: search },
                panelName
            );
            res.json({
                status: true,
                message: "Credit Debit Report retrieved successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
}
