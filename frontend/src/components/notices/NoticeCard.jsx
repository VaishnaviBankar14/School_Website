import {
  CalendarEventFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

const NoticeCard = ({ notice, onReadMore }) => {
  const isNew =
    (new Date() - new Date(notice.createdAt)) /
      (1000 * 60 * 60 * 24) <
    7;

  return (
    <div
      className="card border-0 shadow h-100 rounded-4 overflow-hidden"
      data-aos="fade-up"
      style={{
        borderLeft: "6px solid #0d6efd",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 1rem 3rem rgba(0,0,0,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="card-body d-flex flex-column">
        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-primary px-3 py-2">
            {notice.category || "General"}
          </span>

          {isNew && (
            <span className="badge bg-danger">
              NEW
            </span>
          )}
        </div>

        {/* Title */}

        <h4 className="fw-bold mb-3">
          {notice.title}
        </h4>

        {/* Description */}

        <p
          className="text-muted flex-grow-1"
          style={{
            minHeight: "90px",
          }}
        >
          {notice.description.length > 120
            ? notice.description.substring(0, 120) + "..."
            : notice.description}
        </p>

        <hr />

        {/* Footer */}

        <div className="d-flex justify-content-between align-items-center">
          <small className="text-secondary">
            <CalendarEventFill className="me-2" />

            {new Date(
              notice.createdAt
            ).toLocaleDateString()}
          </small>

          <button
            className="btn btn-outline-primary btn-sm rounded-pill"
            onClick={onReadMore}
          >
            Read More

            <ArrowRightCircleFill className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;