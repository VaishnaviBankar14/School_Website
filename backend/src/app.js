const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const contactRoutes = require("./routes/contactRoutes");
const statsRoutes = require("./routes/statsRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin/stats", statsRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "School Management API is Running 🚀"
    });
});

module.exports = app;

// const express = require("express");
// const cors = require("cors");

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test Route
// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//         message: "School Management API is Running 🚀"
//     });
// });

// module.exports = app;