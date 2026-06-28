import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LatestNotices.css";

function LatestNotices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/notices"
      );

      // Your backend returns { success, data }
      setNotices(res.data.data.slice(0, 3));

    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  return (
    <section className="latest-notices py-5">

      <div className="container">

        <div className="text-center mb-5">

          <h6 className="text-primary fw-bold">
            LATEST NEWS
          </h6>

          <h2 className="fw-bold">
            Latest Notices
          </h2>

        </div>

        <div className="row g-4">

          {notices.length === 0 ? (

            <div className="text-center">
              <p>No notices available.</p>
            </div>

          ) : (

            notices.map((notice) => (

              <div className="col-lg-4" key={notice.id}>

                <div className="notice-card">

                  <small className="text-primary">
                    {new Date(
                      notice.createdAt
                    ).toLocaleDateString()}
                  </small>

                  <h4 className="mt-2">
                    {notice.title}
                  </h4>

                  <p>
                    {notice.description}
                  </p>

                </div>

              </div>

            ))

          )}

        </div>

        <div className="text-center mt-5">

          <Link
            to="/notices"
            className="btn btn-primary"
          >
            View All Notices
          </Link>

        </div>

      </div>

    </section>
  );
}

export default LatestNotices;