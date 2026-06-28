import { CalendarEventFill, TagFill } from "react-bootstrap-icons";

const NoticeModal = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">

            <div className="modal-header bg-primary text-white">

              <h4 className="modal-title fw-bold">
                {notice.title}
              </h4>

              <button
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>

            </div>

            <div className="modal-body p-4">

              <div className="mb-3">

                <span className="badge bg-primary me-2">
                  <TagFill className="me-1" />
                  {notice.category}
                </span>

                <span className="text-muted">

                  <CalendarEventFill className="me-2" />

                  {new Date(
                    notice.createdAt
                  ).toLocaleDateString()}

                </span>

              </div>

              <hr />

              <p
                className="fs-5"
                style={{
                  lineHeight: "1.9",
                }}
              >
                {notice.description}
              </p>

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-primary px-4"
                onClick={onClose}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeModal;