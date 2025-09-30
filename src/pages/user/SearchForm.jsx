// src/pages/BusSearch.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

const BusSearch = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate with query params
    navigate(
      `/results?from=${searchData.from}&to=${searchData.to}&date=${searchData.date}`
    );
  };

  return (
    <div className="card shadow-sm p-4 rounded-3">
      <h5 className="fw-bold mb-3 text-center" style={{ color: "#220901" }}>
        Find Your Bus
      </h5>
      <form onSubmit={handleSubmit}>
        {/* From */}
        <div className="mb-3">
          <label className="form-label fw-semibold">From</label>
          <input
            type="text"
            name="from"
            className="form-control rounded-3"
            placeholder="Enter departure city..."
            value={searchData.from}
            onChange={handleChange}
            required
          />
        </div>

        {/* To */}
        <div className="mb-3">
          <label className="form-label fw-semibold">To</label>
          <input
            type="text"
            name="to"
            className="form-control rounded-3"
            placeholder="Enter destination city..."
            value={searchData.to}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Date of Journey</label>
          <input
            type="date"
            name="date"
            className="form-control rounded-3"
            value={searchData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <div className="d-grid ">
          <button type="submit" className="btn bus-src rounded-3 fw-semibold">
            Search Buses
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusSearch;
