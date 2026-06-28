import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./StudentAdmissions.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StudentAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchAdmissions = async () => {
    try {
      setLoading(true);

      const res = await api.get("/admissions/all");

      setAdmissions(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load admissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admissions/${id}/status`, {
        status,
      });

      fetchAdmissions();
    } catch (error) {
      console.error(error);
      alert("Failed to update admission");
    }
  };

  const filteredAdmissions = useMemo(() => {
    return admissions.filter((item) => {
      const value = search.toLowerCase();

      return (
        item.fullName.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value)
      );
    });
  }, [admissions, search]);

  const badgeColor = (status) => {
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
          <h4 className="mb-0">Student Admissions</h4>
        </div>

        <div className="card-body">

          <div className="mb-3">
            <input
              type="text"
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
          ) : filteredAdmissions.length === 0 ? (
            <h5 className="text-center">No Admissions Found</h5>
          ) : (
            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle">

                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Photo</th>
                    <th>Document</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredAdmissions.map((item) => (

                    <tr key={item.id}>

                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.className}</td>

                      <td>
                        <span className={`badge ${badgeColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>

                      <td>
                        {item.photoUrl ? (
                          <a
                            href={`http://localhost:5000/${item.photoUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-info btn-sm"
                          >
                            Photo
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td>
                        {item.documentUrl ? (
                          <a
                            href={`http://localhost:5000/${item.documentUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary btn-sm"
                          >
                            Document
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>

                      <td>
                        {item.status === "PENDING" ? (
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                updateStatus(item.id, "APPROVED")
                              }
                            >
                              Approve
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                updateStatus(item.id, "REJECTED")
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

export default StudentAdmissions;