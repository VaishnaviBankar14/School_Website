import { FileEarmarkTextFill } from "react-bootstrap-icons";

const EmptyNotice = () => {
  return (
    <div
      className="text-center py-5"
      data-aos="zoom-in"
    >
      <div
        className="mx-auto mb-4 rounded-circle bg-light d-flex justify-content-center align-items-center shadow"
        style={{
          width: "140px",
          height: "140px",
        }}
      >
        <FileEarmarkTextFill
          size={65}
          className="text-primary"
        />
      </div>

      <h2 className="fw-bold mb-3">
        No Notices Available
      </h2>

      <p
        className="text-muted mx-auto"
        style={{
          maxWidth: "500px",
        }}
      >
        There are currently no notices available.
        Please check back later for announcements,
        events, examinations and important updates.
      </p>
    </div>
  );
};

export default EmptyNotice;