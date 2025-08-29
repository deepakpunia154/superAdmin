const { callPanelApi } = require("../../helper/common");

module.exports = {
    createEmployee: async (req, res) => {
        try {
            const { username,
                name,
                loginPermission,
                password,
                designation,
                colViewPermission,
                loginFor,
                panelName } = req.body;

            const result = await callPanelApi(
                "/master/employees/createEmployee",
                "POST",
                {
                    username,
                    name,
                    loginPermission,
                    password,
                    designation,
                    colViewPermission,
                    loginFor
                },
                panelName
            );

            res.json({
                status: true,
                message: "User Registered Successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },
}