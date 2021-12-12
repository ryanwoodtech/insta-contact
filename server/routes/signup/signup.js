const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const db = require("../../db/db");

router.post("/", async (req, res) => {
  // Hash/salt users password
  const newUser = {
    id: uuidv4(),
    email: req.body.email,
    hashedPassword: await bcrypt.hash(req.body.password, 10),
  };

  if (!newUser) {
    console.log("OH NO EXECUTION WENT CRAY");
  }

  const response = await db("user").insert(
    { id: newUser.id, email: newUser.email, password: newUser.hashedPassword },
    "id"
  );

  // Regular expression to check if string is a valid UUID
  const uuidRegex =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  console.log("uuidRegex test:");
  // If the user wasn't created
  if (!uuidRegex.test(response)) {
    // Tell the user something went wrong
    res.json({ error: "User registration failed." });
  }
  // Sign the user in
  // TODO: POST req to /login with login details as the body

  console.log("New user added. ID:", response);

  res.send(`New user added. ID: ${response}.`);
});

module.exports = router;
