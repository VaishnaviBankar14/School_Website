import "./WhyChooseUs.css";

const features = [
  {
    icon: "bi bi-mortarboard-fill",
    title: "Experienced Faculty",
    text: "Highly qualified teachers dedicated to academic excellence.",
  },
  {
    icon: "bi bi-laptop",
    title: "Smart Classrooms",
    text: "Technology-enabled classrooms for interactive learning.",
  },
  {
    icon: "bi bi-book-fill",
    title: "Modern Library",
    text: "A rich collection of books and digital learning resources.",
  },
  {
    icon: "bi bi-trophy-fill",
    title: "Sports & Activities",
    text: "Encouraging physical fitness and extracurricular excellence.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Safe Campus",
    text: "Secure environment with CCTV surveillance and safety measures.",
  },
  {
    icon: "bi bi-award-fill",
    title: "Holistic Development",
    text: "Focusing on academics, values, creativity, and leadership.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2 className="section-title mt-3">
            What Makes Our School Different?
          </h2>

          <p className="section-subtitle">
            We provide a balanced learning environment where every student is
            encouraged to excel academically and personally.
          </p>

        </div>

        <div className="row g-4">

          {features.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in"
            >
              <div className="feature-card h-100">

                <div className="feature-icon">
                  <i className={item.icon}></i>
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;