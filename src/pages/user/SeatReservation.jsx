// SeatReservation.js
import React, { useState } from "react";

import "./User.css";

const rows = 10; // total rows (A, B, C ...)
const cols = 4; // 4 seats per row

function SeatReservation() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Generate seat labels like A1, A2, A3, A4
  const generateSeats = () => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
      const rowLabel = String.fromCharCode(65 + i); // A, B, C ...
      for (let j = 1; j <= cols; j++) {
        seats.push(`${rowLabel}${j}`);
      }
    }
    return seats;
  };

  const seats = generateSeats();

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="bus-container">
      {/* Top row: Door + Driver */}
      <div className="bus-front">
        <div className="door">Door</div>
        <div className="driver">Driver</div>
      </div>

      {/* Seat Layout */}
      <div className="seats">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const rowLabel = String.fromCharCode(65 + rowIndex);
          return (
            <div key={rowLabel} className="seat-row">
              {/* Left side */}
              <div
                className={`seat ${
                  selectedSeats.includes(`${rowLabel}1`) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(`${rowLabel}1`)}
              >
                {rowLabel}1
              </div>
              <div
                className={`seat ${
                  selectedSeats.includes(`${rowLabel}2`) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(`${rowLabel}2`)}
              >
                {rowLabel}2
              </div>

              {/* Space for aisle */}
              <div className="aisle"></div>

              {/* Right side */}
              <div
                className={`seat ${
                  selectedSeats.includes(`${rowLabel}3`) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(`${rowLabel}3`)}
              >
                {rowLabel}3
              </div>
              <div
                className={`seat ${
                  selectedSeats.includes(`${rowLabel}4`) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(`${rowLabel}4`)}
              >
                {rowLabel}4
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="summary">
        <h4>Selected Seats:</h4>
        <p>{selectedSeats.join(", ") || "None"}</p>
      </div>
    </div>
  );
}

export default SeatReservation;











// SeatReservation.js
import React, { useState } from "react";
import "./SeatReservation.css";

const seatsData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  status: i % 5 === 0 ? "booked" : "available", // example: every 5th seat booked
}));

function SeatReservation() {
  const [seats, setSeats] = useState(seatsData);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boarding, setBoarding] = useState("");
  const [dropping, setDropping] = useState("");
  const [mobile, setMobile] = useState("");

  const toggleSeat = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id
          ? {
              ...seat,
              status: seat.status === "available" ? "selected" : "available",
            }
          : seat
      )
    );

    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Seats: ${selectedSeats.join(", ")}\nBoarding: ${boarding}\nDropping: ${dropping}\nMobile: ${mobile}`
    );
  };

  return (
    <div className="seat-reservation-container">
      {/* Seat Legend */}
      <div className="legend">
        <span className="seat booked">Booked</span>
        <span className="seat blocked">Blocked</span>
        <span className="seat available">Available</span>
        <span className="seat selected">Selected</span>
        <span className="seat soldM">Sold (M)</span>
        <span className="seat soldF">Sold (F)</span>
      </div>

      <div className="seat-layout">
        {/* Left side: Seats */}
        <div className="seats-grid">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.status}`}
              onClick={() =>
                seat.status === "available" || seat.status === "selected"
                  ? toggleSeat(seat.id)
                  : null
              }
            >
              {seat.id}
            </div>
          ))}
        </div>

        {/* Right side: Form */}
        <div className="reservation-form">
          <h5>BOARDING/DROPPING:</h5>
          <select
            value={boarding}
            onChange={(e) => setBoarding(e.target.value)}
          >
            <option value="">Select boarding point</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
          </select>

          <select
            value={dropping}
            onChange={(e) => setDropping(e.target.value)}
          >
            <option value="">Select dropping point</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
          </select>

          <div className="seat-info">
            <h5>SEAT INFORMATION:</h5>
            <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
            <p>Service Fee: ৳ 0</p>
            <p>PCW Charge: ৳ 0</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Mobile Number*"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SeatReservation;
