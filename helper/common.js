const axios = require("axios");
const PanelConfig = require("../models/PanelConfig");
const Token = require("../models/tokens");

//  * @param {string} path - API endpoint (e.g. "/dashboard/dashboardCount")
//  * @param {string} method - HTTP method ("GET" | "POST" | "PUT" | "DELETE")
//  * @param {object} body - (optional) Payload/body for POST/PUT requests



// async function callPanelApi(path, method = "GET", body = {}, panelName = null) {
//   const panels = panelName 
//     ? await PanelConfig.find({ name: panelName }) 
//     : await PanelConfig.find();

//   let results = [];

//   for (const panel of panels) {
//     try {
//       const tokenDoc = await Token.findOne({ panelName: panel.name });
//       const token = tokenDoc ? tokenDoc.token : null;

//       if (!token) {
//         results.push({
//           panel: panel.name,
//           success: false,
//           error: "No token found for this panel"
//         });
//         continue;
//       }
//       const response = await axios({
//         url: `${panel.baseUrl}${path}`,
//         method,
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json"
//         },
//         data: body
//       });

//       results.push({
//         panel: panel.name,
//         success: true,
//         data: response.data
//       });

//     } catch (err) {
//       results.push({
//         panel: panel.name,
//         success: false,
//         error: err.message
//       });
//     }
//   }

//   return results;
// }


async function callPanelApi(path, method = "GET", body = {}, panelName = null) {
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

      // axios config
      const config = {
        url: `${panel.baseUrl}${path}`,
        method,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };

      // Agar GET hai to params use karo, warna body
      if (method.toUpperCase() === "GET") {
        config.params = body;  // query params
      } else {
        config.data = body;    // POST/PUT/PATCH ka body
      }

      const response = await axios(config);
      results.push({
        panel: panel.name,
        // success: true,
        data: response.data
      });

    } catch (err) {
      results.push({
        panel: panel.name,
        success: false,
        error: err.response.data.message
      });
    }
  }

  return results;
}


module.exports = { callPanelApi };
