const prisma = require("../config/prisma");

const applyTeacher = async (req, res) => {
  try {

     console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const teacher = await prisma.teacherApplication.create({
      data: {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        qualification: req.body.qualification,
        experience: req.body.experience,

        resumeUrl:
          req.files?.resume?.[0]?.path || null,

        certificateUrls:
  req.files?.certificates?.map((file) => file.path) || []
      }
    });

    res.status(201).json({
      success: true,
      data: teacher
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getAllApplications = async (req, res) => {
  try {

    const applications =
      await prisma.teacherApplication.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    res.status(200).json({
      success: true,
      data: applications
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const updateApplicationStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const application =
      await prisma.teacherApplication.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          status
        }
      });

    res.status(200).json({
      success: true,
      data: application
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  applyTeacher,
   getAllApplications,
   updateApplicationStatus
};