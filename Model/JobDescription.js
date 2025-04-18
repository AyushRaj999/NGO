const  mongoose=require("mongoose")

const mongooseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  timing: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  }
});

const JobDescriptionModel = new mongoose.model(
  "JobDescriptionModel",
  mongooseSchema
);

module.exports = JobDescriptionModel;