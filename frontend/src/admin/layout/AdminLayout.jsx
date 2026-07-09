import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-content">

        <Topbar />

        {children}

      </div>

    </div>
  );
}

export default AdminLayout;