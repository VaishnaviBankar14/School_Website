import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "bi bi-laptop",
      title: "Smart Classrooms",
      description:
        "Interactive digital classrooms with modern teaching methods.",
    },
    {
      icon: "bi bi-person-workspace",
      title: "Experienced Faculty",
      description:
        "Highly qualified teachers dedicated to student success.",
    },
    {
      icon: "bi bi-book-half",
      title: "Digital Library",
      description:
        "Access to books, journals and digital learning resources.",
    },
    {
      icon: "bi bi-trophy-fill",
      title: "Sports & Activities",
      description:
        "Encouraging physical fitness and extracurricular excellence.",
    },
    {
      icon: "bi bi-bus-front-fill",
      title: "Transport Facility",
      description:
        "Safe and comfortable transportation across the city.",
    },
    {
      icon: "bi bi-shield-check",
      title: "Safe Campus",
      description:
        "Secure campus with CCTV surveillance and disciplined environment.",
    },
  ];

  return (
    <section className="why-section">

      <div className="container">

        <div className="text-center mb-5">

          <h6 className="section-subtitle">
            WHY CHOOSE US
          </h6>

          <h2 className="section-title">
            Why Choose Bright Future Public School?
          </h2>

          <p className="section-text">
            We provide quality education through modern infrastructure,
            experienced teachers and holistic student development.
          </p>

        </div>

        <div className="row g-4">

          {features.map((feature, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <div className="feature-card">

                <div className="feature-icon">

                  <i className={feature.icon}></i>

                </div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;