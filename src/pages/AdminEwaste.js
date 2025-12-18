import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminEwaste() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [ewasteType, setEwasteType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const addEwaste = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8083/api/ewaste/add",
        { ewasteType, quantity, description },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("E-waste item added successfully");
      navigate("/dashboard");   // redirect after success

    } catch (error) {
      alert("Error adding e-waste");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div className="card shadow">
              <div className="card-header bg-danger text-white">
                <h4 className="mb-0">Add E-Waste Item (Admin)</h4>
              </div>

              <div className="card-body">
                <form onSubmit={addEwaste}>

                  <div className="mb-3">
                    <label className="form-label">E-Waste Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Laptop, Mobile, Battery"
                      value={ewasteType}
                      onChange={(e) => setEwasteType(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Description (optional)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="3"
                    />
                  </div>

                  <button className="btn btn-danger w-100">
                    Add E-Waste
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

export default AdminEwaste;
