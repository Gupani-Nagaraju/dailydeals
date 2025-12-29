import React from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email address"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <span
              className="forgot-link"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don’t have an account?
            <span
              className="signup-link"
              onClick={() => navigate("/signup")}
            >
              {" "}Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
