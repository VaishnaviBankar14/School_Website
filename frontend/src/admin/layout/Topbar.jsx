function Topbar() {
  const today = new Date();

  return (
    <div className="admin-topbar">

      <div>
        <h4 className="mb-0">
          Welcome, Admin 👋
        </h4>

        <small className="text-muted">
          {today.toDateString()}
        </small>
      </div>

      <div className="d-flex align-items-center gap-3">

        <button className="btn btn-light">
          🔔
        </button>

        <div className="fw-bold">
          Administrator
        </div>

      </div>

    </div>
  );
}

export default Topbar;