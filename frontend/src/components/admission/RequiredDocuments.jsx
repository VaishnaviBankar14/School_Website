const documents = [
  {
    icon: "bi bi-file-earmark-person-fill",
    title: "Birth Certificate",
    description: "A valid birth certificate issued by the competent authority."
  },
  {
    icon: "bi bi-journal-text",
    title: "Previous Report Card",
    description: "Academic report card or marksheet from the previous school."
  },
  {
    icon: "bi bi-image-fill",
    title: "Passport Size Photographs",
    description: "Recent passport-size photographs of the student."
  },
  {
    icon: "bi bi-person-vcard-fill",
    title: "Identity Proof",
    description: "Aadhaar Card or any other valid identity proof."
  },
  {
    icon: "bi bi-building-fill-check",
    title: "Transfer Certificate",
    description: "Required for students transferring from another school."
  },
  {
    icon: "bi bi-house-door-fill",
    title: "Address Proof",
    description: "Electricity bill, Aadhaar, Passport, or other valid address proof."
  }
];

const RequiredDocuments = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Required Documents
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Please keep the following documents ready before submitting the
            admission application.
          </p>
        </div>

        <div className="row g-4">

          {documents.map((doc, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div
                className="card border-0 shadow-sm h-100 p-4"
                style={{
                  borderRadius: "18px",
                  transition: "all .3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.classList.remove("shadow-sm");
                  e.currentTarget.classList.add("shadow");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.classList.remove("shadow");
                  e.currentTarget.classList.add("shadow-sm");
                }}
              >

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px"
                  }}
                >
                  <i className={doc.icon}></i>
                </div>

                <h5 className="fw-bold mb-3">
                  {doc.title}
                </h5>

                <p className="text-muted mb-0">
                  {doc.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div
          className="alert alert-info mt-5 d-flex align-items-start"
          data-aos="fade-up"
        >
          <i className="bi bi-info-circle-fill fs-4 me-3"></i>

          <div>
            <strong>Note:</strong> Original documents will be verified during
            the admission process. Please ensure that all uploaded copies are
            clear and readable.
          </div>
        </div>

      </div>
    </section>
  );
};

export default RequiredDocuments;