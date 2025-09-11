const { callPanelApi } = require("../../helper/common");
module.exports = {

    // biddingDay: async (req, res) => {
    //     try {
    //         const { date, gameType, limit, page, provider, session, userName, panelName } = req.body;
    //         const result = await callPanelApi(
    //             "/biddingReport/biddingDay",
    //             "POST",
    //             { date, gameType, limit, page, provider, session, userName },
    //             panelName
    //         );
    //         res.json({
    //             status: true,
    //             message: "Bidding days retrieved successfully.",
    //             data: result
    //         });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: "Something went wrong", err: err.message });
    //     }
    // },
    biddingDay: async (req, res) => {
        try {
            const { date, gameType, limit, page, provider, session, userName, panelName } = req.body;

            const result = await callPanelApi(
                "/biddingReport/biddingDay",
                "POST",
                { date, gameType, limit, page, provider, session, userName },
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
                message: "Bidding days retrieved successfully.",
                data: result
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },



}
