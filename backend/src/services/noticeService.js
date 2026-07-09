const prisma = require("../config/prisma");

const createNotice = async (data) => {
  return await prisma.notice.create({
    data,
  });
};

const getAllNotices = async () => {
  return await prisma.notice.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const deleteNotice = async (id) => {
  return await prisma.notice.delete({
    where: {
      id: Number(id),
    },
  });
};

const updateNotice = async (id, data) => {
  return await prisma.notice.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

module.exports = {
  createNotice,
  getAllNotices,
  deleteNotice,
  updateNotice,
};