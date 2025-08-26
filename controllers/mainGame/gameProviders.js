
const { callPanelApi } = require("../../helper/common");

module.exports = {

    gameProvider: async (req, res) => {
        try {

            const result = await callPanelApi(
                "/mainGames",
                "GET",
            );

            res.json({
                status: true,
                message: "Game providers list fetch successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    updateGameProvider: async (req, res) => {
        try {
            const { activeStatus, gameId, gamename, result, panelName } = req.body
            const data = await callPanelApi(
                "/mainGames",
                "PATCH",
                {
                    activeStatus,
                    gameId,
                    gamename,
                    result
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game providers update successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    addGameProvider: async (req, res) => {
        try {
            const { activeStatus, gamename, result, panelName } = req.body
            const data = await callPanelApi(
                "/mainGames/insertGame",
                "POST",
                {
                    activeStatus,
                    gamename,
                    result
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game providers update successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    deleteGameProvider: async (req, res) => {
        try {
            const { gameId, panelName } = req.body
            const data = await callPanelApi(
                "/mainGames",
                "DELETE",
                {
                    gameId
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game providers update successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    }
}