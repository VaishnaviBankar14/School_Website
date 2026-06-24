const StatCard = ({ title, value }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5>{title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;