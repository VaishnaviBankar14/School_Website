import { useState } from "react";
import api from "../../api/axios";

function ContactSection() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      await api.post("/contact", form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {

      alert("Failed to send message.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="py-5">

      <div className="container">

        <div className="row g-5">

          {/* Contact Form */}

          <div className="col-lg-7">

            <div className="card shadow border-0">

              <div className="card-header bg-primary text-white">

                <h3 className="mb-0">
                  Send us a Message
                </h3>

              </div>

              <div className="card-body">

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label>Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email</label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Subject</label>

                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">

                    <label>Message</label>

                    <textarea
                      rows="5"
                      className="form-control"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <button
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                </form>

              </div>

            </div>

          </div>

          {/* Contact Details */}

          <div className="col-lg-5">

            <div className="card shadow border-0 h-100">

              <div className="card-header bg-warning">

                <h3 className="mb-0">
                  Contact Information
                </h3>

              </div>

              <div className="card-body">

                <h5>📍 Address</h5>

                <p>
                  Bright Future Public School<br />
                  Pune, Maharashtra
                </p>

                <hr />

                <h5>☎ Phone</h5>

                <p>+91 9876543210</p>

                <hr />

                <h5>✉ Email</h5>

                <p>school@gmail.com</p>

                <hr />

                <h5>🕒 Office Hours</h5>

                <p>
                  Monday - Saturday<br />
                  8:00 AM – 4:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;