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
    { name: "document", maxCount: 1 }
  ]),
  admissionController.applyAdmission
);

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