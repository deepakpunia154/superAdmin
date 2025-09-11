const { callPanelApi } = require("../../helper/common");

module.exports = {
    employees: async (req, res) => {
        try {
            const { page = 1, limit = 25, search, panelName } = req.query;

            const result = await callPanelApi(
                "/master/employees",
                "POST",
                { page, limit, searchQuery: search },
                panelName
            );

            res.json({
                status: true,
                message: "User list fetch successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    updatePassword: async (req, res) => {
        try {
            const { adminId, password, panelName } = req.body;

            const result = await callPanelApi(
                "/master/employees/updatePassword",
                "POST",
                { adminId, password, },
                panelName
            );

            res.json({
                status: true,
                message: "Employee list fetched successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    blockEmployee: async (req, res) => {
        try {
            const { adminId, status, panelName } = req.body;

            const result = await callPanelApi(
                "/master/employees/blockEmployee",
                "POST",
                { adminId, status, },
                panelName
            );

            res.json({
                status: true,
                message: "Block/Unblock fetched successfully.",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    fetchEmpById: async (req, res) => {
        try {
            const { id, panelName } = req.query;
            const result = await callPanelApi(
                `/master/employees/empById/${id}`,
                "GET",
                null,
                panelName
            );

            res.json({
                status: true,
                message: "Employee informition show successfully",
                data: result
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

    deleteEmp: async (req, res) => {
        try {
            const { panels } = req.body;
            let results = [];
            for (const p of panels) {
                const { panelName, id } = p;
                const result = await callPanelApi(
                    "/master/employees/deleteEmp",
                    "POST",
                    { id },
                    panelName
                );
                results.push({ panelName, result });
            }

            res.json({
                status: true,
                message: "Employee deleted successfully.",
                data: results
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Something went wrong", err: err.message });
        }
    },

}
