const benefits = [
  {
    icon: "bi bi-cash-stack",
    title: "Competitive Salary",
    description:
      "We offer attractive salary packages with annual performance-based increments."
  },
  {
    icon: "bi bi-mortarboard-fill",
    title: "Professional Growth",
    description:
      "Regular workshops, certifications, and career advancement opportunities."
  },
  {
    icon: "bi bi-laptop",
    title: "Smart Classrooms",
    description:
      "Teach using modern digital classrooms equipped with the latest technology."
  },
  {
    icon: "bi bi-people-fill",
    title: "Supportive Environment",
    description:
      "Work alongside experienced educators in a collaborative and friendly culture."
  },
  {
    icon: "bi bi-heart-pulse-fill",
    title: "Employee Well-being",
    description:
      "A healthy work-life balance with employee welfare initiatives and support."
  },
  {
    icon: "bi bi-award-fill",
    title: "Recognition & Rewards",
    description:
      "Outstanding contributions are appreciated through awards and recognition programs."
  }
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-5 bg-light"
    >
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold mb-3">
            Why Join Our School?
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Become part of a school that values innovation, academic excellence,
            and continuous professional development while providing a positive
            environment for both teachers and students.
          </p>
        </div>

        <div className="row g-4">

          {benefits.map((benefit, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

             <div
  className="card border-0 shadow-sm h-100 text-center p-4"
  style={{
    transition: "all .3s ease",
    borderRadius: "15px",
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
                  className="mx-auto mb-4 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    fontSize: "30px"
                  }}
                >
                  <i className={benefit.icon}></i>
                </div>

                <h4 className="fw-bold mb-3">
                  {benefit.title}
                </h4>

                <p className="text-muted mb-0">
                  {benefit.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;