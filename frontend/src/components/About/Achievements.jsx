import "./Achievements.css";

const achievements = [
  {
    icon: "bi bi-people-fill",
    number: "1500+",
    title: "Students",
  },
  {
    icon: "bi bi-person-workspace",
    number: "80+",
    title: "Qualified Teachers",
  },
  {
    icon: "bi bi-award-fill",
    number: "25+",
    title: "Years of Excellence",
  },
  {
    icon: "bi bi-trophy-fill",
    number: "100%",
    title: "Board Results",
  },
];

function Achievements() {
  return (
    <section className="achievement-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="section-title mt-3">
            Milestones We Are Proud Of
          </h2>

          <p className="section-subtitle">
            Over the years, Bright Future Public School has earned the trust of
            parents through quality education, dedicated teachers, and
            outstanding student achievements.
          </p>

        </div>

        <div className="row g-4">

          {achievements.map((item, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="zoom-in"
            >
              <div className="achievement-card">

                <div className="achievement-icon">
                  <i className={item.icon}></i>
                </div>

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;