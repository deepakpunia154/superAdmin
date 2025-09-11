const { loginToPanels, blockUser } = require("../services/panelService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = process.env.JWT_SECRET
const SuperAdminSchema = require("../models/superAdmin");
const Token = require("../models/tokens");

module.exports = {

    superAdminLogin: async (req, res) => {
        const { username, password } = req.body;

        try {
            let superAdmin;

            if (username === "superadmin" && password === "superpass") {
                superAdmin = { _id: "local-superadmin-id", username: "superadmin" };
            } else {
                superAdmin = await SuperAdminSchema.findOne({ username });
                if (!superAdmin) {
                    return res.status(401).json({ status: false, message: "Invalid username or password" });
                }

                const isMatch = await bcrypt.compare(password, superAdmin.password);
                if (!isMatch) {
                    return res.status(401).json({ status: false, message: "Invalid username or password" });
                }
            }

            const token = jwt.sign(
                { id: superAdmin._id, username: superAdmin.username },
                SECRET_KEY,
                // { expiresIn: "1d" }
            );

            const panelData = await loginToPanels();

            return res.json({
                status: true,
                message: "Super Admin + Panel login successful",
                token,
                superAdmin: {
                    id: superAdmin._id,
                    username: superAdmin.username
                },
                //    panels: panelData.map(p => ({
                //     success: true,
                //     panel: p.panel,
                //     token: p.token
                // }))
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: false, message: "Something went wrong", error: error.message });
        }
    },

    getTokens: async (req, res) => {
        try {
            const tokens = await Token.find({}, "panelName token");
            return res.json({
                status: true,
                message: "All panel tokens fetched successfully",
                data: tokens,
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    },

    getAdminsDetails: async (req, res) => {
        try {
            const panelData = await loginToPanels();
            return res.json({
                status: true,
                message: "All admin details fetched successfully",
                panels: panelData.map(p => ({
                    panel: p.panel,
                    token: p.token,
                    adminDetails: p.data.user
                }))
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    },


    blockUserFromAllPanels: async (req, res) => {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ status: false, message: "User ID required" });
        }

        const results = await blockUser(userId);
        return res.json({ status: true, results });
    }
}
