const express = require("express");

module.exports = (app) => {
  // Only ran if none of the other routes are hit
  app.use((next) => {
    const error = new Error("Route not found.");
    error.status = 404;
    next(error);
  });

  // If any route throws an error, this will be called
  app.use((err, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
    next(error);
  });
};
