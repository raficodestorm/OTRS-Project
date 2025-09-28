import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import './Admins.css'; 
// import "./BusManagement.css"; // optional css file

const Buses = () => {
  // Sample bus data (you can replace with API data)
  const [buses, setBuses] = useState([
    {
      id: 1,
      busNumber: "DHK-1234",
      busName: "Green Line",
      capacity: 40,
      route: "Dhaka → Chattogram",
      departureTime: "08:00",
      arrivalTime: "14:00",
      driverName: "Mr. Rahman",
    },
    {
      id: 2,
      busNumber: "CTG-5678",
      busName: "Hanif Enterprise",
      capacity: 45,
      route: "Chattogram → Dhaka",
      departureTime: "09:00",
      arrivalTime: "15:30",
      driverName: "Mr. Karim",
    },
    {
      id: 3,
      busNumber: "SYT-5679",
      busName: "Soudia Enterprise",
      capacity: 45,
      route: "Sylhet → Dhaka",
      departureTime: "09:00",
      arrivalTime: "15:30",
      driverName: "Mr. Rasel",
    },
    {
      id: 4,
      busNumber: "BRL-5678",
      busName: "Hanif Enterprise",
      capacity: 45,
      route: "Borisal → Dhaka",
      departureTime: "09:00",
      arrivalTime: "15:30",
      driverName: "Mr. Amin",
    },
  ]);

  const [editingBus, setEditingBus] = useState(null);

  // Delete a bus
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this bus?")) {
      setBuses(buses.filter((bus) => bus.id !== id));
    }
  };

  // Start editing
  const handleEdit = (bus) => {
    setEditingBus(bus);
  };

  // Save edited bus
  const handleSave = () => {
    setBuses(
      buses.map((bus) =>
        bus.id === editingBus.id ? editingBus : bus
      )
    );
    setEditingBus(null);
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingBus(null);
  };

  // Handle input change while editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingBus((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bus-management-page p-4">
      <h1 className="mb-4">🚌 All Buses</h1>
      <p className="lead text-muted">
        Manage all registered buses. You can edit or remove buses from here.
      </p>

      <div className="card shadow-sm p-2 mt-4">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th className="thb">Bus Number</th>
              <th className="thb">Bus Name</th>
              <th className="thb">Capacity</th>
              <th className="thb">Route</th>
              <th className="thb">Departure</th>
              <th className="thb">Arrival</th>
              <th className="thb">Driver</th>
              <th className="text-center thb" >Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.busNumber}</td>
                <td>{bus.busName}</td>
                <td>{bus.capacity}</td>
                <td>{bus.route}</td>
                <td>{bus.departureTime}</td>
                <td>{bus.arrivalTime}</td>
                <td>{bus.driverName}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(bus)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(bus.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
        {editingBus && (
          <div className="edit-form mt-4 p-4 border rounded bg-light">
            <h5>Edit Bus: {editingBus.busNumber}</h5>
            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="busName"
                  value={editingBus.busName}
                  onChange={handleChange}
                  placeholder="Bus Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  name="capacity"
                  value={editingBus.capacity}
                  onChange={handleChange}
                  placeholder="Capacity"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="route"
                  value={editingBus.route}
                  onChange={handleChange}
                  placeholder="Route"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="time"
                  className="form-control"
                  name="departureTime"
                  value={editingBus.departureTime}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="time"
                  className="form-control"
                  name="arrivalTime"
                  value={editingBus.arrivalTime}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="driverName"
                  value={editingBus.driverName}
                  onChange={handleChange}
                  placeholder="Driver Name"
                />
              </div>
            </div>
            <div className="mt-3">
              <button className="btn btn-success me-2" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buses;
