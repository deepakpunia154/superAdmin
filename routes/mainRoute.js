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
const mainGameRefundUserPointRouter = require("./mainGameRoutes/refundUserPointRoutes");
const walletSearchAccountRouetr = require("./walletRoutes/searchAccountRoutes");
const walletInvoicesRouter = require("./walletRoutes/invoicesRoutes");
const viewWalletRouter = require("./walletRoutes/viewWalletRouter");
const reqOnOffRouter = require("./walletRoutes/reqOnOffRoutes");
const mainSalesReportRouter = require("./reportRoutes/salesReportRoutes");
const deletedUserRouter = require("./deletedUser/deletedUserRoutes");

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
commonRouter.use("/mainGameRefund", mainGameRefundUserPointRouter);

commonRouter.use("/wallet", walletSearchAccountRouetr);
commonRouter.use("/wallet/invoices", walletInvoicesRouter);
commonRouter.use("/wallet/viewWallet", viewWalletRouter);
commonRouter.use("/wallet/reqOnOff", reqOnOffRouter);
commonRouter.use("/mainSalesReport", mainSalesReportRouter);
commonRouter.use("/deletedUser", deletedUserRouter);

module.exports = commonRouter;
