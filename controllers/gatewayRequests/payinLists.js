
const { callPanelApi } = require("../../helper/common");

module.exports = {
    getHistory: async (req, res) => {
        try {
            const { status, panelName } = req.query
            const result = await callPanelApi(
                "/nnData/api/history",
                "GET",
                { status },
                panelName
            );
            res.json({
                status: true,
                message: "Transaction history fetched successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    // payinRequests: async (req, res) => {
    //     try {
    //         const { start_date, end_date, status, panelName } = req.query
    //         const result = await callPanelApi(
    //             "/nnData/get-payin-requests",
    //             "GET",
    //             { start_date, end_date, status },
    //             panelName
    //         );
    //         res.json({
    //             status: true,
    //             message: "No transactions found",
    //             data: result
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ status: false, error: error.message });
    //     }
    // },

    payinRequests: async (req, res) => {
        try {
            const { start_date, end_date, status, panelName } = req.query;

            const result = await callPanelApi(
                "/nnData/get-payin-requests",
                "GET",
                { start_date, end_date, status },
                panelName
            );

            if (result && Array.isArray(result) && result.length > 0) {
                // Agar transactions mile
                res.json({
                    status: true,
                    message: "Fetched successfully",
                    data: result
                });
            } else {
                // Agar transactions na mile
                res.json({
                    status: true,
                    message: "No transactions found",
                    data: []
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },






}