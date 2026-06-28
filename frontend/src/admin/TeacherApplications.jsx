import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./TeacherApplications.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TeacherApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const res = await api.get("/teachers/all");

      setApplications(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load teacher applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/teachers/${id}/status`, {
        status,
      });

      fetchApplications();
    } catch (error) {
      console.error(error);
      alert("Failed to update application");
    }
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const value = search.toLowerCase();

      return (
        app.fullName.toLowerCase().includes(value) ||
        app.email.toLowerCase().includes(value)
      );
    });
  }, [applications, search]);

  const getBadge = (status) => {
    switch (status) {
      case "APPROVED":
        return "bg-success";

      case "REJECTED":
        return "bg-danger";

      default:
        return "bg-warning text-dark";
    }
  };

  return (
    <div className="container-fluid mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Teacher Applications</h4>
        </div>

        <div className="card-body">

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Search by Name or Email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border"></div>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center">
              No Applications Found
            </div>
          ) : (
            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle">

                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Qualification</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Resume</th>
                    <th>Certificate</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredApplications.map((app) => (

                    <tr key={app.id}>

                      <td>{app.fullName}</td>

                      <td>{app.email}</td>

                      <td>{app.phone}</td>

                      <td>{app.subject}</td>

                      <td>{app.qualification}</td>

                      <td>{app.experience}</td>

                      <td>
                        <span className={`badge ${getBadge(app.status)}`}>
                          {app.status}
                        </span>
                      </td>

                      <td>
                        {app.resumeUrl ? (
                          <a
                            href={`http://localhost:5000/${app.resumeUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-info"
                          >
                            Resume
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td>
                        {app.certificateUrl ? (
                          <a
                            href={`http://localhost:5000/${app.certificateUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-secondary"
                          >
                            Certificate
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td>

                        {app.status === "PENDING" ? (
                          <div className="d-flex gap-2">

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

                          </div>
                        ) : (
                          <span className="text-muted">
                            No Action
                          </span>
                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default TeacherApplications;