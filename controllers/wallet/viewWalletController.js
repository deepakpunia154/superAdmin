const { callPanelApi } = require("../../helper/common");

module.exports = {
    viewWallet: async (req, res) => {
        try {
            const { page = 1, limit = 25, search = "", panelName } = req.query;
            const result = await callPanelApi(
                "/view_wallet",
                "POST",
                { page, perPage: limit, search },
                panelName
            );

            res.json({
                status: true,
                message: "View wallet successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    newCredit: async (req, res) => {
        try {
            const { page = 1, limit = 25, search = "", id, panelName } = req.query;
            const result = await callPanelApi(
                "/view_wallet/newCredit",
                "POST",
                { page, limit, id, search },
                panelName
            );

            res.json({
                status: true,
                message: "Get creadit data successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    walletUpdate: async (req, res) => {
        try {
            const { admin_id, amount, id, particular, type, panelName } = req.body;
            const result = await callPanelApi(
                "/view_wallet/walletUpdate",
                "POST",
                { admin_id, amount, id, particular, type },
                panelName
            );

            res.json({
                status: true,
                message: "Wallet update successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    newHistroy: async (req, res) => {
        try {
            const { page = 1, limit = 25, search = "", id, panelName } = req.query;
            const result = await callPanelApi(
                "/view_wallet/newHistroy",
                "POST",
                { page, limit, id, search },
                panelName
            );

            res.json({
                status: true,
                message: "Get history successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getProfile: async (req, res) => {
        try {
            const { userId, panelName } = req.query;
            const result = await callPanelApi(
                "/view_wallet/getProfile ",
                "GET",
                { userId },
                panelName
            );

            res.json({
                status: true,
                message: "Get profile successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },


}