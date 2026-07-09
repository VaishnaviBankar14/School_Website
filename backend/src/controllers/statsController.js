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

      const approvedTeachers = await prisma.teacherApplication.count({
  where: {
    status: "APPROVED",
  },
});

const rejectedTeachers = await prisma.teacherApplication.count({
  where: {
    status: "REJECTED",
  },
});

const currentDate = new Date();

const applicationsThisMonth =
  await prisma.teacherApplication.count({
    where: {
      createdAt: {
        gte: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        ),
        lt: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          1
        ),
      },
    },
  });


    const pendingAdmissions =
      await prisma.studentAdmission.count({
        where: {
          status: "PENDING"
        }
      });

      const approvedAdmissions = await prisma.studentAdmission.count({
  where: {
    status: "APPROVED",
  },
});

const rejectedAdmissions = await prisma.studentAdmission.count({
  where: {
    status: "REJECTED",
  },
});
    

      // Recent Notices
const recentNotices = await prisma.notice.findMany({
  orderBy: {
    createdAt: "desc",
  },
  take: 5,
});

// Recent Teacher Applications
const recentTeachers = await prisma.teacherApplication.findMany({
  orderBy: {
    createdAt: "desc",
  },
  take: 5,
});

// Recent Student Admissions
const recentAdmissions = await prisma.studentAdmission.findMany({
  orderBy: {
    createdAt: "desc",
  },
  take: 5,
});

// Recent Contact Messages
const recentMessages = await prisma.contactMessage.findMany({
  orderBy: {
    createdAt: "desc",
  },
  take: 5,
});

const monthlyAdmissions = new Array(12).fill(0);

const admissions = await prisma.studentAdmission.findMany({
  select: {
    createdAt: true,
  },
});

admissions.forEach((admission) => {
  const month = new Date(admission.createdAt).getMonth();
  monthlyAdmissions[month]++;
});

    res.status(200).json({
  success: true,

  totalUsers,
  totalNotices,
  totalTeachers,
  totalAdmissions,
  pendingTeachers,
  pendingAdmissions,
   applicationsThisMonth,


  teacherStatus: {
    approved: approvedTeachers,
    pending: pendingTeachers,
    rejected: rejectedTeachers,
  },

  admissionStatus: {
    approved: approvedAdmissions,
    pending: pendingAdmissions,
    rejected: rejectedAdmissions,
  },

  monthlyAdmissions,

  recentNotices,
  recentTeachers,
  recentAdmissions,
  recentMessages,
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