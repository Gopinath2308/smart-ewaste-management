import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AdminDashboard() {

  const [pickups, setPickups] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {

    const fetchAllPickups = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8083/api/admin/pickups/all",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setPickups(res.data);
      } catch (error) {
        alert("Error loading pickup requests");
      }
    };

    fetchAllPickups();

  }, [token]);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:8083/api/admin/pickups/update-status/${id}?status=${status}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Status updated");
      window.location.reload();
    } catch (error) {
      alert("Error updating status");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "REQUESTED":
        return "badge bg-warning text-dark";
      case "ASSIGNED":
        return "badge bg-primary";
      case "PICKED":
        return "badge bg-info text-dark";
      case "RECYCLED":
        return "badge bg-success";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Admin Dashboard</h3>
          <button
            className="btn btn-danger"
            onClick={() => window.location.href = "/admin/ewaste"}
          >
            + Add E-Waste Item
          </button>
        </div>

        <div className="card shadow">
          <div className="card-body">

            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>E-Waste</th>
                    <th>Pickup Date</th>
                    <th>Status</th>
                    <th>Update Status</th>
                  </tr>
                </thead>

                <tbody>
                  {pickups.map(p => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.user?.name}</td>
                      <td>{p.ewaste?.ewasteType}</td>
                      <td>{p.pickupDate}</td>
                      <td>
                        <span className={getStatusBadge(p.status)}>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          value={p.status}
                          onChange={(e) => updateStatus(p.id, e.target.value)}
                        >
                          <option value="REQUESTED">REQUESTED</option>
                          <option value="ASSIGNED">ASSIGNED</option>
                          <option value="PICKED">PICKED</option>
                          <option value="RECYCLED">RECYCLED</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {pickups.length === 0 && (
                <div className="alert alert-info text-center">
                  No pickup requests available.
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default AdminDashboard;
