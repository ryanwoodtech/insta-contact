const express = require("express");
const app = express();
require("dotenv").config();

const { auth, requiresAuth } = require("express-openid-connect");

// Routers
const dashboardRouter = require("./routes/dashboard");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: "http://localhost:5001",
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL,
    secret: process.env.SECRET,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// creates the session
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// TODO: Create landing page
app.get("/", requiresAuth(), (req, res) => {
    // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
    res.send(req.oidc.user);
});

app.post("/callback", requiresAuth(), (_req, res, _next) => {
    res.redirect("/");
});

app.use("/dashboard", requiresAuth(), dashboardRouter);

// Error handlers
app.use((err, _req, res, next) => {
    console.log("Custom error handler:");
    console.log(err);
    res.redirect("/");
    next();
});

app.listen(5001);
