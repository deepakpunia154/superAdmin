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

            const allFailed = result.every(r => r.data?.status === false);

            if (allFailed) {
                const firstMsg = result[0]?.data?.message || "No data found";

                return res.json({
                    status: false,
                    message: firstMsg,
                    data: result
                });
            }

            res.json({
                status: true,
                message: "Credit Debit Report retrieved successfully.",
                data: result
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    }

}
