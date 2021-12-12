require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

require("./middleware")(app);
require("./routes/routes")(app);
require("./errorHandlers")(app);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
