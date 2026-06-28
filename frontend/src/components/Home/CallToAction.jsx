import { Link } from "react-router-dom";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <h2>
            Admissions Open for Academic Year 2026–27
          </h2>

          <p>
            Give your child the opportunity to learn, grow and succeed in a
            modern educational environment with experienced teachers and
            excellent facilities.
          </p>

          <div className="mt-4">

            <Link
              to="/admission"
              className="btn btn-warning btn-lg px-5 rounded-pill me-3"
            >
              Apply for Admission
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg px-5 rounded-pill"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;