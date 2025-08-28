const { callPanelApi } = require("../../helper/common");

module.exports = {

    refundList: async (req, res) => {
        try {
            const { resultDate, page, limit, panels } = req.body;

            let results = [];

            for (const panel of panels) {
                const result = await callPanelApi(
                    "/mainGameResult/refundList",
                    "POST",
                    {
                        providerId: panel.providerId,
                        resultDate,
                        page,
                        limit
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "User refund list fetch successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    refundAll: async (req, res) => {
        try {
            const { userid, biddingPoints, resultDate, type, providerName, _id, panels } = req.body;

            let results = [];

            for (const panel of panels) {
                const result = await callPanelApi(
                    "/mainGameResult/refundAll",
                    "POST",
                    {
                        userid,
                        biddingPoints,
                        providerId: panel.providerId,
                        resultDate,
                        type,
                        providerName,
                        _id
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "User refund processed successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    }

}
