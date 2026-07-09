import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import AdminStatCard from "./AdminStatCard";
import AdminLayout from "./layout/AdminLayout";
import TeacherOverview from "./TeacherOverview";
const AdminDashboard = () => {
  const [stats, setStats] = useState({
  totalUsers: 0,
  totalTeachers: 0,
  totalAdmissions: 0,
  totalNotices: 0,
  pendingTeachers: 0,
  pendingAdmissions: 0,

  teacherStatus: {
    approved: 0,
    pending: 0,
    rejected: 0,
  },

  admissionStatus: {
    approved: 0,
    pending: 0,
    rejected: 0,
  },

  monthlyAdmissions: [],

  recentNotices: [],
  recentTeachers: [],
  recentAdmissions: [],
  recentMessages: [],
});

  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");
      setStats(res.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="container-fluid">
          <h3>Loading Dashboard...</h3>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container-fluid">

        <h2 className="mb-4 fw-bold">
          Admin Dashboard
        </h2>

        {/* Statistics */}

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <AdminStatCard
              title="Total Users"
              value={stats.totalUsers}
              color="#0d6efd"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AdminStatCard
              title="Total Teachers"
              value={stats.totalTeachers}
              color="#198754"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AdminStatCard
              title="Total Admissions"
              value={stats.totalAdmissions}
              color="#fd7e14"
            />
          </div>

          <div className="col-lg-4 col-md-6">
  <AdminStatCard
    title="Total Notices"
    value={stats.totalNotices}
    color="#0dcaf0"
  />
</div>

          <div className="col-lg-4 col-md-6">
            <AdminStatCard
              title="Pending Teachers"
              value={stats.pendingTeachers}
              color="#dc3545"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AdminStatCard
              title="Pending Admissions"
              value={stats.pendingAdmissions}
              color="#6f42c1"
            />
          </div>

        </div>

        {/* Quick Actions */}

<div className="card shadow-sm border-0 mt-5">

  <div className="card-header bg-dark text-white">
    <h5 className="mb-0">
      Quick Actions
    </h5>
  </div>

  <div className="card-body">

    <div className="row g-3">

      <div className="col-lg-3 col-md-6">
        <button
          className="btn btn-primary w-100 py-3"
          onClick={() => navigate("/admin/notices")}
        >
          <i className="bi bi-megaphone-fill me-2"></i>
          Add Notice
        </button>
      </div>

      <div className="col-lg-3 col-md-6">
        <button
          className="btn btn-success w-100 py-3"
          onClick={() => navigate("/admin/teachers")}
        >
          <i className="bi bi-person-workspace me-2"></i>
          Teacher Applications
        </button>
      </div>

      <div className="col-lg-3 col-md-6">
        <button
          className="btn btn-warning w-100 py-3"
          onClick={() => navigate("/admin/admissions")}
        >
          <i className="bi bi-mortarboard-fill me-2"></i>
          Student Admissions
        </button>
      </div>

      <div className="col-lg-3 col-md-6">
        <button
          className="btn btn-info text-white w-100 py-3"
          onClick={() => navigate("/admin/messages")}
        >
          <i className="bi bi-envelope-fill me-2"></i>
          Contact Messages
        </button>
      </div>

    </div>

  </div>

</div>


      <div className="row mt-4">

  <div className="col-lg-6 mb-4">

    <TeacherOverview stats={stats} />

  </div>

  <div className="col-lg-6 mb-4">

    <div className="card shadow-sm border-0 h-100 rounded-4">

      <div className="card-header bg-success text-white">
        <h5 className="mb-0">
          <i className="bi bi-info-circle-fill me-2"></i>
          Student Admission Overview
        </h5>
      </div>

      <div className="card-body">

        <div className="d-flex justify-content-between py-2 border-bottom">
          <span>Total Admissions</span>
          <strong>{stats.totalAdmissions}</strong>
        </div>

        <div className="d-flex justify-content-between py-2 border-bottom">
          <span>Approved Admissions</span>
          <span className="badge bg-success">
            {stats.admissionStatus.approved}
          </span>
        </div>

        <div className="d-flex justify-content-between py-2 border-bottom">
          <span>Pending Admissions</span>
          <span className="badge bg-warning text-dark">
            {stats.admissionStatus.pending}
          </span>
        </div>

        <div className="d-flex justify-content-between py-2">
          <span>Rejected Admissions</span>
          <span className="badge bg-danger">
            {stats.admissionStatus.rejected}
          </span>
        </div>

      </div>

    </div>

  </div>

</div>

        

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;