import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-5">

          {/* School */}

          <div className="col-lg-4">

            <div className="d-flex align-items-center mb-3">

              <div className="footer-logo">

                <i className="bi bi-mortarboard-fill"></i>

              </div>

              <div className="ms-3">

                <h4 className="mb-0">
                  Bright Future
                </h4>

                <span>
                  Public School
                </span>

              </div>

            </div>

            <p>
              Bright Future Public School is committed to providing
              quality education through experienced teachers,
              modern classrooms and holistic student development.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/notices">Notices</Link></li>

              <li><Link to="/admission">Admission</Link></li>

              <li><Link to="/teacher-apply">Teacher Apply</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6">

            <h5>Contact</h5>

            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Pune, Maharashtra
            </p>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              school@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 9876543210
            </p>

          </div>

          {/* Social */}

          <div className="col-lg-3">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center copyright">

          © 2026 Bright Future Public School. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;