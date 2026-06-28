import "./StatCard.css";

function StatCard() {
  const stats = [
    {
      icon: "bi bi-mortarboard-fill",
      number: "1500+",
      title: "Students",
    },
    {
      icon: "bi bi-person-workspace",
      number: "75+",
      title: "Teachers",
    },
    {
      icon: "bi bi-trophy-fill",
      number: "20+",
      title: "Awards",
    },
    {
      icon: "bi bi-book-fill",
      number: "25+",
      title: "Years",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">

        <div className="stats-card">

          <div className="row">

            {stats.map((item, index) => (

              <div
                className="col-lg-3 col-md-6 col-6"
                key={index}
              >

                <div className="single-stat">

                  <i className={`${item.icon} stat-icon`}></i>

                  <h2>{item.number}</h2>

                  <p>{item.title}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default StatCard;