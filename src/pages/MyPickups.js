import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function MyPickups() {

  const [pickups, setPickups] = useState([]);

  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser).id : null;
  const token = localStorage.getItem("token");

  useEffect(() => {

    if (!userId || !token) return;

    const fetchMyPickups = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8083/api/pickups/user/${userId}`,
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

    fetchMyPickups();

  }, [userId, token]);

  // 🎨 Status badge color
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
        <div className="card shadow">
          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">My Pickup Requests</h4>
          </div>

          <div className="card-body">

            {pickups.length === 0 ? (
              <div className="alert alert-info text-center">
                No pickup requests found.
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>E-Waste Type</th>
                      <th>Quantity</th>
                      <th>Pickup Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pickups.map((p) => (
                      <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.ewaste?.ewasteType || "—"}</td>
                        <td>{p.ewaste?.quantity || "—"}</td>
                        <td>{p.pickupDate}</td>
                        <td>
                          <span className={getStatusBadge(p.status)}>
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default MyPickups;
