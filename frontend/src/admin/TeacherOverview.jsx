import React from "react";

const TeacherOverview = ({ stats }) => {
  return (
    <div className="card shadow-sm border-0 h-100 rounded-4">

      <div className="card-header bg-primary text-white rounded-top-4">
        <h5 className="mb-0">
          <i className="bi bi-person-workspace me-2"></i>
          Teacher Applications Overview
        </h5>
      </div>

      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>
            <i className="bi bi-people-fill text-primary me-2"></i>
            Total Teachers
          </span>

          <span className="fw-bold fs-5">
            {stats.totalTeachers}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            Approved Teachers
          </span>

          <span className="badge bg-success fs-6">
            {stats.teacherStatus.approved}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>
            <i className="bi bi-hourglass-split text-warning me-2"></i>
            Pending Teachers
          </span>

          <span className="badge bg-warning text-dark fs-6">
            {stats.teacherStatus.pending}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>
            <i className="bi bi-x-circle-fill text-danger me-2"></i>
            Rejected Teachers
          </span>

          <span className="badge bg-danger fs-6">
            {stats.teacherStatus.rejected}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-3">

          <span className="fw-semibold">
            <i className="bi bi-calendar-event me-2 text-info"></i>
            Applications This Month
          </span>

          <span className="badge bg-info fs-6">
            {stats.applicationsThisMonth}
          </span>

        </div>

      </div>

    </div>
  );
};

export default TeacherOverview;