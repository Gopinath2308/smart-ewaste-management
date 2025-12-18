import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const roleBadge =
    user?.role === "ADMIN" ? "bg-danger" : "bg-success";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#0d1b2a",   // solid dark blue
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
      }}
    >
      <div className="container-fluid px-4">

        {/* Brand */}
        <span
          className="navbar-brand fw-bold"
          style={{
            cursor: "pointer",
            fontSize: "1.4rem",
            color: "#ffffff"
          }}
          onClick={() => navigate("/dashboard")}
        >
          ♻️ Smart E-Waste Management
        </span>

        {/* Right side */}
        {user && (
          <div className="d-flex align-items-center gap-3">

            <span className="text-light fw-semibold">
              {user.name}
            </span>

            <span className={`badge ${roleBadge}`}>
              {user.role}
            </span>

            <button
              className="btn btn-outline-light btn-sm px-3"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
