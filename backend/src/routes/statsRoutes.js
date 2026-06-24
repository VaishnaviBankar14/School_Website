const express = require("express");

const router = express.Router();

const statsController =
  require("../controllers/statsController");

const { authenticate } =
  require("../middleware/authMiddleware");

const { authorize } =
  require("../middleware/roleMiddleware");

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  statsController.getStats
);

module.exports = router;