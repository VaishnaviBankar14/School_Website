import "./PrincipalMessage.css";
import principal from "../../assets/images/Principal.jpg";

function PrincipalMessage() {
  return (
    <section className="principal-section py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left */}

          <div
            className="col-lg-5 text-center"
            data-aos="fade-right"
          >

            <img
              src={principal}
              alt="Principal"
              className="img-fluid principal-image"
            />

          </div>

          {/* Right */}

          <div
            className="col-lg-7"
            data-aos="fade-left"
          >

            <span className="section-tag">
              PRINCIPAL'S MESSAGE
            </span>

            <h2 className="section-title mt-3">
              A Message From Our Principal
            </h2>

            <p className="principal-text">
              Welcome to Bright Future Public School. Our mission is to create
              an environment where every child is encouraged to explore,
              innovate, and achieve excellence.
            </p>

            <p className="principal-text">
              We believe that education is not only about academic success but
              also about developing values, leadership qualities, confidence,
              and compassion. Together with our dedicated teachers and
              supportive parents, we prepare our students for a bright and
              successful future.
            </p>

            <div className="principal-sign">

              <h5>Dr. ABC XYZ</h5>

              <span>Principal</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PrincipalMessage;