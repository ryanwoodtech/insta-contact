const express = require("express");
const cors = require("cors");
const morgan = require('morgan')

const corsOptions = {
  origin: "http://localhost:3000",
};

module.exports = (app) => {
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: true })); // Access req.body from any middleware
  app.use(express.json()); // Parse JSON in req.body from any middleware
  app.use(morgan('dev')); 
};
