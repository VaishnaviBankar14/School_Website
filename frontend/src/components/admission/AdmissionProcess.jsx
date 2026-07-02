const steps = [
  {
    number: "01",
    icon: "bi bi-pencil-square",
    title: "Submit Application",
    description:
      "Complete the online admission form with accurate student and parent details."
  },
  {
    number: "02",
    icon: "bi bi-file-earmark-text-fill",
    title: "Upload Documents",
    description:
      "Upload the required documents such as birth certificate, previous marksheets, and photographs."
  },
  {
    number: "03",
    icon: "bi bi-search",
    title: "Application Review",
    description:
      "Our admission team carefully reviews every application and verifies the submitted documents."
  },
  {
    number: "04",
    icon: "bi bi-person-video3",
    title: "Interaction / Assessment",
    description:
      "Eligible students may be invited for an interaction or assessment depending on the grade level."
  },
  {
    number: "05",
    icon: "bi bi-award-fill",
    title: "Admission Confirmation",
    description:
      "Selected students receive an admission offer and can complete the enrollment process."
  }
];

const AdmissionProcess = () => {
  return (
    <section id="process" className="py-5 bg-light">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Admission Process
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Our admission process is simple, transparent, and designed to make
            enrollment easy for parents and students.
          </p>
        </div>

        <div className="row g-4">

          {steps.map((step, index) => (

            <div
              className="col-md-6 col-lg"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div
                className="card border-0 shadow-sm h-100 text-center p-4"
                style={{
                  borderRadius: "18px",
                  transition: "all .3s ease",
                  cursor: "pointer",
                  minHeight: "330px"
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
                  className="mx-auto rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "22px"
                  }}
                >
                  {step.number}
                </div>

                <i
                  className={`${step.icon} text-primary mb-3`}
                  style={{ fontSize: "40px" }}
                ></i>

                <h5 className="fw-bold mb-3">
                  {step.title}
                </h5>

                <p className="text-muted mb-0">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;