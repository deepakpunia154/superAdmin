const { callPanelApi } = require("../helper/common");

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const { page = 1, limit = 25, search = "", panelName } = req.query;

            const result = await callPanelApi(
                "/allUser/getAllUsers",
                "POST",
                { page, limit, search },
                panelName
            );

            res.json({
                status: true,
                message: "User list fetch successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    blockUser: async (req, res) => {
        try {
            const { userId, blockReason, blockStatus, panelName } = req.body;

            const result = await callPanelApi(
                "/allUser/blockUser",
                "POST",
                { id: userId, blockReason, blockStatus },
                panelName
            );

            res.json({
                status: true,
                message: blockStatus === true
                    ? "User blocked successfully"
                    : "User unblocked successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: false, error: err.message });
        }
    },

    getUserProfileById: async (req, res) => {
        try {
            const { id, panelName } = req.query;

            const result = await callPanelApi(
                "/allUser/getProfile",
                "GET",
                { id },
                panelName
            );

            res.json({
                status: true,
                message: "User profile fetch successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    deleteUserByAdmin: async (req, res) => {
        try {
            const { id, ression, panelName } = req.body;

            const result = await callPanelApi(
                "/allUser/deleteUserByAdmin",
                "POST",
                { id, ression },
                panelName
            );

            res.json({
                status: true,
                message: "User delete successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

}