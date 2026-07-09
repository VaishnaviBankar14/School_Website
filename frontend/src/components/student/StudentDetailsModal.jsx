import React from "react";

function StudentDetailsModal({ student, onClose }) {
  if (!student) return null;

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

  const docs = [
    { label: "Birth Certificate", file: student.birthCertificateUrl },
    { label: "Report Card", file: student.reportCardUrl },
    { label: "Transfer Certificate", file: student.transferCertificateUrl },
    { label: "Student Aadhaar", file: student.studentAadharUrl },
    { label: "Parent Aadhaar", file: student.parentAadharUrl },
    { label: "Address Proof", file: student.addressProofUrl },
    { label: "Other Document", file: student.otherDocumentUrl },
  ];

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1055 }}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg">

            <div className="modal-header bg-primary text-white">
              <h4 className="modal-title fw-bold">
                <i className="bi bi-mortarboard-fill me-2"></i>
                Student Admission Details
              </h4>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <div className="row g-4">

                <div className="col-lg-3 text-center">
                  {student.photoUrl ? (
                    <img
                      src={`http://localhost:5000/${student.photoUrl}`}
                      alt="Student"
                      className="img-fluid rounded shadow"
                      style={{ width: 220, height: 220, objectFit: "cover" }}
                    />
                  ) : (
                    <div className="border rounded p-5">No Photo</div>
                  )}
                </div>

                <div className="col-lg-9">
                  <div className="row g-3">

                    {[
                      ["👤 Full Name", student.fullName],
                      ["📧 Email", student.email],
                      ["📱 Phone", student.phone],
                      ["🏫 Class", student.className],
                      ["👨 Parent Name", student.parentName || "-"],
                      ["🚻 Gender", student.gender || "-"],
                      ["🎂 Date of Birth", student.dob ? new Date(student.dob).toLocaleDateString() : "-"],
                      ["🏫 Previous School", student.previousSchool || "-"],
                      ["📅 Applied Date", student.createdAt ? new Date(student.createdAt).toLocaleDateString() : "-"],
                    ].map(([title, value], i) => (
                      <div className="col-md-6" key={i}>
                        <div className="border rounded p-3 h-100">
                          <h6 className="text-primary fw-bold mb-2">{title}</h6>
                          <p className="mb-0">{value}</p>
                        </div>
                      </div>
                    ))}

                    <div className="col-md-6">
                      <div className="border rounded p-3 h-100">
                        <h6 className="text-primary fw-bold mb-2">📌 Status</h6>
                        <span className={`badge rounded-pill ${getBadge(student.status)}`}>
                          {student.status}
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="border rounded p-3">
                        <h6 className="text-primary fw-bold mb-2">📍 Address</h6>
                        <p className="mb-0">{student.address || "-"}</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <hr className="my-4"/>

              <h5 className="fw-bold mb-3">Documents</h5>

              <div className="d-flex flex-wrap gap-2">
                {docs.map((doc, i) =>
                  doc.file ? (
                    <a
                      key={i}
                      href={`http://localhost:5000/${doc.file}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      <i className="bi bi-file-earmark-fill me-2"></i>
                      {doc.label}
                    </a>
                  ) : null
                )}
              </div>

            </div>

            <div className="modal-footer">
              <button className="btn btn-danger px-4" onClick={onClose}>
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetailsModal;
