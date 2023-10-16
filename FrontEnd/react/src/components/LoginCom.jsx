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
        navigate("/dosen/insert"); // Navigate to home page
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-user"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Login
      </button>
    </form>
  );
}

export default LoginCom;
