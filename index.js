const db=require('./db/db.js')
db()

const express=require('express')
const vollenterroute = require("./Router/Vollenter/VollenterRouter.js");
const jobroute =require("./Router/Jobs/JobsRouter.js")
const cors=require("cors")
const bodyParser=require('body-parser')
const jobDescriptionroute=require('./Router/JobsDescription/Jobs.js')
require("dotenv").config();
const Port = process.env.Port;
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const http = require("http");
const { Server } = require("socket.io");
const { setSocketIO } = require("./Controller/Vollenter/AllVollenter");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins or restrict if needed
    methods: ["GET", "POST"],
  },
});

setSocketIO(io); // ✅ pass the io instance to the controller

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
});

app.use(cors())
app.use(bodyParser.json())


app.use("/api/vollenterRoute", vollenterroute);
app.use("/api/jobroute", jobroute);
app.use("/api/jobDescriptionroute", jobDescriptionroute);

app.listen(Port,async()=>{
    console.log(`server is running on port 3000`)
})


//------------------------------------------------






