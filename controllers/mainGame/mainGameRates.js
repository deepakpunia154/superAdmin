
const { callPanelApi } = require("../../helper/common");

module.exports = {

    gameRates: async (req, res) => {
        try {
            const { panelName } = req.query
            const result = await callPanelApi(
                "/mainGameRate",
                "GET",
                null,
                panelName
            );

            res.json({
                status: true,
                message: "Game rates fetch successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    addGameRates: async (req, res) => {
        try {
            const { gamename, price, panelName } = req.body
            const data = await callPanelApi(
                "/mainGameRate/insertGame",
                "POST",
                {
                    gamename,
                    price
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game rates add successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    updateGameRates: async (req, res) => {
        try {
            const { gamename, price, gameRateId, panelName } = req.body
            const data = await callPanelApi(
                "/mainGameRate",
                "PATCH",
                {
                    gamename,
                    price,
                    userId: gameRateId //game rate
                    //  id
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game rates update successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    deleteGameRates: async (req, res) => {
        try {
            const { gameRateId, panelName } = req.body
            const data = await callPanelApi(
                "/mainGameRate",
                "DELETE",
                {
                    userId: gameRateId //game rate id
                },
                panelName
            );

            res.json({
                status: true,
                message: "Game rates update successfully",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },
}