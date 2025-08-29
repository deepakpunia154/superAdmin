

const { callPanelApi } = require("../../helper/common");

module.exports = {
    versionSetting: async (req, res) => {
        try {
            const { panelName } = req.query;
            const result = await callPanelApi(
                "/versionSetting",
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Version settings retrieved successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    getCallFeatureStatus: async (req, res) => {
        try {
            const { id, panelName } = req.query;
            const result = await callPanelApi(
                `/nnData/get-call-feature-status/${id}`,
                "GET",
                null,
                panelName
            );
            res.json({
                status: true,
                message: "Call feature retrieved successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateAppSet: async (req, res) => {
        try {
            console.log("req.body:", req.body);
            console.log("req.file:", req.file);

            const { type, id, appVer, panelName } = req.body;
            const apk = req.file;

            const result = await callPanelApi(
                "/versionSetting/updateAppSet",
                "POST",
                { type, id, appVer, apk },
                panelName,
                true
            );

            res.json({
                status: true,
                message: "App settings updated successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updateAppOtpFlags: async (req, res) => {
        try {
            const { forgetOtp, id, loginOtp, mpinOtp, panelName } = req.body;
            const result = await callPanelApi(
                "/versionSetting/updateAppOtpFlags",
                "POST",
                { forgetOtp, id, loginOtp, mpinOtp },
                panelName
            );
            res.json({
                status: true,
                message: "OTP flags updated successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },


}