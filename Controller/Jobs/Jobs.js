const JobModel = require("../../Model/Jobs.js");

const Job=async(req,res)=>{
    try {
      const { email, message, name, phone, interests } = req.body;

      // req.file is populated by multer
  const resumePath = req.file ? req.file.filename : null;


      const JobData = new JobModel({
        email,
        message,
        name,
        phone,
        resume: resumePath, // ✅ Save the uploaded file path
        interests,
      });

      const data = await JobData.save();
      res.status(200).json({ message: "Vollenter data sumbited", data });
    } catch (error) {
        res.status(500).json({message:"data save unsuccessfull",error:error})
        console.error("error is :", error)
    }
}



const JobGet=async(req,res)=>{
    try {
        const data=await JobModel.find()
        res.status(200).json({message:"all  vollenter list:",data})
    } catch (error) {
        res.status(500).json({message:"fetching data error"})
        console.log("error is:", error)
    }
}

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await JobModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data is deleted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
};

module.exports = {
  Job,
  JobGet,
  deleteJob
};
