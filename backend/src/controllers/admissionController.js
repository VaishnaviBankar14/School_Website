const prisma = require("../config/prisma");

const applyAdmission = async (req, res) => {
  try {

    const admission = await prisma.studentAdmission.create({
      data: {
  fullName: req.body.fullName,
  parentName: req.body.parentName,
  email: req.body.email,
  phone: req.body.phone,
  className: req.body.className,

  dob: req.body.dob ? new Date(req.body.dob) : null,
  gender: req.body.gender,
  previousSchool: req.body.previousSchool,
  address: req.body.address,

  photoUrl: req.files?.photo?.[0]?.path || null,

  birthCertificateUrl:
    req.files?.birthCertificate?.[0]?.path || null,

  reportCardUrl:
    req.files?.reportCard?.[0]?.path || null,

  transferCertificateUrl:
    req.files?.transferCertificate?.[0]?.path || null,

  studentAadharUrl:
    req.files?.studentAadhar?.[0]?.path || null,

  parentAadharUrl:
    req.files?.parentAadhar?.[0]?.path || null,

  addressProofUrl:
    req.files?.addressProof?.[0]?.path || null,

  otherDocumentUrl:
    req.files?.otherDocument?.[0]?.path || null,
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