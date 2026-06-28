import { Link } from "react-router-dom";
import "./GalleryPreview.css";

import img1 from "../../assets/images/Building.jpg";
import img2 from "../../assets/images/Building.jpg";
import img3 from "../../assets/images/Building.jpg";
import img4 from "../../assets/images/Building.jpg";
import img5 from "../../assets/images/Building.jpg";
import img6 from "../../assets/images/Building.jpg";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

function GalleryPreview() {
  return (
    <section className="gallery-preview py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            CAMPUS GALLERY
          </span>

          <h2 className="section-title mt-3">
            Explore Our School Campus
          </h2>

          <p className="section-subtitle">
            Take a glimpse into our vibrant campus, modern classrooms,
            extracurricular activities, and memorable moments.
          </p>

        </div>

        <div className="row g-4">

          {galleryImages.map((image, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in"
            >

              <div className="gallery-card">

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid"
                />

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-5">

          <Link
            to="/gallery"
            className="btn btn-primary px-4 py-2"
          >
            View Full Gallery
          </Link>

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;