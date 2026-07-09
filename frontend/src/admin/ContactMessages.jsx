import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import "./ContactMessages.css";
import AdminLayout from "./layout/AdminLayout";

function ContactMessages() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

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
    <AdminLayout>
      <div className="container-fluid mt-3">

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
  {contact.message.length > 40
    ? contact.message.substring(0, 40) + "..."
    : contact.message}
</td>
                        <td>
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>

                       <td>

  <button
    className="btn btn-primary btn-sm me-2"
    onClick={() => setSelectedMessage(contact)}
  >
    <i className="bi bi-eye-fill"></i> View
  </button>

  <button
    className="btn btn-danger btn-sm"
    onClick={() => deleteMessage(contact.id)}
  >
    <i className="bi bi-trash-fill"></i> Delete
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

      {selectedMessage && (
  <div
    className="modal fade show"
    style={{
      display: "block",
      background: "rgba(0,0,0,0.5)",
    }}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">

      <div className="modal-content">

        <div className="modal-header bg-primary text-white">

          <h5 className="modal-title">
            Contact Message
          </h5>

          <button
            className="btn-close btn-close-white"
            onClick={() => setSelectedMessage(null)}
          ></button>

        </div>

        <div className="modal-body">

          <p>
            <strong>Name :</strong>
            {" "}
            {selectedMessage.name}
          </p>

          <p>
            <strong>Email :</strong>
            {" "}
            {selectedMessage.email}
          </p>

          <p>
            <strong>Subject :</strong>
            {" "}
            {selectedMessage.subject}
          </p>

          <p>
            <strong>Received :</strong>
            {" "}
            {new Date(
              selectedMessage.createdAt
            ).toLocaleDateString()}
          </p>

          <hr />

          <h6>Message</h6>

          <div
            className="border rounded p-3 bg-light"
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {selectedMessage.message}
          </div>

        </div>

        <div className="modal-footer">

          <a
            href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(
              selectedMessage.subject
            )}`}
            className="btn btn-success"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            Reply via Email
          </a>

          <button
            className="btn btn-secondary"
            onClick={() => setSelectedMessage(null)}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  </div>
)}

    </AdminLayout>
  );
}

export default ContactMessages;