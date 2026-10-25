const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "AttendEase API is running",
        project: "Employee Attendance Management System"
    });
});

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "AttendEase Backend" });
});

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/departments", departmentRoutes);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 AttendEase server running on http://localhost:${PORT}`);
    });
});
