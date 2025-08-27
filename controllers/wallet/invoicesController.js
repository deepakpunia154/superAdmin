const { callPanelApi } = require("../../helper/common");

module.exports = {
  getProfile: async (req, res) => {
        try {
            const { page = 1, limit = 25, search = "", panelName } = req.query;

            const result = await callPanelApi(
                "/invoice/profileChange",
                "POST",
                { page, limit,search },
                panelName
            );

            res.json({
                status: true,
                message: "Get profile successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong" ,err:err.message});
        }
    },
}