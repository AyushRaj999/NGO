const express = require('express');
const multer = require('multer');
const { Job, JobGet, deleteJob } = require("../../Controller/Jobs/Jobs.js");
const jobroute = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./uploads");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize multer upload
const upload = multer({ storage: storage });

// Routes
jobroute.post("/job/post", upload.single("profileImage"), Job);

jobroute.get("/job/get", JobGet);

jobroute.delete("/job/delete/:id", deleteJob);


module.exports = jobroute;
