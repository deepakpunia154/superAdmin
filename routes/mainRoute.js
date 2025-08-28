let express = require("express");
const loginRouter = require("./loginRoute");
const panelRouter = require("./panelRoutes");
const dashboardRouter = require("./dashboard");
const userRouter = require("./userRoutes");
const mainGameRouter = require("./mainGameRoutes/gameProviderRoutes");
const mainGameSettingRouter = require("./mainGameRoutes/gameSettingRoutes");
const mainGameRatesRouter = require("./mainGameRoutes/gameRates");
const mainGameResultRouter = require("./mainGameRoutes/gameResult");
const mainGameRevertResultRouter = require("./mainGameRoutes/revertResultPaymentRoutes");
const walletSearchAccountRouetr = require("./walletRoutes/searchAccountRoutes");
const walletInvoicesRouter = require("./walletRoutes/invoicesRoutes");
const viewWalletRouter = require("./walletRoutes/viewWalletRouter");
const reqOnOffRouter = require("./walletRoutes/reqOnOffRoutes");
const mainSalesReportRouter = require("./reportRoutes/salesReportRoutes");
const totalBidReportRouter = require("./reportRoutes/totalGameBidsRoutes");
const creditDebitReportRouter = require("./reportRoutes/creditDebitReportRoutes");
const dailyReportRouter = require("./reportRoutes/dailyReportRoutes");
const biddingReportRouter = require("./reportRoutes/biddingReportRoutes");
const userAnalysisRouter = require("./reportRoutes/userAnalysisRoutes");


const deletedUserRouter = require("./deletedUserRoutes/deletedUserRoutes");
const appSettingsRouter = require("./appSettingsRoutes/howToPlayRoutes");
const withDrawRouter = require("./appSettingsRoutes/withdrawScreenRoutes");
const noticeBoardRouter = require("./appSettingsRoutes/noticeBoardRoutes");
const walletContectRouter = require("./appSettingsRoutes/walletContectRoutes");
const versionSettingRouter = require("./appSettingsRoutes/appVersionRoutes");

let commonRouter = express.Router();

commonRouter.use("/super-admin", loginRouter);
commonRouter.use("/panel", panelRouter);
commonRouter.use("/dashboard", dashboardRouter);
commonRouter.use("/user", userRouter);
commonRouter.use("/mainGame", mainGameRouter);
commonRouter.use("/mainGameSetting", mainGameSettingRouter);
commonRouter.use("/mainGameRate", mainGameRatesRouter);
commonRouter.use("/mainGameResult", mainGameResultRouter);
commonRouter.use("/mainGameRevertPayment", mainGameRevertResultRouter);

commonRouter.use("/wallet", walletSearchAccountRouetr);
commonRouter.use("/wallet/invoices", walletInvoicesRouter);
commonRouter.use("/wallet/viewWallet", viewWalletRouter);
commonRouter.use("/wallet/reqOnOff", reqOnOffRouter);
commonRouter.use("/mainSalesReport", mainSalesReportRouter);
commonRouter.use("/totalBidReport", totalBidReportRouter);
commonRouter.use("/creditDebitReport", creditDebitReportRouter);
commonRouter.use("/dailyReport", dailyReportRouter);
commonRouter.use("/biddingReport", biddingReportRouter);
commonRouter.use("/userAnalysis", userAnalysisRouter);

commonRouter.use("/deletedUser", deletedUserRouter);
commonRouter.use("/appSettings", appSettingsRouter);
commonRouter.use("/withdraw", withDrawRouter);
commonRouter.use("/noticeBoard", noticeBoardRouter);
commonRouter.use("/walletContect",walletContectRouter);
commonRouter.use("/versionSetting",versionSettingRouter);

module.exports = commonRouter;
