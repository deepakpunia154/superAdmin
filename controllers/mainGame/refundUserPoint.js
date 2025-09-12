const { callPanelApi } = require("../../helper/common");

module.exports = {

    refundList: async (req, res) => {
        try {
            const { resultDate, page, limit, panels } = req.body;
            let results = [];
            for (const panel of panels) {
                const result = await callPanelApi(
                    "/mainGameResult/refundList",
                    "POST",
                    {
                        providerId: panel.providerId,
                        resultDate,
                        page,
                        limit
                    },
                    panel.panelName
                );

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: result
                });
            }

            res.json({
                status: true,
                message: "User refund list fetch successfully",
                data: results
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, error: error.message });
        }
    },

    // refundAll: async (req, res) => {
    //     try {
    //         const { userid, biddingPoints, resultDate, type, providerName, _id, panels } = req.body;

    //         let results = [];

    //         for (const panel of panels) {
    //             const result = await callPanelApi(
    //                 "/mainGameResult/refundAll",
    //                 "POST",
    //                 {
    //                     userid,
    //                     biddingPoints,
    //                     providerId: panel.providerId,
    //                     resultDate,
    //                     type,
    //                     providerName,
    //                     _id
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
    //             message: "User refund processed successfully",
    //             data: results
    //         });

    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ status: false, error: error.message });
    //     }
    // }


 

   refundAll: async (req, res) => {
    try {
        const { userid, biddingPoints, resultDate, type, providerName, _id, panels } = req.body;
        let results = [];

        for (const panel of panels) {
            try {
                const result = await callPanelApi(
                    "/mainGameResult/refundAll",
                    "POST",
                    {
                        userid,
                        biddingPoints,
                        providerId: panel.providerId,
                        resultDate,
                        type,
                        providerName,
                        _id
                    },
                    panel.panelName
                );

                const panelSuccess = Array.isArray(result)
                    ? result.every(r => r.success) 
                    : (result && result.success === true);

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: panelSuccess,
                    data: result
                });

            } catch (err) {
                console.error(`Error refunding panel ${panel.panelName}:`, err.message);

                results.push({
                    panelName: panel.panelName,
                    providerId: panel.providerId,
                    success: false,
                    error: err.message
                });
            }
        }

        const allFailed = results.every(r => !r.success);
        const someFailed = results.some(r => !r.success);

        let errorMessages = Array.from(new Set(
            results
                .filter(r => !r.success)
                .map(r => {
                    if (Array.isArray(r.data)) {
                        return r.data.map(d => d.error).filter(Boolean).join(", ");
                    }
                    return r.error || (r.data && r.data.error) || "Unknown error";
                })
                .filter(Boolean)
        ));

        res.json({
            status: !allFailed,
            message: allFailed
                ? errorMessages.join(" | ")      
                : someFailed
                    ? errorMessages.join(" | ")   
                    : "User refund processed successfully",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, error: error.message });
    }
}



    // refundAll: async (req, res) => {
    //     function inspectResultForSuccess(result) {
    //         if (result == null) return false;

    //         if (Array.isArray(result)) {
    //             return result.every(item => {
    //                 if (item == null) return false;
    //                 if (typeof item === 'object') {
    //                     if ('success' in item) return item.success === true;
    //                     if ('error' in item) return false;
    //                     return true;
    //                 }
    //                 return Boolean(item);
    //             });
    //         }

    //         if (typeof result === 'object') {
    //             if ('success' in result) return result.success === true;
    //             if ('error' in result) return false;
    //             if (Array.isArray(result.data)) return inspectResultForSuccess(result.data);
    //             return true;
    //         }

    //         if (typeof result === 'boolean') return result === true;
    //         if (typeof result === 'string') return !/error/i.test(result);
    //         return Boolean(result);
    //     }

    //     try {
    //         const { userid, biddingPoints, resultDate, type, providerName, _id, panels } = req.body;

    //         if (!Array.isArray(panels) || panels.length === 0) {
    //             return res.status(400).json({ status: false, message: "No panels provided" });
    //         }

    //         const results = [];

    //         for (const panel of panels) {
    //             try {
    //                 const result = await callPanelApi(
    //                     "/mainGameResult/refundAll",
    //                     "POST",
    //                     {
    //                         userid,
    //                         biddingPoints,
    //                         providerId: panel.providerId,
    //                         resultDate,
    //                         type,
    //                         providerName,
    //                         _id
    //                     },
    //                     panel.panelName
    //                 );

    //                 const panelSuccess = inspectResultForSuccess(result);

    //                 results.push({
    //                     panelName: panel.panelName,
    //                     providerId: panel.providerId,
    //                     success: panelSuccess,
    //                     data: result
    //                 });

    //             } catch (err) {
    //                 console.error(`Error calling panel ${panel.panelName}:`, err);
    //                 results.push({
    //                     panelName: panel.panelName,
    //                     providerId: panel.providerId,
    //                     success: false,
    //                     error: err && err.message ? err.message : String(err)
    //                 });
    //             }
    //         }

    //         const allSuccess = results.every(r => r.success === true);
    //         const allFailed = results.every(r => r.success === false);
    //         const someFailed = results.some(r => r.success === false);

    //         if (allSuccess) {
    //             return res.status(200).json({
    //                 status: true,
    //                 message: "User refund processed successfully",
    //                 data: results
    //             });
    //         }

    //         if (allFailed) {
    //             return res.status(500).json({
    //                 status: false,
    //                 message: "Refund failed for panels",
    //                 data: results
    //             });
    //         }

    //         return res.status(207).json({
    //             status: false,
    //             message: "Refund processed with some errors",
    //             data: results
    //         });

    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ status: false, error: error.message });
    //     }
    // }


}
