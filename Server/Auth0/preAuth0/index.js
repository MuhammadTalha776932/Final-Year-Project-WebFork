require("dotenv").config();
/* 
* config object hold the auth0 server side configuration details.
*/
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env._AUTH0_SECRET_,
  baseURL: process.env._AUTH0_BASEURL,
  clientID: process.env._AUTH0_CLIENTID,
  issuerBaseURL: process.env._AUTH0_ISSUERSBASEURL,
};

module.exports = config;
