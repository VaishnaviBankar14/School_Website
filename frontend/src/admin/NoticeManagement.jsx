import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./NoticeManagement.css";
import AdminLayout from "./layout/AdminLayout";

function NoticeManagement() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    try {
      setLoading(true);

      const res = await api.get("/notices");

      setNotices(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load notices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editId) {
      await api.put(`/notices/${editId}`, {
        title,
        description,
      });

      alert("Notice updated successfully");
    } else {
      await api.post("/notices", {
        title,
        description,
      });

      alert("Notice added successfully");
    }

    setTitle("");
    setDescription("");
    setEditId(null);

    fetchNotices();

  } catch (error) {
    console.error(error);
    alert("Operation failed");
  }
};

  const deleteNotice = async (id) => {
    if (!window.confirm("Delete this notice?")) return;

    try {
      await api.delete(`/notices/${id}`);

      fetchNotices();
    } catch (error) {
      console.error(error);
      alert("Failed to delete notice");
    }
  };

  const handleEdit = (notice) => {
  setEditId(notice.id);
  setTitle(notice.title);
  setDescription(notice.description);
};

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) =>
      notice.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [notices, search]);

  return (
    <AdminLayout>
      <div className="container-fluid mt-3">

        <div className="card shadow">

          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Notice Management</h3>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Notice Title</label>

                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Description</label>

                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

           <div className="d-flex gap-2">

  <button
    type="submit"
    className={`btn ${editId ? "btn-warning" : "btn-success"}`}
  >
    {editId ? "Update Notice" : "Add Notice"}
  </button>

  {editId && (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => {
        setEditId(null);
        setTitle("");
        setDescription("");
      }}
    >
      Cancel
    </button>
  )}

</div>

            </form>

            <hr />

            <input
              className="form-control mb-3"
              placeholder="Search Notice..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (
              <div className="text-center p-4">
                <div className="spinner-border"></div>
              </div>
            ) : filteredNotices.length === 0 ? (
              <h5 className="text-center">
                No Notices Found
              </h5>
            ) : (
              <table className="table table-bordered table-hover">

                <thead className="table-dark">
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredNotices.map((notice) => (

                    <tr key={notice.id}>

                      <td>{notice.title}</td>

                      <td>{notice.description}</td>

                      <td>
                        {new Date(notice.createdAt).toLocaleDateString()}
                      </td>
<td>

  <div className="d-flex gap-2">

    <button
      className="btn btn-warning btn-sm"
      onClick={() => handleEdit(notice)}
    >
      Edit
    </button>

    <button
      className="btn btn-danger btn-sm"
      onClick={() => deleteNotice(notice.id)}
    >
      Delete
    </button>

  </div>

</td>

                    </tr>

                  ))}

                </tbody>

              </table>
            )}

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default NoticeManagement;