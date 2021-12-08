const express = require("express");
const router = express.Router();

// /dashboard/new
router.post("/new", (_req, res) => {
  res.send("here");
});

// /dashboard
router.get("/", (_req, res) => {
  res.render("dashboard", { text: "Hello dashboard!" });
});

module.exports = router;
