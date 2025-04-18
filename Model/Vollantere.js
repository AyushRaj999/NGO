const  mongoose=require("mongoose")

const mongooseSchema = new mongoose.Schema({
  availability: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  interests: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status:{
    type:String
  }
});

const VollenterModel=new mongoose.model("VollenterModel",mongooseSchema)

module.exports = VollenterModel ;