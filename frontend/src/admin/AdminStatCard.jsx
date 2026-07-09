function AdminStatCard({ title, value, color }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <h6 className="text-muted mb-3">
          {title}
        </h6>

        <h2
          className="fw-bold"
          style={{ color }}
        >
          {value}
        </h2>

      </div>
    </div>
  );
}

export default AdminStatCard;