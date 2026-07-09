const noticeService = require("../services/noticeService");

const addNotice = async (req, res, next) => {
  try {
    const notice = await noticeService.createNotice(req.body);

    res.status(201).json({
      success: true,
      data: notice,
    });
  } catch (error) {
    next(error);
  }
};

const getNotices = async (req, res, next) => {
  try {
    const notices = await noticeService.getAllNotices();

    res.status(200).json({
      success: true,
      data: notices,
    });
  } catch (error) {
    next(error);
  }
};

const removeNotice = async (req, res, next) => {
  try {
    await noticeService.deleteNotice(req.params.id);

    res.status(200).json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


const editNotice = async (req, res, next) => {
  try {
    const notice = await noticeService.updateNotice(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Notice updated successfully",
      data: notice,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  addNotice,
  getNotices,
  removeNotice,
  editNotice,
};