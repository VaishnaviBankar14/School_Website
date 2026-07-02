const eligibility = [
  {
    icon: "bi bi-stars",
    color: "primary",
    title: "Pre-Primary",
    classes: "Nursery, Jr. KG & Sr. KG",
    age: "Age: 3 - 5 Years",
    description:
      "Admission is based on the child's age and a simple parent-child interaction."
  },
  {
    icon: "bi bi-book",
    color: "success",
    title: "Primary",
    classes: "Grade I - V",
    age: "Age as per school norms",
    description:
      "Previous academic records and age eligibility are considered during admission."
  },
  {
    icon: "bi bi-journal-check",
    color: "warning",
    title: "Secondary",
    classes: "Grade VI - X",
    age: "As per educational guidelines",
    description:
      "Applicants should submit previous report cards. An assessment may be conducted if required."
  },
  {
    icon: "bi bi-mortarboard-fill",
    color: "danger",
    title: "Higher Secondary",
    classes: "Grade XI - XII",
    age: "Subject to board eligibility",
    description:
      "Admission depends on previous academic performance, subject availability, and school policies."
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
            Admission Eligibility
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "720px" }}
          >
            We welcome students across different grade levels. Please ensure
            that your child meets the age and academic requirements before
            applying.
          </p>
        </div>

        <div className="row g-4">

          {eligibility.map((item, index) => (

            <div
              className="col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div
                className="card border-0 shadow-sm h-100 text-center p-4"
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
                  className={`mx-auto rounded-circle bg-${item.color} text-white d-flex align-items-center justify-content-center mb-4`}
                  style={{
                    width: "75px",
                    height: "75px",
                    fontSize: "30px"
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                <h4 className="fw-bold">
                  {item.title}
                </h4>

                <p className="text-primary fw-semibold mb-2">
                  {item.classes}
                </p>

                <p className="text-muted small">
                  {item.age}
                </p>

                <hr />

                <p className="text-muted mb-0">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default EligibilitySection;