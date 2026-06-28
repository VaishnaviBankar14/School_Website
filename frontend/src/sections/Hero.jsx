import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../assets/images/Building.jpg";// Change if your image name is different

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          Welcome to Bright Future Public School
        </span>

        <h1>
          Excellence in Education <br />
          Since 2001
        </h1>

        <p>
          Providing quality education with experienced teachers,
          modern classrooms, sports facilities and holistic
          development for every student.
        </p>

        <div className="hero-buttons">

          <Link
            to="/admission"
            className="btn btn-warning btn-lg px-4"
          >
            Apply Now
          </Link>

          <Link
            to="/about"
            className="btn btn-outline-light btn-lg px-4"
          >
            Explore School
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;