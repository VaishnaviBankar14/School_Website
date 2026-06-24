const express = require("express");

const router = express.Router();

const teacherController = require("../controllers/teacherController");
const upload = require("../middleware/uploadMiddleware");

const { authenticate } =
  require("../middleware/authMiddleware");

const { authorize } =
  require("../middleware/roleMiddleware");

router.post(
  "/apply",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "certificate", maxCount: 1 }
  ]),
  teacherController.applyTeacher
);

router.get(
  "/all",
  authenticate,
  authorize("ADMIN"),
  teacherController.getAllApplications
);

router.put(
  "/:id/status",
  authenticate,
  authorize("ADMIN"),
  teacherController.updateApplicationStatus
);

module.exports = router;
// const express = require("express");

// const router = express.Router();

// const teacherController = require("../controllers/teacherController");
// const upload = require("../middleware/uploadMiddleware");

// router.post(
//   "/apply",
//   upload.fields([
//     { name: "resume", maxCount: 1 },
//     { name: "certificate", maxCount: 1 }
//   ]),
//   teacherController.applyTeacher
// );

// module.exports = router;
