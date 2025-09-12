
const { callPanelApi } = require("../../helper/common");

module.exports = {

    paymentGateways: async (req, res) => {
        try {
            const { panelName } = req.query;
            if (!panelName) {
                return res.status(400).json({
                    status: false,
                    message: "panelName query parameter is required"
                });
            }

            const result = await callPanelApi(
                "/nnData/api/admin/payment-gateways",
                "GET",
                null,
                panelName
            );

            res.json({
                status: true,
                message: "Fetched successfully",
                data: result
            });
        } catch (error) {
            console.error("Error fetching payment gateways:", error);

            if (error.response) {
                return res.status(error.response.status || 502).json({
                    status: false,
                    message: "Failed to fetch payment gateways from panel API",
                    error: error.response.data || error.message
                });
            }

            if (error.request) {
                return res.status(504).json({
                    status: false,
                    message: "No response received from panel API",
                    error: error.message
                });
            }

            res.status(500).json({
                status: false,
                message: "Internal server error",
                error: process.env.NODE_ENV === "development" ? error.message : undefined
            });
        }
    },

    activatedGateways: async (req, res) => {
        try {
            const { name } = req.params;
            const { panelName } = req.query;

            const result = await callPanelApi(
                `/nnData/api/admin/activate-gateway/${name}`,
                "PUT",
                undefined,
                panelName
            );

            res.json({
                status: true,
                message: "Activated successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

}