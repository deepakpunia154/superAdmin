const { callPanelApi } = require("../../helper/common");

module.exports = {
  getAllAccount: async (req, res) => {
        try {
            const { acc_num, panelName } = req.body;

            const result = await callPanelApi(
                "/searchAccount/getDetails",
                "POST",
                { acc_num },
                panelName
            );

            res.json({
                status: true,
                message: "Search Account successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong",err:err.message});
        }
    },
}