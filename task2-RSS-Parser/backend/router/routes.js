const express = require("express");
const jobsRoute = express.Router();

const { xmlParser} = require("./jobsController");

jobsRoute.get("/jobs", xmlParser);


module.exports = jobsRoute;