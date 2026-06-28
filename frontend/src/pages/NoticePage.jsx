import { useEffect, useMemo, useState } from "react";
import API from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoticeStats from "../components/notices/NoticeStats";
import NoticeHero from "../components/notices/NoticeHero";
import NoticeFilters from "../components/notices/NoticeFilters";
import NoticeList from "../components/notices/NoticeList";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await API.get("/notices");

      console.log("Notice Response:", res.data);

      if (res.data.success) {
        setNotices(res.data.data);
      } else {
        setNotices([]);
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
      setNotices([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredNotices = useMemo(() => {
    if (!Array.isArray(notices)) return [];

    return notices.filter((notice) => {
      const matchesSearch =
        notice.title?.toLowerCase().includes(search.toLowerCase()) ||
        notice.description?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "" || notice.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [notices, search, category]);

  return (
    <>
      <Navbar />

      <NoticeHero />
<NoticeStats notices={notices} />
      <section className="py-5">
        <div className="container">
          <NoticeFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />

          {loading ? (
            <div className="text-center py-5">
              <div
                className="spinner-border text-primary"
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            <NoticeList notices={filteredNotices} />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NoticePage;