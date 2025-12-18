import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreatePickup() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser).id : null;

  const [ewasteList, setEwasteList] = useState([]);
  const [ewasteId, setEwasteId] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  // Load ewaste list
  useEffect(() => {
    const fetchEwaste = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8083/api/ewaste/all",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setEwasteList(res.data);
      } catch (error) {
        alert("Error loading e-waste list");
      }
    };

    fetchEwaste();
  }, [token]);

  const submitRequest = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8083/api/pickups/create",
        {
          user: { id: userId },
          ewaste: { id: ewasteId },
          pickupDate
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Pickup request submitted successfully");
      navigate("/dashboard");

    } catch (error) {
      alert("Error submitting pickup request");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              
              <div className="card-header bg-success text-white">
                <h4 className="mb-0">Create Pickup Request</h4>
              </div>

              <div className="card-body">
                <form onSubmit={submitRequest}>

                  <div className="mb-3">
                    <label className="form-label">Select E-Waste</label>
                    <select
                      className="form-select"
                      value={ewasteId}
                      onChange={(e) => setEwasteId(e.target.value)}
                      required
                    >
                      <option value="">Choose e-waste item</option>
                      {ewasteList.map(e => (
                        <option key={e.id} value={e.id}>
                          {e.ewasteType} (Qty: {e.quantity})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Pickup Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      required
                    />
                  </div>

                  <button className="btn btn-success w-100">
                    Submit Pickup Request
                  </button>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePickup;
