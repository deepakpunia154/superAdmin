const { callPanelApi } = require("../../helper/common");

module.exports = {
    notification: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/notification",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Notifications Fatch Successfully!!!",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },


    insertNotification: async (req, res) => {
        try {
            const { message, title, panelName } = req.body;
            const result = await callPanelApi(
                "/notification/inserNotification",
                "POST",
                { message, title },
                panelName
            );
            res.json({
                status: true,
                message: "Notification inserted successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },


    deleteNotification: async (req, res) => {
        try {
            const { id, panelName } = req.query;
            const result = await callPanelApi(
                `/notification/${id}`,
                "DELETE",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Notification deleted successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

}
