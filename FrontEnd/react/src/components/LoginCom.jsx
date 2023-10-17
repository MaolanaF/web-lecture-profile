import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function LoginCom() {
  const navigate = useNavigate(); // Use useNavigate
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3100/login`,
        formData
      ); // Replace with your API endpoint
      console.log(response.data);
      console.log(response.data[0].username);
      if (response.data) {
        Cookies.set("username", response.data[0].username, { expires: 1 }); // Save username to cookie with expiry of 1 day
        Cookies.set("role", response.data[0].role, { expires: 1 });
        navigate("/dosen"); // Navigate to home page
      } else {
        console.log("Tidak Ada User");
      }
      // You can perform actions like redirecting the user after successful login
    } catch (err) {
      setError("Login failed. Please check your credentials."); // Handle errors
      console.error("Login failed:", err);
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: 500, width: 400, border: "1px solid black", borderRadius: "5px", backgroundColor:" #f2f2f2" }}>
    <div className="text-center">
      <h1 className="mb-5" style={{ color: "#00008B" }}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person" />
            </span>
            <input
              type="text"
              className="form-control form-control-user"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-lock" />
            </span>
            <input
              type="password"
              className="form-control form-control-user"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-warning btn-user btn-block mt-5"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

export default LoginCom;