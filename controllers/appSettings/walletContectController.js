const { callPanelApi } = require("../../helper/common");

module.exports = {
    walletContect: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/walletContect",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Wallet contact fetched successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getHeadLine: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/walletContect/headLine",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Contact headline fetched successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getUpi: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/walletContect/upi",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Contact upiId fetched successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updatewalletContact: async (req, res) => {
        try {
            const { panels, number, whatsAppNumber } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, id } = p;
                const result = await callPanelApi(
                    "/walletContect/updatewalletContact",
                    "POST",
                    { id, number, whatsAppNumber, panelName },
                    panelName
                );
                results.push({ panelName, result });
            }
            res.json({
                status: true,
                message: "Wallet contact updated successfully",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateHeadline: async (req, res) => {
        try {
            const { panels, headline } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, id } = p;
                const result = await callPanelApi(
                    "/walletContect/updateHeadline",
                    "POST",
                    { id, headline, panelName },
                    panelName
                );
                results.push({ panelName, result });
            }

            res.json({
                status: true,
                message: "Wallet headline updated successfully",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    }
}