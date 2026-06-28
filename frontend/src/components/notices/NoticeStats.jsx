import {
  MegaphoneFill,
  CalendarEventFill,
  CollectionFill,
} from "react-bootstrap-icons";

const NoticeStats = ({ notices }) => {
  const totalNotices = notices.length;

  const categories = [
    ...new Set(
      notices
        .map((notice) => notice.category)
        .filter(Boolean)
    ),
  ];

  const latestDate =
    notices.length > 0
      ? new Date(
          Math.max(
            ...notices.map((n) => new Date(n.createdAt))
          )
        ).toLocaleDateString()
      : "--";

  const stats = [
    {
      title: "Total Notices",
      value: totalNotices,
      icon: <MegaphoneFill size={35} />,
      color: "primary",
    },
    {
      title: "Categories",
      value: categories.length,
      icon: <CollectionFill size={35} />,
      color: "success",
    },
    {
      title: "Latest Update",
      value: latestDate,
      icon: <CalendarEventFill size={35} />,
      color: "warning",
    },
  ];

  return (
    <section className="container mb-5">
      <div className="row g-4">

        {stats.map((item, index) => (
          <div
            className="col-md-4"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div
              className="card border-0 shadow-lg h-100 rounded-4"
            >
              <div className="card-body d-flex align-items-center">

                <div
                  className={`bg-${item.color} text-white rounded-circle d-flex justify-content-center align-items-center me-3`}
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h6 className="text-muted mb-1">
                    {item.title}
                  </h6>

                  <h3 className="fw-bold mb-0">
                    {item.value}
                  </h3>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default NoticeStats;