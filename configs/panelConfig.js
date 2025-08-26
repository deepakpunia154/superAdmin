// module.exports = [
//     {
//         name: "rich143",
//         loginUrl: "http://localhost:6999/adminLogin/loginDashboard",
//         username: "rich1434",
//         password: "Rich@777"
//     },
//     {
//         name: "khatri555",
//         loginUrl: "http://localhost:9206/adminLogin/loginDashboard",
//         username: "rich1434",
//         password: "Rich@777"
//     },
//     {
//         name: "radha567",
//         loginUrl: "http://localhost:5567/adminLogin/loginDashboard",
//         username: "rich1434",
//         password: "Rich@777"
//     },
//     {
//         name: "bhau777",
//         loginUrl: "http://localhost:6479/adminLogin/loginDashboard",
//         username: "rich1434",
//         password: "Rich@777"
//     }
// ];


// panels.js
const PanelConfig = require("../models/PanelConfig");

async function getAllPanels() {
  try {
    const panels = await PanelConfig.find();

    const formatted = panels.map(p => ({
      name: p.name,
      baseUrl: `${p.baseUrl}/adminLogin/loginDashboard`,
      username: p.username,
      password: p.password
    }));

    return formatted;
  } catch (err) {
    console.error("Error fetching panels:", err);
    return [];
  }
}

module.exports = { getAllPanels };
