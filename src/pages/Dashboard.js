import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="mb-4">Dashboard</h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5>Create Pickup</h5>
                <button
                  className="btn btn-success mt-2"
                  onClick={() => navigate("/create-pickup")}
                >
                  New Request
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5>My Pickups</h5>
                <button
                  className="btn btn-info mt-2"
                  onClick={() => navigate("/my-pickups")}
                >
                  View
                </button>
              </div>
            </div>
          </div>

          {user?.role === "ADMIN" && (
            <div className="col-md-4">
              <div className="card shadow h-100 border-danger">
                <div className="card-body text-center">
                  <h5>Admin Panel</h5>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => navigate("/admin")}
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
