require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
app.use(express.json()); // Parse JSON in req.body from any middleware

const PORT = process.env.PORT || 5001;

// Routers
const dashboardRouter = require("./routes/dashboard");

app.use("/dashboard", dashboardRouter);

app.post("/signup", async (req, res) => {
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

app.post("/login", async (req, res) => {
  const getPasswordHash = async () => {
    console.log("getPasswordHash ran");
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
    const match = bcrypt.compare(
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
