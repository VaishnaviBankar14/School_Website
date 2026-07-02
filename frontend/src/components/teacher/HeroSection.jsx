import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="position-relative text-white d-flex align-items-center"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              Join Our Faculty
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Inspire Young Minds.
              <br />
              Build Your Teaching Career With Us.
            </h1>

            <p
              className="lead mb-4"
              style={{ maxWidth: "650px" }}
            >
              We are looking for passionate, dedicated, and qualified educators
              who believe in academic excellence, innovation, and student
              success. Join our team and make a lasting impact.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#applicationForm" className="btn btn-warning btn-lg px-4">
                Apply Now
              </a>

              <Link
                to="/about"
                className="btn btn-outline-light btn-lg px-4"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="col-lg-5 text-center mt-5 mt-lg-0"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="bg-white rounded-4 shadow-lg p-4 text-dark">
              <h3 className="fw-bold mb-4">Why Teach With Us?</h3>

              <div className="text-start">

                <p>📚 Modern Teaching Infrastructure</p>

                <p>👩‍🏫 Supportive Academic Environment</p>

                <p>💡 Continuous Professional Development</p>

                <p>🌱 Career Growth Opportunities</p>

                <p>🏆 Performance Recognition</p>

                <p className="mb-0">❤️ Student-Centered Learning</p>

              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#benefits"
            className="text-white text-decoration-none fs-3"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;