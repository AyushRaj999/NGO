const mongoose=require("mongoose")
require("dotenv").config(); 
const mongoUrl = process.env.Mongoose_url;

// const db=async()=>mongoose.connect(mongoUrl).then(()=>{
//     console.log("mongodb conntected")
// }).catch((error)=>{
//     console.log("mongodb not connected",error)
// })


const db = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("mongodb not connected ❌", error);
  }
};

module.exports=db