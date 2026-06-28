import { MegaphoneFill } from "react-bootstrap-icons";

const NoticeHero = () => {
  return (
    <section
      className="text-white position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #4f9cf9)",
        padding: "90px 0",
      }}
      data-aos="fade-down"
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-7">

            <span className="badge bg-warning text-dark px-3 py-2 mb-3 fs-6">
              Latest School Updates
            </span>

            <h1
              className="fw-bold display-3 mb-3"
              style={{ lineHeight: "1.2" }}
            >
              School Notices
            </h1>

            <p
              className="lead"
              style={{
                maxWidth: "600px",
                opacity: 0.95,
              }}
            >
              Stay informed with important announcements,
              examinations, holidays, events and other
              school updates.
            </p>

          </div>

          {/* Right */}

          <div
            className="col-lg-5 text-center mt-5 mt-lg-0"
            data-aos="zoom-in"
          >
            <div
              className="rounded-circle d-inline-flex justify-content-center align-items-center shadow-lg"
              style={{
                width: "220px",
                height: "220px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MegaphoneFill
                size={110}
                className="text-warning"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Wave */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
};

export default NoticeHero;