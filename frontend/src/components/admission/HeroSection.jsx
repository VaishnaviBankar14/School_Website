import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="position-relative d-flex align-items-center text-white"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          <div
            className="col-lg-7"
            data-aos="fade-right"
          >

            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              Admissions Open 2026-27
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Begin Your Child's Journey
              <br />
              Towards Excellence
            </h1>

            <p
              className="lead mb-4"
              style={{ maxWidth: "650px" }}
            >
              Our school provides quality education, experienced faculty,
              modern infrastructure, and a nurturing environment where every
              child can learn, grow, and succeed.
            </p>

            <div className="d-flex flex-wrap gap-3">

              <a
                href="#admissionForm"
                className="btn btn-warning btn-lg px-4"
              >
                Apply Now
              </a>

              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg px-4"
              >
                Contact Us
              </Link>

            </div>

          </div>

          <div
            className="col-lg-5 mt-5 mt-lg-0"
            data-aos="fade-left"
          >

            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "20px"
              }}
            >

              <div className="card-body p-4 text-dark">

                <h3 className="fw-bold mb-4">
                  Admission Highlights
                </h3>

                <div className="d-flex mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Admissions from Nursery to Grade XII</span>
                </div>

                <div className="d-flex mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Experienced & Qualified Faculty</span>
                </div>

                <div className="d-flex mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Smart Classrooms & Digital Learning</span>
                </div>

                <div className="d-flex mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Sports, Arts & Extracurricular Activities</span>
                </div>

                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Safe & Student-Friendly Campus</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div
          className="text-center mt-5"
          data-aos="fade-up"
        >
          <a
            href="#process"
            className="text-white text-decoration-none fs-2"
          >
            ↓
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;