const { callPanelApi } = require("../helper/common");

module.exports = {

  dashboardCount: async (req, res) => {
    const { panelName } = req.query;
    const result = await callPanelApi("/dashboard/dashboardCount", "GET", null, panelName);
    res.json({
      // status: true,
      // message: "Dashboard count fetch successfully",
      // data: result
      result
    });
  },

  getBriefDeposit: async (req, res) => {
    const { panelName } = req.query;
    const result = await callPanelApi("/fundReport/getBriefDeposit", "POST", undefined, panelName);

    res.json({
      status: true,
      message: "Brief deposit  fetch successfully",
      data: result
    });
  },

  userReportAll: async (req, res) => {
    const { gameId, panelName } = req.query;
    const result = await callPanelApi("/salesReport/userReportAll", "POST", {
      gameId
    },
      panelName
    );

    res.json({
      status: true,
      message: "User report fetch successfully",
      data: result
    });
  },

  checkUpdateCount: async (req, res) => {
    const { panelName } = req.query;
    const result = await callPanelApi("/allUser/checkUpdateCount", "GET", null, panelName
    );

    res.json({
      status: true,
      message: "User report fetch successfully",
      data: result
    });
  },

  getUserRegisterCount: async (req, res) => {
    const { panelName } = req.query;
    const result = await callPanelApi("/dashboard/getUserRegisterCount", "GET", null, panelName);
    res.json({
      status: true,
      message: "User report fetch successfully",
      data: result
    });
  },

  // const result = await callPanelApi("/users", "GET", { page: 2, limit: 10 });
  // const result = await callPanelApi("/user/block", "POST", { userId: "12345" });

}


