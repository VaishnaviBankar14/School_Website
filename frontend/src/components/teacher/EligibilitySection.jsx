const eligibilityData = [
  {
    icon: "bi bi-mortarboard-fill",
    title: "Educational Qualification",
    color: "primary",
    items: [
      "Bachelor's or Master's Degree in the relevant subject.",
      "B.Ed. or equivalent teaching qualification.",
      "Excellent communication and classroom management skills."
    ]
  },
  {
    icon: "bi bi-briefcase-fill",
    title: "Experience",
    color: "success",
    items: [
      "Freshers with strong academic records are welcome.",
      "Experienced teachers will be given preference.",
      "Experience with digital teaching tools is an added advantage."
    ]
  },
  {
    icon: "bi bi-file-earmark-check-fill",
    title: "Required Documents",
    color: "warning",
    items: [
      "Updated Resume/CV",
      "Educational Certificates",
      "Identity Proof",
      "Recent Passport Size Photograph (if required)"
    ]
  }
];

const EligibilitySection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Eligibility Criteria
          </h2>

          <p
            className="text-muted mx-auto mt-3"
            style={{ maxWidth: "700px" }}
          >
            Before applying, please ensure you meet the following
            qualifications and have the required documents ready.
          </p>
        </div>

        <div className="row g-4">

          {eligibilityData.map((item, index) => (

            <div
              className="col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "18px",
                  transition: "0.3s",
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

                <div className="card-body p-4">

                  <div
                    className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center mb-4`}
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "28px"
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>

                  <h4 className="fw-bold mb-4">
                    {item.title}
                  </h4>

                  <ul className="list-unstyled mb-0">

                    {item.items.map((point, i) => (

                      <li
                        key={i}
                        className="mb-3 d-flex"
                      >
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>

                        <span className="text-muted">
                          {point}
                        </span>
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default EligibilitySection;