const express = require("express");
const app = express();

require("dotenv/config");
require("./db");
require("./config")(app);
require("./config/session.config")(app);
require("./routes")(app);
require("./error-handling")(app);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

require("./routes")(app); //RUTAS

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));

module.exports = app;
