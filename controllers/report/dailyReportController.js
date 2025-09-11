const { callPanelApi } = require("../../helper/common");

module.exports = {
    fundReports: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/fundReports",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Fund Report fetched successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    // dailyData: async (req, res) => {
    //     try {
    //         const { sdate, edate, reqType, username, page, limit, panelName } = req.body;
    //         const result = await callPanelApi(
    //             "/daliyReport/dailyData",
    //             "POST",
    //             { sdate, edate, reqType, username, page, limit },
    //             panelName
    //         );
    //         res.json({
    //             status: true,
    //             message: "Daily report fetched successfully.",
    //             data: result
    //         });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: "Something went wrong", err: err.message });
    //     }
    // },
    dailyData: async (req, res) => {
        try {
            const { sdate, edate, reqType, username, page, limit, panelName } = req.body;

            const result = await callPanelApi(
                "/daliyReport/dailyData",
                "POST",
                { sdate, edate, reqType, username, page, limit },
                panelName
            );

            const allFailed = result.every(r => r?.data?.status === false);

            if (allFailed) {
                const errorMsg = result[0]?.data?.message;
                return res.json({
                    status: false,
                    message: errorMsg,
                    data: result
                });
            }

            return res.json({
                status: true,
                message: "Daily report fetched successfully.",
                data: result
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ status: false, message: "Something went wrong", err: err.message });
        }
    },

}
