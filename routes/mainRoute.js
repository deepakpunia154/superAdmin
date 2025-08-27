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

module.exports = commonRouter;
