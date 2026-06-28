import "./GallerySection.css";

import building from "../../assets/images/Building.jpg";;


function GallerySection() {

  const images = [
    building,
    
    building,
    
    building
  ];

  return (
    <section className="gallery-section">

      <div className="container">

        <div className="text-center mb-5">

          <h6 className="section-subtitle">
            OUR GALLERY
          </h6>

          <h2 className="section-title">
            Campus Life
          </h2>

          <p className="section-text">
            Explore our beautiful campus, classrooms,
            sports facilities and student activities.
          </p>

        </div>

        <div className="row g-4">

          {images.map((img, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <div className="gallery-card">

                <img
                  src={img}
                  alt="School"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GallerySection;