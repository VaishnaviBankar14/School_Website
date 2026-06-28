import "./Hero.css";
import heroImage from "../../assets/images/Building.jpg";

function Hero() {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay">
        <div className="container text-center">

          <span className="hero-tag">
            ABOUT OUR SCHOOL
          </span>

          <h1 data-aos="fade-up">
            Empowering Students for a Brighter Tomorrow
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            Dedicated to academic excellence, innovation, and holistic
            development, we nurture confident learners who are prepared to
            lead and succeed in a rapidly changing world.
          </p>

          <div
            className="breadcrumb-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Home <span>/</span> About
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;