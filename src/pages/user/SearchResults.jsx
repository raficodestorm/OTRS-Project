// src/pages/SearchResults.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const dummyBuses = [
  {
    id: 1,
    busNumber: "BD-101",
    busName: "Green Line Express",
    from: "Dhaka",
    to: "Chittagong",
    time: "08:00 AM",
    seats: 40,
    price: 500,
  },
  {
    id: 2,
    busNumber: "BD-202",
    busName: "Shohag Elite",
    from: "Dhaka",
    to: "Khulna",
    time: "09:30 AM",
    seats: 35,
    price: 650,
  },
  {
    id: 3,
    busNumber: "BD-303",
    busName: "Ena Transport",
    from: "Sylhet",
    to: "Dhaka",
    time: "07:00 PM",
    seats: 50,
    price: 550,
  },
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [searchData, setSearchData] = useState({
    from: queryParams.get("from") || "",
    to: queryParams.get("to") || "",
    date: queryParams.get("date") || "",
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Filter buses based on search
    const filtered = dummyBuses.filter(
      (bus) =>
        bus.from.toLowerCase().includes(searchData.from.toLowerCase()) &&
        bus.to.toLowerCase().includes(searchData.to.toLowerCase())
    );
    setResults(filtered);
  }, [searchData]);

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/results?from=${searchData.from}&to=${searchData.to}&date=${searchData.date}`
    );
  };

  return (
    <div className="container mt-4 min-vh-100">
      {/* Horizontal Search Form */}
      <form
        onSubmit={handleSubmit}
        className="row g-2 align-items-center bg-light p-3 rounded-3 shadow-sm"
      >
        <div className="col-md-3">
          <input
            type="text"
            name="from"
            className="form-control rounded-3"
            placeholder="From"
            value={searchData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="to"
            className="form-control rounded-3"
            placeholder="To"
            value={searchData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            name="date"
            className="form-control rounded-3"
            value={searchData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3 d-grid">
          <button
            type="submit"
            className="btn btn-danger rounded-3 fw-semibold"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results Table */}
      <div className="card mt-4 shadow-sm rounded-3">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Available Buses</h5>
          {results.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Bus No</th>
                    <th>Bus Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Seats</th>
                    <th>Price (BDT)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((bus) => (
                    <tr key={bus.id}>
                      <td>{bus.busNumber}</td>
                      <td>{bus.busName}</td>
                      <td>{bus.from}</td>
                      <td>{bus.to}</td>
                      <td>{bus.time}</td>
                      <td>{bus.seats}</td>
                      <td>{bus.price}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-danger rounded-3">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-muted">No buses found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
