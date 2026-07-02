import { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    parentName: "",
    email: "",
    phone: "",
    className: "",
    dob: "",
    gender: "",
    previousSchool: "",
    address: "",
  });

  const [files, setFiles] = useState({
    photo: null,
    birthCertificate: null,
    reportCard: null,
    transferCertificate: null,
    studentAadhar: null,
    parentAadhar: null,
    addressProof: null,
    otherDocument: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      Object.entries(files).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      await axios.post(
        "http://localhost:5000/api/admissions/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Admission application submitted successfully.");

      setFormData({
        fullName: "",
        parentName: "",
        email: "",
        phone: "",
        className: "",
        dob: "",
        gender: "",
        previousSchool: "",
        address: "",
      });

      setFiles({
        photo: null,
        birthCertificate: null,
        reportCard: null,
        transferCertificate: null,
        studentAadhar: null,
        parentAadhar: null,
        addressProof: null,
        otherDocument: null,
      });

      document
        .querySelectorAll('input[type="file"]')
        .forEach((input) => (input.value = ""));
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "Failed to submit admission application."
      );
    }

    setLoading(false);
  };

  return (
    <section id="admissionForm" className="py-5 bg-light">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Admission Application Form
          </h2>

          <p className="text-muted">
            Complete the form below to apply for admission.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div
              className="card border-0 shadow-lg"
              style={{ borderRadius: "20px" }}
            >

              <div className="card-body p-5">

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <h4 className="fw-bold mb-4">
                      Student Information
                    </h4>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Student Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Class Applying For
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Date of Birth
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Gender
                      </label>

                      <select
                        className="form-select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Previous School
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Parent / Guardian Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="parentName"
                        value={formData.parentName}
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
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold">
                        Address
                      </label>

                      <textarea
                        rows="3"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <hr className="my-4" />

                    <h4 className="fw-bold mb-4">
                      Upload Required Documents
                    </h4>
                                        <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Student Passport Photo
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="photo"
                        accept="image/*"
                        required
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Birth Certificate
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="birthCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Previous Report Card
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="reportCard"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Transfer Certificate
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="transferCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Student Aadhaar Card
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="studentAadhar"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Parent Aadhaar Card
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="parentAadhar"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Address Proof
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="addressProof"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Other Supporting Document
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        name="otherDocument"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </div>

                    {message && (
                      <div className="col-12 mb-3">
                        <div
                          className={`alert ${
                            message.includes("successfully")
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                        >
                          {message}
                        </div>
                      </div>
                    )}

                    <div className="col-12 mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        disabled={loading}
                      >
                        {loading
                          ? "Submitting..."
                          : "Submit Admission Application"}
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

export default AdmissionForm;