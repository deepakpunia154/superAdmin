const axios = require("axios");
const PanelConfig = require("../models/PanelConfig");
const Token = require("../models/tokens");

async function callPanelApi(path, method = "GET", body = {}, panelName = null, isFormData = null) {

  const panels = panelName
    ? await PanelConfig.find({ name: panelName })
    : await PanelConfig.find();

  let results = [];

  for (const panel of panels) {
    try {
      const tokenDoc = await Token.findOne({ panelName: panel.name });
      const token = tokenDoc ? tokenDoc.token : null;

      if (!token) {
        results.push({
          panel: panel.name,
          success: false,
          error: "No token found for this panel"
        });
        continue;
      }

      const config = {
        url: `${panel.baseUrl}${path}`,
        method,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };

      if (isFormData == true) {
        config.data = body;
        config.headers["Content-Type"] = "multipart/form-data";

      } else {
        if (method.toUpperCase() === "GET") {
          config.params = body;
        } else {
          config.data = body;
          config.headers["Content-Type"] = "application/json";
        }
      }

      const response = await axios(config);
      results.push({
        panel: panel.name,
        data: response.data
      });

    } catch (err) {
      results.push({
        panel: panel.name,
        success: false,
        error: err?.response?.data?.message || err.message
      });
    }
  }

  return results;
}


module.exports = { callPanelApi };
