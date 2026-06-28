import { Search, FunnelFill } from "react-bootstrap-icons";

const NoticeFilters = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {
  return (
    <div
      className="card border-0 shadow-lg rounded-4 mb-5"
      data-aos="fade-up"
    >
      <div className="card-body p-4">

        <div className="d-flex align-items-center mb-4">
          <FunnelFill className="text-primary me-2" size={22} />

          <h4 className="fw-bold mb-0">
            Search Notices
          </h4>
        </div>

        <div className="row g-3">

          {/* Search */}

          <div className="col-lg-8">

            <div className="input-group">

              <span className="input-group-text bg-white">
                <Search />
              </span>

              <input
                type="text"
                className="form-control py-3"
                placeholder="Search by title or description..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>

          {/* Category */}

          <div className="col-lg-4">

            <select
              className="form-select py-3"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option value="">
                All Categories
              </option>

              <option value="General">
                General
              </option>

              <option value="Exam">
                Exam
              </option>

              <option value="Holiday">
                Holiday
              </option>

              <option value="Event">
                Event
              </option>

              <option value="Admission">
                Admission
              </option>

            </select>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NoticeFilters;