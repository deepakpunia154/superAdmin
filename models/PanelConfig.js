const mongoose = require("mongoose");

const panelConfigSchema = new mongoose.Schema({
  name: { type: String, required: true },
  projectName: { type: String, required: true },
  baseUrl: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  adminId: { type: String, },
  active: { type: Boolean, default: true },
  permissions: {
    gatewayWithdraw: { type: Boolean, default: true },
    requestOnOff: { type: Boolean, default: true },
    gameProvider: { type: Boolean, default: true },
    gameSettings: { type: Boolean, default: true },
    gameRates: { type: Boolean, default: true },
    commonGameResults: { type: Boolean, default: true },
    notCommonGameResults: { type: Boolean, default: true },
    revertPayment: { type: Boolean, default: true },
    refundPayment: { type: Boolean, default: true },
    viewWallet: { type: Boolean, default: true },
    reportMain: { type: Boolean, default: true },
    salesReport: { type: Boolean, default: true },
    totalGameBids: { type: Boolean, default: true },
    creditDebitReport: { type: Boolean, default: true },
    dailyReport: { type: Boolean, default: true },
    biddingReport: { type: Boolean, default: true },
    userAnalysis: { type: Boolean, default: true },
    users: { type: Boolean, default: true },
    dashboard: { type: Boolean, default: true },
    gameMain: { type: Boolean, default: true }
  }
}, { timestamps: true });

module.exports = mongoose.model("PanelConfig", panelConfigSchema);
