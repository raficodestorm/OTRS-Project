import React, { useState } from "react";
import './Admins.css'; 

const BookingManagement = () => {
  // Dummy data (later replace with API data)
  const [bookings, setBookings] = useState([
    {
      id: 1,
      passengerName: "S A Rafi",
      route: "Dhaka → Chittagong",
      date: "2025-09-30",
      status: "Pending",
      busAssigned: null,
    },
    {
      id: 2,
      passengerName: "Anis Khan",
      route: "Dhaka → Sylhet",
      date: "2025-10-01",
      status: "Confirmed",
      busAssigned: "Bus-101",
    },
    {
      id: 3,
      passengerName: "Rishad",
      route: "CTG → Sylhet",
      date: "2025-10-01",
      status: "Confirmed",
      busAssigned: "Bus-101",
    },
  ]);

  const [availableBuses] = useState(["Bus-101", "Bus-102", "Bus-103"]);

  // Assign bus to booking
  const handleAssignBus = (id, bus) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, busAssigned: bus, status: "Confirmed" } : b
    );
    setBookings(updated);
    alert(`Assigned ${bus} to booking #${id}`);
  };

  // Cancel booking
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      const updated = bookings.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      );
      setBookings(updated);
    }
  };

  // Refund booking
  const handleRefund = (id) => {
    if (window.confirm("Confirm refund for this booking?")) {
      const updated = bookings.map((b) =>
        b.id === id ? { ...b, status: "Refunded" } : b
      );
      setBookings(updated);
    }
  };

  return (
    <div className="booking-management-container">
      <h2>Booking Management</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Passenger</th>
            <th>Route</th>
            <th>Date</th>
            <th>Status</th>
            <th>Bus Assigned</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.passengerName}</td>
                <td>{booking.route}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.busAssigned ? (
                    booking.busAssigned
                  ) : (
                    <select
                      onChange={(e) =>
                        handleAssignBus(booking.id, e.target.value)
                      }
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Assign Bus
                      </option>
                      {availableBuses.map((bus, index) => (
                        <option key={index} value={bus}>
                          {bus}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="text-center">
                  {booking.status !== "Cancelled" &&
                    booking.status !== "Refunded" && (
                      <>
                        <button
                          className="cancel-btn"
                          onClick={() => handleCancel(booking.id)}
                        >
                          Cancel
                        </button>
                        <button
                          className="refund-btn"
                          onClick={() => handleRefund(booking.id)}
                        >
                          Refund
                        </button>
                      </>
                    )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No bookings available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
