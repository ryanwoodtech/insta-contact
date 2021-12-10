const express = require("express");
const router = express.Router();

// /dashboard/
router.get("/organizations",(_req, res) => {
  res.json({
    organization_name: "Orgname from database",
    organization_url_logo: "logo.svg",
  });
});

router.post("/new", (_req, res) => {
  res.send("here");
});

// /dashboard
router.get("/", (_req, res) => {
  res.render("dashboard", { text: "Hello dashboard!" });
});

module.exports = router;
