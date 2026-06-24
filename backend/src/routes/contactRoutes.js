const express = require("express");

const router = express.Router();

const contactController =
  require("../controllers/contactController");

const { authenticate } =
  require("../middleware/authMiddleware");

const { authorize } =
  require("../middleware/roleMiddleware");

router.post(
  "/",
  contactController.createContact
);

router.get(
  "/all",
  authenticate,
  authorize("ADMIN"),
  contactController.getAllContacts
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  contactController.deleteContact
);

module.exports = router;