import "./Story.css";
import storyImage from "../../assets/images/Building.jpg";

function Story() {
  return (
    <section className="story-section py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* Image */}

          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
          >
            <img
              src={storyImage}
              alt="School Building"
              className="img-fluid rounded-4 shadow story-image"
            />
          </div>

          {/* Content */}

          <div
            className="col-lg-6"
            data-aos="fade-left"
          >

            <span className="section-tag">
              OUR STORY
            </span>

            <h2 className="section-title mt-3">
              Building Futures Through Quality Education
            </h2>

            <p>
              Bright Future Public School was established with the vision of
              providing quality education that nurtures academic excellence,
              creativity, discipline, and strong moral values. Over the years,
              our institution has become a trusted place where students learn,
              grow, and achieve their full potential.
            </p>

            <p>
              We believe education goes beyond textbooks. Through experienced
              teachers, modern classrooms, extracurricular activities, and
              value-based learning, we prepare students to become confident,
              responsible, and compassionate citizens.
            </p>

            <div className="row mt-4">

              <div className="col-sm-6 mb-3">
                <div className="story-card">
                  <h3>25+</h3>
                  <p>Years of Excellence</p>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="story-card">
                  <h3>1500+</h3>
                  <p>Happy Students</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Story;