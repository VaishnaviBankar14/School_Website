import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/Building.jpg";
import "./AboutPreview.css"

function AboutPreview() {
  return (
    <section className="about-section py-5">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">

            <img
              src={aboutImage}
              alt="School"
              className="img-fluid rounded-4 shadow"
            />

          </div>

          <div className="col-lg-6">

            <span className="section-tag">
              ABOUT OUR SCHOOL
            </span>

            <h2 className="mt-3 mb-4">
              Empowering Students for a Brighter Tomorrow
            </h2>

            <p>
              Bright Future Public School is committed to providing quality
              education through experienced faculty, modern infrastructure,
              digital classrooms, sports, cultural activities, and value-based
              learning.
            </p>

            <p>
              Our mission is to develop confident, responsible, and innovative
              students who are prepared to meet future challenges while
              maintaining strong moral values.
            </p>

            <div className="row mt-4">

              <div className="col-6">
                ✅ Smart Classrooms
              </div>

              <div className="col-6">
                ✅ Experienced Teachers
              </div>

              <div className="col-6 mt-3">
                ✅ Sports Facilities
              </div>

              <div className="col-6 mt-3">
                ✅ Digital Learning
              </div>

            </div>

            <Link
              to="/about"
              className="btn btn-primary mt-4 px-4"
            >
              Read More
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;