import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./ContactMessages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactMessages() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const res = await api.get("/contact/all");

      setContacts(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load contact messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/contact/${id}`);

      fetchContacts();
    } catch (error) {
      console.error(error);
      alert("Failed to delete message");
    }
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const value = search.toLowerCase();

      return (
        contact.name.toLowerCase().includes(value) ||
        contact.email.toLowerCase().includes(value)
      );
    });
  }, [contacts, search]);

  return (
    <div className="container-fluid mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Contact Messages</h4>
        </div>

        <div className="card-body">

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Search by Name or Email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border"></div>
            </div>
          ) : filteredContacts.length === 0 ? (
            <h5 className="text-center">
              No Contact Messages Found
            </h5>
          ) : (
            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle">

                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredContacts.map((contact) => (

                    <tr key={contact.id}>

                      <td>{contact.name}</td>

                      <td>{contact.email}</td>

                      <td>{contact.subject}</td>

                      <td style={{ maxWidth: "300px" }}>
                        {contact.message}
                      </td>

                      <td>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteMessage(contact.id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ContactMessages;