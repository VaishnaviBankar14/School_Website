import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBullhorn,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="admin-sidebar">

  {/* Header + Navigation */}
  <div>

    <div className="sidebar-header">

      <div className="school-logo">
        🎓
      </div>

      <h3>School Management</h3>

      {/* Optional: Remove this line */}
      {/* <p>Admin Dashboard</p> */}

    </div>

    <nav>

      <p className="menu-title">MAIN</p>

      <NavLink
        to="/admin/dashboard"
        className="sidebar-link"
      >
        <FaTachometerAlt />
        <span>Dashboard</span>
      </NavLink>

      <p className="menu-title">MANAGEMENT</p>

      <NavLink
        to="/admin/notices"
        className="sidebar-link"
      >
        <FaBullhorn />
        <span>Notices</span>
      </NavLink>

      <NavLink
        to="/admin/teachers"
        className="sidebar-link"
      >
        <FaChalkboardTeacher />
        <span>Teacher Applications</span>
      </NavLink>

      <NavLink
        to="/admin/admissions"
        className="sidebar-link"
      >
        <FaUserGraduate />
        <span>Student Admissions</span>
      </NavLink>

      <NavLink
        to="/admin/messages"
        className="sidebar-link"
      >
        <FaEnvelope />
        <span>Contact Messages</span>
      </NavLink>

    </nav>

  </div>

  {/* Logout */}
  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    <FaSignOutAlt />
    <span>Logout</span>
  </button>

</div>
  );
}

export default Sidebar;