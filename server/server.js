require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

const auth = require("./auth");
const { requiresAuth } = require("express-openid-connect");

const PORT = process.env.PORT || 5001;

// Routers
const dashboardRouter = require("./routes/dashboard");

app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

// auth router attaches /login, /logout, and /callback routes to the baseURL
// creates the session
app.use(auth);

app.use("/dashboard", requiresAuth(), dashboardRouter);

app.post("/callback", requiresAuth(), (_req, res, _next) => {
  res.redirect("/");
});

app.get("/api", (req, res) => {
  res.json({ message: "hi from /api" });
});

// Have Node serve the files for our built React app
express.static(path.resolve(__dirname, "../client/public/index.html"))

  app.use(
  );

// req.isAuthenticated is provided from the auth router
app.get("/", requiresAuth(), (req, res) => {
  // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out"6y);
  // res.send(req.oidc.user); // Sends JSON about the user

});

// Error handlers
app.use((err, _req, res, next) => {
  console.log("Custom error handler:");
  console.log(err);
  res.redirect("/");
  next();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
