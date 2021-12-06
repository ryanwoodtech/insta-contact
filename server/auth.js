const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:5001",
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
  secret: process.env.SECRET,
};

module.exports = auth(config);
