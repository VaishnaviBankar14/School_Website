const express = require("express");

const router = express.Router();

const noticeController = require("../controllers/noticeController");
const { authenticate } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  noticeController.addNotice
);

router.get(
  "/",
  noticeController.getNotices
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  noticeController.removeNotice
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  noticeController.editNotice
);

module.exports = router;