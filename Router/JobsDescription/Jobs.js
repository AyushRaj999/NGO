const {
  JobDescription,
  JobDescriptionGet,
  deleteJobDescription,
} = require("../../Controller/Jobs/JobDescription.js");

const express = require("express");

const jobDescriptionroute = express.Router();

jobDescriptionroute.post("/jobDescription/post", JobDescription);
jobDescriptionroute.get("/jobDescription/get", JobDescriptionGet);
jobDescriptionroute.delete("/jobDescription/delete/:id", deleteJobDescription);


module.exports = jobDescriptionroute;
