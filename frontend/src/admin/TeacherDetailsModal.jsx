import React from "react";

function TeacherDetailsModal({ teacher, onClose }) {
  if (!teacher) return null;

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
    <>
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1055,
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">

            <div className="modal-header bg-primary text-white">
              <h4 className="modal-title fw-bold">
                <i className="bi bi-person-vcard me-2"></i>
                Teacher Application Details
              </h4>

              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <div className="row g-4">

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      👤 Full Name
                    </h6>
                    <p className="mb-0">{teacher.fullName}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      📧 Email
                    </h6>
                    <p className="mb-0">{teacher.email}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      📱 Phone
                    </h6>
                    <p className="mb-0">{teacher.phone}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      📚 Subject
                    </h6>
                    <p className="mb-0">{teacher.subject}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      🎓 Qualification
                    </h6>
                    <p className="mb-0">{teacher.qualification}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      💼 Experience
                    </h6>
                    <p className="mb-0">{teacher.experience}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      📌 Status
                    </h6>
                    <span className={`badge rounded-pill ${getBadge(teacher.status)}`}>
                      {teacher.status}
                    </span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="text-primary fw-bold mb-2">
                      📅 Applied Date
                    </h6>
                    <p className="mb-0">
                      {teacher.createdAt
                        ? new Date(teacher.createdAt).toLocaleDateString()
                        : "-"}
                    </p>
                  </div>
                </div>

              </div>

              <hr className="my-4"/>

              <h5 className="fw-bold mb-3">
                Documents
              </h5>

              <div className="d-flex gap-3 flex-wrap">

                {teacher.resumeUrl && (
                  <a
                    href={`http://localhost:5000/${teacher.resumeUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info"
                  >
                    <i className="bi bi-file-earmark-pdf-fill me-2"></i>
                    Resume
                  </a>
                )}

                {teacher.certificateUrls?.length > 0 && (
  <>
    <h5 className="fw-bold mt-4 mb-3">
      Certificates
    </h5>

    <div className="d-flex flex-wrap gap-2">

      {teacher.certificateUrls.map((file, index) => (
        <a
          key={index}
          href={`http://localhost:5000/${file}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          <i className="bi bi-award-fill me-2"></i>
          Certificate {index + 1}
        </a>
      ))}

    </div>
  </>
)}
              </div>

            </div>

            <div className="modal-footer">
              <button
                className="btn btn-danger px-4"
                onClick={onClose}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherDetailsModal;
