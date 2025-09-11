
const { callPanelApi } = require("../../helper/common");

module.exports = {

    // mainGameResult: async (req, res) => {
    //     try {
    //         const { winningDigit, resultDate, session, providerName, panels } = req.body;

    //         let results = [];

    //         for (const panel of panels) {
    //             const result = await callPanelApi(
    //                 "/mainGameResult",
    //                 "POST",
    //                 {
    //                     winningDigit,
    //                     resultDate,
    //                     session,
    //                     providerId: panel.providerId,
    //                     providerName
    //                 },
    //                 panel.panelName
    //             );

    //             results.push({
    //                 panelName: panel.panelName,
    //                 providerId: panel.providerId,
    //                 success: result
    //             });
    //         }

    //         res.json({
    //             status: true,
    //             message: "Game result declared successfully",
    //             data: results
    //         });

    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ status: false, error: error.message });
    //     }
    // },

    mainGameResult: async (req, res) => {
        try {
            const { winningDigit, resultDate, session, providerName, panels } = req.body;

            let results = [];
            let hasError = false;

            for (const panel of panels) {
                const panelResults = await callPanelApi(
                    "/mainGameResult",
                    "POST",
                    {
                        winningDigit,
                        resultDate,
                        session,
                        providerId: panel.providerId,
                        providerName
                    },
                    panel.panelName
                );

                const result = panelResults[0];

                if (result.success === false) {
                    hasError = true;
                }

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: result.success ?? true,
                    error: result.error || null,
                    data: result.data || null
                });
            }
            const firstError = results.find(r => r.error)?.error || "Some panels failed";
            if (hasError) {
                return res.json({
                    status: false,
                    message: firstError,
                    data: results
                });
            }

            res.json({
                status: true,
                message: "Game result declared successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },


    getMainGameResult: async (req, res) => {
        try {
            const { panelName } = req.query;

            const result = await callPanelApi(
                "/mainGameResult",
                "GET",
                null,
                panelName
            );

            const formatted = result.map(item => ({
                panel: item.panel,
                results: item?.data?.data?.result || []
            }));

            res.json({
                status: true,
                message: "Game result fetch successfully",
                data: formatted
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    pastResult: async (req, res) => {
        try {
            const { date, panelName } = req.query
            const result = await callPanelApi(
                "/mainGameResult/pastResult",
                "GET",
                { date },
                panelName
            );

            res.json({
                status: true,
                message: "Past results retrieved successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    mainWinnerList: async (req, res) => {
        try {
            const {
                digit,
                provider,
                gamedate,
                resultId,
                resultStatus,
                digitFamily,
                sessionType,
                providerName,
                panelName,
                limit,
                page,
                searchQuery
            } = req.body
            const result = await callPanelApi(
                "/winnerList/mainWinnerList",
                "POST",
                {
                    digit,
                    provider,
                    gamedate,
                    resultId,
                    resultStatus,
                    digitFamily,
                    sessionType,
                    providerName,
                    limit,
                    page,
                    searchQuery
                },
                panelName
            );

            res.json({
                status: true,
                message: "Past results retrieved successfully",
                data: result
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    mainGameResultDelete: async (req, res) => {
        try {
            const { session, providerName, panels } = req.body;

            let results = [];

            for (const panel of panels) {
                const result = await callPanelApi(
                    "/mainGameResult/delete",
                    "DELETE",
                    {
                        providerId: panel.providerId,
                        resultId: panel.resultId,
                        session,
                        providerName
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    resultId: panel.resultId,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "Game result deleted successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    confirmPayment: async (req, res) => {
        try {
            const {
                windigit,
                gameDate,
                digitFamily,
                session,
                jodiDigit,
                halfSangam1,
                halfSangam2,
                fullSangam,
                reqType,
                panels
            } = req.body;

            let results = [];

            for (const panel of panels) {
                const result = await callPanelApi(
                    "/winnerList/gameWinner",
                    "POST",
                    {
                        providerId: panel.providerId,
                        windigit,
                        gameDate,
                        digitFamily,
                        session,
                        jodiDigit,
                        halfSangam1,
                        halfSangam2,
                        fullSangam,
                        resultId: panel.resultId,
                        reqType,
                        adminId: panel.adminId
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    resultId: panel.resultId,
                    adminId: panel.adminId,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "Payment confirmation processed successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    }
}
