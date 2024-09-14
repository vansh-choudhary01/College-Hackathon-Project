const express = require("express");
const app = express();

const route = require("./route.js");

app.use("/", route);

app.listen(8080);