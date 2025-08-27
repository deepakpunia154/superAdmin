const { callPanelApi } = require("../../helper/common");

module.exports = {

    getrevertPayment: async (req, res) => {
        try {
            const { date, panelName } = req.query
            const result = await callPanelApi(
                "/mainGameResult/revertPayment",
                "GET",
                { date },
                panelName
            );

            res.json({
                status: true,
                message: "Revert payment successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    paymentRevert: async (req, res) => {
        try {
            const { gameSession, digit, digitFamily, gameDate, panels } = req.body;

            let results = [];

            for (const panel of panels) {
                const result = await callPanelApi(
                    "/mainGameResult/paymentRevert",
                    "POST",
                    {
                        id: panel.id,
                        provider: panel.provider,
                        gameSession,
                        digit,
                        digitFamily,
                        gameDate,
                        adminId: panel.adminId,    
                        adminName: panel.adminName
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    provider: panel.provider,
                    id: panel.id,
                    adminId: panel.adminId,
                    adminName: panel.adminName,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "Revert payment processed successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    }

}

