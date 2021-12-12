const indexRouter = require("./index");
const dashboardRouter = require("./dashboard/dashboard");
const signupRouter = require("./signup/signup");
const loginRouter = require("./login/login");

module.exports = (app) => {
  app.use("/index", indexRouter);
  app.use("/dashboard", dashboardRouter);
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
};
