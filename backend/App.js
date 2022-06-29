const express = require("express");
const app = express();
require("dotenv").config({path:"./Config.env"});
app.use(express.json());
require("./Connection");
const router = require("./Routes");
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT);