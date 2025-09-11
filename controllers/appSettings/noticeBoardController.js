const { callPanelApi } = require("../../helper/common");

module.exports = {
    noticeBoard: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/noticeBoard",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Notice board show Successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateNotice: async (req, res) => {
        try {
            const { panels, title1, title2, title3, desc1, desc2, desc3, contact } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, id } = p;
                const result = await callPanelApi(
                    "/noticeBoard/updateNotice",
                    "POST",
                    { id, title1, title2, title3, desc1, desc2, desc3, contact },
                    panelName
                );
                results.push({ panelName, result });
            }

            res.json({
                status: true,
                message: "Notice board updated successfully",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    }
}