const  mongoose=require("mongoose")

const mongooseSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  resume: {
    type: String,
    require: true,
  },
  interests: {
    type: String,
    required: true,
  },
});

const JobModel = new mongoose.model("JobModel", mongooseSchema);

module.exports = JobModel;