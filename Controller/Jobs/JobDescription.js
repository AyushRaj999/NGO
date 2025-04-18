const JobDescriptionModel = require("../../Model/JobDescription.js");

const JobDescription = async (req, res) => {
  try {
    const {     title,
    location,
    timing,
    salary,
    skills } = req.body;


    const JobData = new JobDescriptionModel({
      title,
      location,
      timing,
      salary,
      skills,
    });

    const data = await JobData.save();
    res.status(200).json({ message: "Vollenter data sumbited", data });
  } catch (error) {
    res.status(500).json({ message: "data save unsuccessfull", error: error });
    console.error("error is :", error);
  }
};

const JobDescriptionGet = async (req, res) => {
  try {
    const data = await JobDescriptionModel.find();
    res.status(200).json({ message: "all  vollenter list:", data });
  } catch (error) {
    res.status(500).json({ message: "fetching data error" });
    console.log("error is:", error);
  }
};

const deleteJobDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await JobDescriptionModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data is deleted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
};

module.exports = {
  JobDescription,
  JobDescriptionGet,
  deleteJobDescription
};
