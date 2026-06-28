import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      // Save JWT
      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            Admin Login
          </h2>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;