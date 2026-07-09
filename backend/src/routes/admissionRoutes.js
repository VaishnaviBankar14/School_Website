const express = require("express");

const router = express.Router();

const admissionController =
  require("../controllers/admissionController");

const upload =
  require("../middleware/uploadMiddleware");

const { authenticate } =
  require("../middleware/authMiddleware");

const { authorize } =
  require("../middleware/roleMiddleware");

router.post(
  "/apply",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "birthCertificate", maxCount: 1 },
    { name: "reportCard", maxCount: 1 },
    { name: "transferCertificate", maxCount: 1 },
    { name: "studentAadhar", maxCount: 1 },
    { name: "parentAadhar", maxCount: 1 },
    { name: "addressProof", maxCount: 1 },
    { name: "otherDocument", maxCount: 1 },
  ]),
  admissionController.applyAdmission
);

// router.get(
//   "/recent",
//   authenticate,
//   authorize("ADMIN"),
//   admissionController.getRecentAdmissions
// );

router.get(
  "/all",
  authenticate,
  authorize("ADMIN"),
  admissionController.getAllAdmissions
);

router.put(
  "/:id/status",
  authenticate,
  authorize("ADMIN"),
  admissionController.updateAdmissionStatus
);

module.exports = router;