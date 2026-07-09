import { useState } from "react";
import axios from "axios";

const TeacherApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    subject: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

 const handleCertificates = (e) => {
  const files = Array.from(e.target.files);

  console.log("Selected files:", files);
  console.log("Number of selected files:", files.length);

  setCertificates(files);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

     if (resume) {
  data.append("resume", resume);
}

certificates.forEach((file) => {
  data.append("certificates", file);
});
      await axios.post(
        "http://localhost:5000/api/teachers/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Application submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        qualification: "",
        experience: "",
        subject: "",
        coverLetter: "",
      });

      setResume(null);
setCertificates([]);

document.getElementById("resume").value = "";
document.getElementById("certificates").value = "";
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit application.");
    }

    setLoading(false);
  };

  return (
    <section id="applicationForm" className="py-5 bg-light">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Apply for a Teaching Position
          </h2>

          <p className="text-muted">
            Fill out the application form below and we'll get back to you soon.
          </p>
        </div>

        <div className="row justify-content-center">

          <div
            className="col-lg-8"
            data-aos="zoom-in"
          >

            <div
              className="card border-0 shadow-lg"
              style={{ borderRadius: "20px" }}
            >

              <div className="card-body p-5">

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Phone
                      </label>

                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Qualification
                      </label>

                      <input
                        type="text"
                        name="qualification"
                        className="form-control"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Experience
                      </label>

                      <select
                        name="experience"
                        className="form-select"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Experience</option>
                        <option>Fresher</option>
                        <option>1-2 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold">
                        Resume
                      </label>

                      <input
                        id="resume"
                        type="file"
                        className="form-control"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResume}
                        required
                      />
                    </div>

                    <div className="col-12 mb-4">
  <label className="form-label fw-semibold">
    Certificates
  </label>

  <input
    id="certificates"
    type="file"
    className="form-control"
    accept=".pdf,.jpg,.jpeg,.png"
    multiple
    onChange={handleCertificates}
  />

  <small className="text-muted">
    You can upload multiple certificates.
  </small>

  {certificates.length > 0 && (
    <ul className="mt-2 mb-0">
      {certificates.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  )}
</div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold">
                        Cover Letter
                      </label>

                      <textarea
                        rows="5"
                        name="coverLetter"
                        className="form-control"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us why you'd like to join our school..."
                      />
                    </div>

                    {message && (
                      <div className="col-12 mb-3">
                        <div
                          className={`alert ${
                            message.includes("success")
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                        >
                          {message}
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        className="btn btn-primary btn-lg w-100"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TeacherApplicationForm;