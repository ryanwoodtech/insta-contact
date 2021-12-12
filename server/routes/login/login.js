const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../../db/db");

router.post("/", async (req, res) => {
  const getPasswordHash = async () => {
    const res = await db("user")
      .select("password")
      .where("email", providedUser.email)
      .first();
    return res;
  };

  const providedUser = {
    email: req.body.email,
    password: req.body.password,
  };

  const dbUser = {
    email: req.body.email,
    passwordHash: await getPasswordHash(),
  };

  try {
    const match = await bcrypt.compare(
      providedUser.password,
      dbUser.passwordHash.password
    );

    if (match) {
      res.send("THE USER IS AUTHENTICATED");
    } else {
      res.send("not a match bruh");
    }
  } catch (error) {
    res.send('User authentication failed')
  }
});

module.exports = router;
