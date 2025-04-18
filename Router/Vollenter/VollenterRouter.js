const {
  Vollenter,
  VollantereGet,
  RejectVollenter,
  deleteRejectVollenter,
  AcceptVollenter,
} = require("../../Controller/Vollenter/AllVollenter");


const express=require("express")



const vollenterroute = express.Router();

vollenterroute.post("/vollenter/post", Vollenter);
vollenterroute.get("/vollenter/get", VollantereGet);
vollenterroute.put("/vollenter/reject/put/:id", RejectVollenter);
vollenterroute.delete("/vollenter/reject/delete/:id", deleteRejectVollenter);
vollenterroute.put("/vollenter/accept/put/:id", AcceptVollenter);




module.exports = vollenterroute;