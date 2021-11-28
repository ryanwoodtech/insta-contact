const express = require("express");
const router = express.Router();

const { auth } = require("express-openid-connect");

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "a long, randomly-generated string stored in env",
    baseURL: "http://localhost:5001",
    clientID: "hTCWiOgGTU8JjmXHklCOqnptsqI5pwCq",
    issuerBaseURL: "https://dev-v6vvl287.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

module.exports = router;
