const prisma = require("../config/prisma");

const getStats = async (req, res) => {
  try {

    const totalUsers =
      await prisma.user.count();

    const totalNotices =
      await prisma.notice.count();

    const totalTeachers =
      await prisma.teacherApplication.count();

    const totalAdmissions =
      await prisma.studentAdmission.count();

    const pendingTeachers =
      await prisma.teacherApplication.count({
        where: {
          status: "PENDING"
        }
      });

    const pendingAdmissions =
      await prisma.studentAdmission.count({
        where: {
          status: "PENDING"
        }
      });

    res.status(200).json({
      success: true,

      totalUsers,
      totalNotices,
      totalTeachers,
      totalAdmissions,
      pendingTeachers,
      pendingAdmissions
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
  getStats
};