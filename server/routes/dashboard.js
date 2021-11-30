const express = require("express");
const router = express.Router();

// /dashboard/*
router.get("/", (_req, res) => {
    res.render("dashboard", { text: "Hello dashboard!" });
});

module.exports = router;
