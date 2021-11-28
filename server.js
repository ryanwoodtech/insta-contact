const express = require("express");
const app = express();

const dashboardRouter = require("./routes/dashboard");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

app.get("/", (_req, res) => {
    res.redirect("/signup");
});

app.get("/signup", (_req, res) => {
    res.render("login", { text: "Hello signup!" });
});

app.get("/login", (_req, res) => {
    res.render("signup", { text: "Hello login!" });
});

app.use("/dashboard", dashboardRouter);

app.listen(5001);
