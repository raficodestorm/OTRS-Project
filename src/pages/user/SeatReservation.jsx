// SeatReservation.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

const rows = 10; // total rows (A, B, C ...)
const cols = 4; // 4 seats per row
const seatPrice = 500;
const serviceFee = 0;   // you can adjust
const pcwCharge = 0;    // you can adjust

function SeatReservation() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boarding, setBoarding] = useState("");
  const [dropping, setDropping] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  // extra states for amounts
  const [fee, setFee] = useState(0);
  const [pcw, setPCW] = useState(0);
  const [total, setTotal] = useState(0);

  // Update amounts whenever seats change
  useEffect(() => {
    const seatCost = selectedSeats.length * seatPrice;
    const calcFee = serviceFee;
    const calcPCW = pcwCharge;
    const calcTotal = seatCost + calcFee + calcPCW;

    setFee(calcFee);
    setPCW(calcPCW);
    setTotal(calcTotal);
  }, [selectedSeats]);

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

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  const bookingData = {
    selectedSeats,
    total,
    boarding,
    dropping,
    name,
    mobile,
  };

  navigate("/payment", { state: { bookingData } });
};

  const playHorn = () => {
    const audio = new Audio("/assests/sound/horn.m4a");
    audio.play();
  };

  return (
    <div className="container seat-reservation">
      <div className="row">
        {/* LEFT SIDE - Seat Layout */}
        <div className="col-md-6">
          <div className="col-md-12 legend">
            <span className="seat soldM">Booked (M)</span>
            <span className="seat soldF">Booked (F)</span>
            <span className="seat blocked">Blocked</span>
            <span className="seat available">Available</span>
            <span className="seat selected">Selected</span>
          </div>

          <div className="bus-container">
            {/* Top row: Door + Driver */}
            <div className="bus-front">
              <div className="door">Door</div>
              <div
                className="driver"
                onClick={playHorn}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-84v-120q-60-12-102-54t-54-102H164q12 109 89.5 185T440-164Zm80 0q109-12 186.5-89.5T796-440H676q-12 60-54 102t-102 54v120ZM164-520h116l120-120h160l120 120h116q-15-121-105-200.5T480-800q-121 0-211 79.5T164-520Z" />
                </svg>
              </div>
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

                    {/* Aisle */}
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
        </div>

        {/* RIGHT SIDE - Reservation Form */}
        <div className="col-md-6">
          <div className="reservation-form">
            <form onSubmit={handleSubmit}>
              <h4>SEAT INFORMATION:</h4>
              <span>Selected Seats:</span>
              <input
                type="text"
                value={selectedSeats.join(", ") || "None"}
                readOnly
              />
              <span style={{ display: "block" }}>Per seat: ৳ {seatPrice}</span><br />
              <span>Service Fee:</span>
              <input type="text" value={`৳ ${fee}`} readOnly />
              <span>PCW Charge:</span>
              <input type="text" value={`৳ ${pcw}`} readOnly />
              <span>Total amount:</span>
              <input type="text" value={`৳ ${total}`} readOnly />

              <h4 style={{ marginTop: "3rem" }}>BOARDING/DROPPING:</h4>
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

              <input
                type="text"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <button
                type="submit"
                className="submit-btn"
                onClick={playHorn}
                style={{ cursor: "pointer" }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatReservation;
