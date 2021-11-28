const express = require("express");
const app = express();

const dashboardRouter = require("./routes/dashboard");
const authRouter = require("./routes/auth.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

app.get("/", (_req, res) => {
    res.redirect("/signup");
});

app.use("/dashboard", dashboardRouter);
app.use("/auth", authRouter);

app.listen(5001);
