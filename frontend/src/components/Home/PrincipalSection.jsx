import "./PrincipalSection.css";

function PrincipalSection() {
  return (
    <section className="principal-section py-5">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-4 text-center">

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
              alt="Principal"
              className="principal-image"
            />

          </div>

          <div className="col-lg-8">

            <span className="section-tag">
              PRINCIPAL'S MESSAGE
            </span>

            <h2 className="mt-3">
              Welcome to Bright Future Public School
            </h2>

            <p className="mt-4">
              Dear Students and Parents,
            </p>

            <p>
              At Bright Future Public School, we believe that education
              is not only about academic excellence but also about
              developing character, confidence, creativity, and
              leadership qualities.
            </p>

            <p>
              Our dedicated teachers strive to create a nurturing
              environment where every child discovers their potential
              and grows into a responsible citizen.
            </p>

            <h5 className="mt-4">
              — Dr. A. Sharma
            </h5>

            <small>Principal</small>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PrincipalSection;