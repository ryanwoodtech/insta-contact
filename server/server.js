require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

const corsOptions = {
  origin: "http://localhost:3000",
};
const PORT = process.env.PORT || 5001;

// Routers
const dashboardRouter = require("./routes/dashboard");

app.use("/dashboard", dashboardRouter);

app.get("/", (req, res) => {
  res.send("You're at /");
});

// Error handlers
app.use((err, _req, res, next) => {
  console.log("Custom error handler:");
  console.log(err);
  res.redirect("/");
  next();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
