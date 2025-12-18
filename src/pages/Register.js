import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8083/api/users/register", {
        name,
        email,
        password,
        address,
        phone,
        role: "USER"
      });

      alert("Registration successful! Please login.");
      navigate("/");

    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "420px" }}>
        
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={registerUser}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />

          <button className="btn btn-success w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/">Sign In</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
