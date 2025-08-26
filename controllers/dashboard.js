const { callPanelApi } = require("../helper/common");

module.exports ={

dashboardCount: async (req, res) => {
  const result = await callPanelApi("/dashboard/dashboardCount", "GET");
  res.json(result);
},

getAllUsers: async (req, res) => {
  try {
    const { page = 1, limit = 25, search = "", panelName } = req.query;

    const result = await callPanelApi(
      "/allUser/getAllUsers",
      "POST",
      { page, limit, search },
      panelName 
    );

    res.json({
      status: true,
      message: "User list fetch successfully",
      data: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}



// const result = await callPanelApi("/users", "GET", { page: 2, limit: 10 });
// const result = await callPanelApi("/user/block", "POST", { userId: "12345" });

}


