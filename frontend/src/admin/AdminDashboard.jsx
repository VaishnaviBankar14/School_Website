import { useEffect, useState } from "react";
import API from "../api/axios";
import StatCard from "../components/Home/StatCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTeachers: 0,
    totalAdmissions: 0,
    pendingTeachers: 0,
    pendingAdmissions: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");

      setStats(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h3>Loading Dashboard...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <StatCard
            title="Total Users"
            value={stats.totalUsers}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Total Teachers"
            value={stats.totalTeachers}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Total Admissions"
            value={stats.totalAdmissions}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Pending Teachers"
            value={stats.pendingTeachers}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Pending Admissions"
            value={stats.pendingAdmissions}
          />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;

