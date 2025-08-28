const { callPanelApi } = require("../../helper/common");

module.exports = {
    howToPlay: async (req, res) => {
        try {
            const { panelName } = req.query;

            const result = await callPanelApi(
                "/appSetting/htp",
                "GET",
                null,
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
    
    // upsert
    updateHtp: async (req, res) => {
        try {
            const { panelName, howtoplay } = req.body;
            const result = await callPanelApi(
                "/appSetting/updateHtp",
                "POST",
                { howtoplay },
                panelName
            );

            res.json({
                status: true,
                message: "Update htp data successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong",err:err.message });
        }
    },

}