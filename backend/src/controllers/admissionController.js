const prisma = require("../config/prisma");

const applyAdmission = async (req, res) => {
  try {

    const admission = await prisma.studentAdmission.create({
      data: {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        className: req.body.className,

        photoUrl:
          req.files?.photo?.[0]?.path || null,

        documentUrl:
          req.files?.document?.[0]?.path || null
      }
    });

    res.status(201).json({
      success: true,
      data: admission
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getAllAdmissions = async (req, res) => {
  try {

    const admissions =
      await prisma.studentAdmission.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    res.status(200).json({
      success: true,
      data: admissions
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const updateAdmissionStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const admission =
      await prisma.studentAdmission.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          status
        }
      });

    res.status(200).json({
      success: true,
      data: admission
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
  applyAdmission,
  getAllAdmissions,
   updateAdmissionStatus
};