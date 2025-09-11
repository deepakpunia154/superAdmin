const { callPanelApi } = require("../../helper/common");

module.exports = {
    // analysisReport: async (req, res) => {
    //     try {
    //         const { userName, limit = 25, page = 1, panelName } = req.query;
    //         const result = await callPanelApi(
    //             "/userAnalysis/analysisReport",
    //             "GET",
    //             {userName,limit,page},
    //             panelName
    //         );
    //         res.json({
    //             status: true,
    //             message: "User analysis generated successfully",
    //             data: result
    //         });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: "Something went wrong", err: err.message });
    //     }
    // },

    analysisReport: async (req, res) => {
        try {
            const { userName, limit = 25, page = 1, panelName } = req.query;

            const result = await callPanelApi(
                "/userAnalysis/analysisReport",
                "GET",
                { userName, limit, page },
                panelName
            );

            const allFailed = result.every(r => r?.data?.status === false);

            if (allFailed) {
                const errorMsg = result[0]?.data?.message || "No report data found for the given criteria.";
                return res.json({
                    status: false,
                    message: errorMsg,
                    data: result
                });
            }

            return res.json({
                status: true,
                message: "User analysis generated successfully",
                data: result
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ status: false, message: "Something went wrong", err: err.message });
        }
    }

}