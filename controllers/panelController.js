const PanelConfig = require("../models/PanelConfig");
const mongoose = require("mongoose");

module.exports = {
    // addPanel: async (req, res) => {
    //     try {
    //         const { name, loginUrl, username, password, projectName } = req.body;

    //         const panel = await PanelConfig.findOneAndUpdate(
    //             { name },
    //             { $set: { name, loginUrl, username, password, projectName } },
    //             { upsert: true, new: true }
    //         );

    //         return res.json({ status: true, message: "Panel saved successfully", panel });
    //     } catch (err) {
    //         console.error(err);
    //         return res.status(500).json({ status: false, err: err.message, message: "Something went wrong" });
    //     }
    // },


    addPanel: async (req, res) => {
        try {
            const {
                name,
                loginUrl,
                username,
                password,
                projectName,
                adminId,
                permissions
            } = req.body;

            const panel = await PanelConfig.findOneAndUpdate(
                { name },
                {
                    $set: {
                        name,
                        baseUrl: loginUrl,  
                        username,
                        password,
                        projectName,
                        adminId,
                        ...(permissions && { permissions }) 
                    }
                },
                { upsert: true, new: true }
            );

            return res.json({
                status: true,
                message: "Panel saved successfully",
                panel
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                err: err.message,
                message: "Something went wrong"
            });
        }
    },


    getPanels: async (req, res) => {
        try {
            const panels = await PanelConfig.find({});
            return res.json({ status: true, panels });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Something went wrong" });
        }
    },

    getPanelById: async (req, res) => {
        try {
            const { id } = req.params;
            const panel = await PanelConfig.findById(id);
            if (!panel) return res.status(404).json({ status: false, message: "Panel not found" });

            return res.json({ status: true, panel });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Something went wrong" });
        }
    },

    // updatePanel: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const updateData = req.body;

    //         const panel = await PanelConfig.findByIdAndUpdate(
    //             id,
    //             { $set: updateData },
    //             { new: true }
    //         );

    //         if (!panel) return res.status(404).json({ status: false, message: "Panel not found" });

    //         return res.json({ status: true, message: "Panel updated successfully", panel });
    //     } catch (err) {
    //         console.error(err);
    //         return res.status(500).json({ status: false, message: "Something went wrong" });
    //     }
    // },

    updatePanel: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            let updateFields = {};

            const allowedFields = ["name", "projectName", "baseUrl", "username", "password", "adminId", "active"];
            allowedFields.forEach(field => {
                if (updateData[field] !== undefined) {
                    updateFields[field] = updateData[field];
                }
            });

            if (updateData.permissions) {
                for (const [key, value] of Object.entries(updateData.permissions)) {
                    updateFields[`permissions.${key}`] = value;
                }
            }

            const panel = await PanelConfig.findByIdAndUpdate(
                id,
                { $set: updateFields },
                { new: true }
            );

            if (!panel) {
                return res.status(404).json({ status: false, message: "Panel not found" });
            }

            return res.json({ status: true, message: "Panel updated successfully", panel });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Something went wrong" });
        }
    },


    deletePanel: async (req, res) => {
        try {
            const { id } = req.params;
            const panel = await PanelConfig.findByIdAndDelete(id);

            if (!panel) return res.status(404).json({ status: false, message: "Panel not found" });

            return res.json({ status: true, message: "Panel deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Something went wrong" });
        }
    },

    togglePanelStatus: async (req, res) => {
        try {
            const { id, active } = req.body;

            const panel = await PanelConfig.findByIdAndUpdate(
                id,
                { $set: { active } },
                { new: true }
            );

            if (!panel) {
                return res.status(404).json({ status: false, message: "Panel not found" });
            }

            return res.json({
                status: true,
                message: `Panel ${active === "true" ? "activated" : "deactivated"} successfully`,
                panel,
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: err.message });
        }
    },

}
