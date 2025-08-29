const fetch = require("node-fetch");
const Token = require("../models/tokens");
const {getAllPanels} = require("../configs/panelConfig");

async function loginToPanels() {
    let results = [];
     const panels = await getAllPanels();
    for (const panel of panels) {
        try {

            const dta = JSON.stringify({
                username: panel.username,
                password: panel.password
            })
            const res = await fetch(panel.baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_username: panel.username,
                    user_password: panel.password
                })
            });

            const data = await res.json();

            if (data.token) {
                await Token.findOneAndUpdate(
                    { panelName: panel.name },
                    { token: data.token },
                    { upsert: true }
                );
            }

            results.push({
                panel: panel.name,
                success: true,
                token: data.token || null,
                data: data
            });

        } catch (err) {
            console.error(`Failed to login ${panel.name}`, err.message);
        }
    }
    return results;
}

async function blockUser(userId) {
    let results = [];

    for (const panel of panelConfig) {
        const tokenDoc = await Token.findOne({ panelName: panel.name });
        const token = tokenDoc ? tokenDoc.token : null;

        if (!token) {
            results.push({ panel: panel.name, success: false, error: "No token available" });
            continue;
        }

        try {
            const res = await fetch(panel.blockUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userId })
            });
            const data = await res.json();
            results.push({ panel: panel.name, success: true, data });
        } catch (err) {
            results.push({ panel: panel.name, success: false, error: err.message });
        }
    }

    return results;
}

module.exports = { loginToPanels, blockUser };
