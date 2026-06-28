import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="about-cta">

      <div className="container">

        <div
          className="cta-content"
          data-aos="zoom-in"
        >

          <span className="cta-tag">
            ADMISSIONS OPEN 2026-27
          </span>

          <h2>
            Give Your Child the Best Start for a Bright Future
          </h2>

          <p>
            Join Bright Future Public School and become part of a nurturing
            learning community where academic excellence, creativity,
            discipline, and character development go hand in hand.
          </p>

          <div className="cta-buttons">

            <Link
              to="/admission"
              className="btn btn-warning btn-lg"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;