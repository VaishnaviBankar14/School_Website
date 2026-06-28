import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="vision-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            OUR PURPOSE
          </span>

          <h2 className="section-title mt-3">
            Vision & Mission
          </h2>

          <p className="section-subtitle">
            Our vision and mission guide every step we take in creating an
            inspiring, inclusive, and future-ready learning environment.
          </p>

        </div>

        <div className="row g-4">

          {/* Vision */}

          <div className="col-lg-6" data-aos="fade-right">

            <div className="vision-card h-100">

              <div className="icon-box">
                <i className="bi bi-eye-fill"></i>
              </div>

              <h3>Our Vision</h3>

              <p>
                To inspire every student to become a confident, responsible,
                and compassionate individual who embraces lifelong learning and
                contributes positively to society.
              </p>

            </div>

          </div>

          {/* Mission */}

          <div className="col-lg-6" data-aos="fade-left">

            <div className="vision-card h-100">

              <div className="icon-box">
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>Our Mission</h3>

              <p>
                To provide quality education through innovative teaching,
                modern facilities, experienced educators, and value-based
                learning that empowers students for future success.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionMission;