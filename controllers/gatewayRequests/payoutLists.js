
const { callPanelApi } = require("../../helper/common");

module.exports = {
    getPendingPayouts: async (req, res) => {
        try {
            const { start_date, end_date, status, panelName } = req.query
            const result = await callPanelApi(
                "/fundreq/get-pending-payouts",
                "GET",
                { start_date, end_date, status },
                panelName
            );
            res.json({
                status: true,
                message: "Pending payout requests fetched successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    updatePendingPayoutRequest: async (req, res) => {
        try {
            const { panels, action } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, request_id } = p;
                const result = await callPanelApi(
                    "/fundreq/update-pending-payout-request",
                    "POST",
                    { action, request_id },
                    panelName
                );
                results.push({ panelName, result });
            }

            res.json({
                status: true,
                message: "Request approved successfully and wallet balance updated",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getPayoutRequests: async (req, res) => {
        try {
            const { start_date, end_date, status, panelName } = req.query
            const result = await callPanelApi(
                "/fundreq/get-payout-requests",
                "GET",
                { start_date, end_date, status },
                panelName
            );
            res.json({
                status: true,
                message: "Pending payout requests fetched successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    approvePayment: async (req, res) => {
        try {
            const { panels, action } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, request_id } = p;
                const result = await callPanelApi(
                    "/fundreq/approve-payout",
                    "POST",
                    { action, request_id },
                    panelName
                );
                results.push({ panelName, result });
            }

            res.json({
                status: true,
                message: "Payout approved",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

}