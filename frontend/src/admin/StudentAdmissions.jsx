import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./StudentAdmissions.css";
import AdminLayout from "./layout/AdminLayout";
import StudentDetailsModal from "../components/student/StudentDetailsModal";

function StudentAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

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
    <AdminLayout>
      <div className="container-fluid mt-3">

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
  {(item.birthCertificateUrl ||
    item.reportCardUrl ||
    item.transferCertificateUrl ||
    item.studentAadharUrl ||
    item.parentAadharUrl ||
    item.addressProofUrl ||
    item.otherDocumentUrl) ? (
    <span className="badge bg-success">
      Documents Uploaded
    </span>
  ) : (
    <span className="text-muted">
      No Documents
    </span>
  )}
</td>

                       <td>
  <div className="d-flex gap-2 flex-wrap">

    <button
      className="btn btn-primary btn-sm"
      onClick={() => setSelectedStudent(item)}
    >
      <i className="bi bi-eye me-1"></i>
      View
    </button>

    {item.status === "PENDING" ? (
      <>
        <button
          className="btn btn-success btn-sm"
          onClick={() => updateStatus(item.id, "APPROVED")}
        >
          Approve
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => updateStatus(item.id, "REJECTED")}
        >
          Reject
        </button>
      </>
    ) : (
      <span className="badge bg-secondary align-self-center">
        Completed
      </span>
    )}

  </div>
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

      {selectedStudent && (
  <StudentDetailsModal
    student={selectedStudent}
    onClose={() => setSelectedStudent(null)}
  />
)}
    </AdminLayout>
  );
}

export default StudentAdmissions;