const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notices", noticeRoutes);

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