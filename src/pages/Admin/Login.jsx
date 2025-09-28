import React, { useState } from "react";
import "./Admins.css"; // custom styles

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // 👉 authentication logic here
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      {/* Background */}
      <div className="login-bg">
        <img src="/assets/image/bus-bg.jpg" alt="Bus Background" />
        <div className="login-overlay"></div>
      </div>

      {/* Card */}
      <div className="login-card card shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-primary mb-4 fw-bold">
            Bus Reservation System
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded-3"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold rounded-3"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-muted mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="fw-semibold text-decoration-none text-primary">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
