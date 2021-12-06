const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const knex = require("knex");
const knexfile = require("./knexfile");

// TODO: Use envvars to assign db config
const db = knex(knexfile.development);

module.exports = db;
