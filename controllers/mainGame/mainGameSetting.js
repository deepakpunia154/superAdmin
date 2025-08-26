const { callPanelApi } = require("../../helper/common");

module.exports = {

    gameSetting: async (req, res) => {
        try {

            const result = await callPanelApi(
                "/mainGameSetting",
                "GET",
            );

            res.json({
                status: true,
                message: "Game setting list fetch successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    addGameSetting: async (req, res) => {
        try {
            const {
                gameDay, game1, game2, game3, game4, status, gameid, panelName
            } = req.body

            const result = await callPanelApi(
                "/mainGameSetting/insertSettings",
                "POST",
                {
                    gameDay, game1, game2, game3, game4, status, gameid
                },
                panelName

            );

            res.json({
                status: true,
                message: "Game setting add successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    updateAllGameSetting: async (req, res) => {
        try {
            const {
                gameDay, game1, game2, game3, game4, status, gameid, panelName
            } = req.body

            const result = await callPanelApi(
                "/mainGameSetting/updateAll",
                "POST",
                {
                    gameDay, game1, game2, game3, game4, status, gameid
                },
                panelName

            );

            res.json({
                status: true,
                message: "All game setting update successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    updateGameSetting: async (req, res) => {
        try {
            const {
                gameDay, game1, game2, game3, game4, status, gameid, panelName
            } = req.body

            const result = await callPanelApi(
                "/mainGameSetting",
                "PATCH",
                {
                    gameDay, game1, game2, game3, game4, status, gameid
                },
                panelName

            );

            res.json({
                status: true,
                message: "All game setting update successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },
}