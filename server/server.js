require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
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
  const newUser =  {
    id: uuidv4(),
    email: req.body.email,
    hashedPassword: await bcrypt.hash(req.body.password, 10),
  };

  if(!newUser){
    console.log('OH NO EXECUTION WENT CRAY')
  }

  // Refactor this into a database interface
  // Wont work because it doesn't have a reference to the knexfile
  const response = await knex("user").insert({
    id: newUser.id,
    email: newUser.email,
    password: newUser.hashedPassword,
  });

  console.log('Response:', response)

  res.send(`Hello ${req.body.email}, Nice password: ${req.body.password}`);
});

app.get("/login", (req, res) => {
  res.send("You're at /login");
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
