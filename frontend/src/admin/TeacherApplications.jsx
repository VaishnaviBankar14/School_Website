
import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./TeacherApplications.css";
import AdminLayout from "./layout/AdminLayout";
import TeacherDetailsModal from "./TeacherDetailsModal";

function TeacherApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await api.get("/teachers/all");
      setApplications(res.data.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load teacher applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const q = search.toLowerCase();
      const matchSearch =
        app.fullName.toLowerCase().includes(q) ||
        app.email.toLowerCase().includes(q);

      const matchStatus =
        statusFilter === "ALL" || app.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [applications, search, statusFilter]);

  const updateStatus = async (id, status) => {
    if (
      !window.confirm(
        `Are you sure you want to ${status.toLowerCase()} this application?`
      )
    )
      return;

    try {
      await api.put(`/teachers/${id}/status`, { status });
      await fetchApplications();
      alert(`Application ${status.toLowerCase()} successfully.`);
    } catch (err) {
      console.error(err);
      alert("Failed to update application");
    }
  };

  const badgeClass = (status) => {
    if (status === "APPROVED") return "bg-success";
    if (status === "REJECTED") return "bg-danger";
    return "bg-warning text-dark";
  };

  return (
    <AdminLayout>
      <div className="container-fluid mt-3">
        <div className="card shadow border-0">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Teacher Applications</h4>
          </div>

          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-8">
                <input
                  className="form-control"
                  placeholder="Search by Name or Email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="ALL">All Status</option>
                  <option value="PENDING">Pending</option>
                  <option value="APPROVED">Approved</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center p-5">
                <div className="spinner-border text-primary"></div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Subject</th>
                      <th>Experience</th>
                      <th>Status</th>
                      <th>Documents</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredApplications.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No Applications Found
                        </td>
                      </tr>
                    ) : (
                      filteredApplications.map((app, index) => (
                        <tr key={app.id}>
                          <td>{index + 1}</td>
                          <td>{app.fullName}</td>
                          <td>{app.subject}</td>
                          <td>{app.experience}</td>

                          <td>
                            <span className={`badge ${badgeClass(app.status)}`}>
                              {app.status}
                            </span>
                          </td>

                          <td>
                            <div className="d-flex gap-2">
                              {app.resumeUrl && (
                                <a
                                  href={`http://localhost:5000/${app.resumeUrl}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-info btn-sm"
                                >
                                  <i className="bi bi-file-earmark-pdf"></i>
                                </a>
                              )}

                              {app.certificateUrls?.length > 0 && (
  <button
    className="btn btn-secondary btn-sm"
    onClick={() => setSelectedTeacher(app)}
  >
    <i className="bi bi-award"></i>
    {" "}Certificates ({app.certificateUrls.length})
  </button>
)}
                            </div>
                          </td>

                          <td>
                            <div className="d-flex gap-2 flex-wrap">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => setSelectedTeacher(app)}
                              >
                                <i className="bi bi-eye"></i> View
                              </button>

                              {app.status === "PENDING" ? (
                                <>
                                  <button
                                    className="btn btn-success btn-sm"
                                    onClick={() =>
                                      updateStatus(app.id, "APPROVED")
                                    }
                                  >
                                    Approve
                                  </button>

                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                      updateStatus(app.id, "REJECTED")
                                    }
                                  >
                                    Reject
                                  </button>
                                </>
                              ) : (
                                <span className="text-success fw-semibold">
  Completed
</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {selectedTeacher && (
          <TeacherDetailsModal
            teacher={selectedTeacher}
            onClose={() => setSelectedTeacher(null)}
          />
        )}
      </div>
    </AdminLayout>
  );
}

export default TeacherApplications;
