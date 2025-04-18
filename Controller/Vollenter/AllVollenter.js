const VollenterModel=require('../../Model/Vollantere.js')
let io; // define socket variable outside

const setSocketIO = (socketInstance) => {
  io = socketInstance;
};

const Vollenter=async(req,res)=>{
    try {
        const {
          availability,
          email,
          experience,
          interests,
          message,
          name,
          phone,
        } = req.body;

  const VollenterData = new VollenterModel({
    availability,
    email,
    experience,
    interests,
    message,
    name,
    phone,
  });

  const data=await VollenterData.save()
     if (io) {
       io.emit("newVolunteer", data); // ✅ emit before sending the response
     }
  res.status(200).json({message:"Vollenter data sumbited",data})

    } catch (error) {
        res.status(500).json({message:"data save unsuccessfull",error:error})
        console.error("error is :", error)
    }
}

const VollantereGet=async(req,res)=>{
    try {
        const data=await VollenterModel.find()
        res.status(200).json({message:"all  vollenter list:",data})
    } catch (error) {
        res.status(500).json({message:"fetching data error"})
        console.log("error is:", error)
    }
}

const RejectVollenter = async (req, res) => {
  try {
    const { id } = req.params;

    const { availability, email, experience, interests, message, name, phone } =
      req.body;

    const updateFields = {
      availability,
      email,
      experience,
      interests,
      message,
      name,
      phone,
      status: "rejected", // explicitly set status to 'rejected'
    };

    const data = await VollenterModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true } // return the updated document
    );

    res.status(200).json({
      success: true,
      message: "Volunteer rejected successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while rejecting the volunteer",
    });
  }
};

const AcceptVollenter = async (req, res) => {
  try {
    const { id } = req.params;

    const { availability, email, experience, interests, message, name, phone } =
      req.body;

    const updateFields = {
      availability,
      email,
      experience,
      interests,
      message,
      name,
      phone,
      status: "Accepted", // explicitly set status to 'rejected'
    };

    const data = await VollenterModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true } // return the updated document
    );

    res.status(200).json({
      success: true,
      message: "Volunteer Accepted successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while accepting the volunteer",
    });
  }
};

const deleteRejectVollenter = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await VollenterModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data is deleted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
};

module.exports = {
  Vollenter,
  VollantereGet,
  setSocketIO,
  RejectVollenter,
  deleteRejectVollenter,
  AcceptVollenter
};
