// PaymentPage.js
import React, { useState } from "react";
import "./User.css"; // reuse or create separate Payment.css
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function PaymentPageUser({ bookingData }) {
  const navigate = useNavigate();

  // Extract data from props (coming from SeatReservation)
  const {
    selectedSeats = [],
    total = 0,
    name = "",
    mobile = "",
    gender = "",
    boarding = "",
    dropping = "",
    discount = "",
  } = bookingData || {};

  // States for payment
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [mobileWallet, setMobileWallet] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    // Basic validation
    if (paymentMethod === "card" && (!cardNumber || !expiry || !cvv)) {
      alert("Please enter complete card details!");
      return;
    }

    if (paymentMethod === "wallet" && !mobileWallet) {
      alert("Please enter your wallet number!");
      return;
    }

    // Simulate success
    alert("✅ Payment Successful! Your ticket is confirmed.");
    navigate("/confirmation", { state: { bookingData } });
  };

  return (
    <div className="container payment-page my-5">
      <div className="row">
        {/* LEFT SIDE - Booking Summary */}
        <div className="col-md-5">
          <div className="card shadow-lg p-4 rounded-4 mb-4">
            <h4 className="mb-3">🚌 Booking Summary</h4>
            <p>
              <strong>Passenger:</strong> {name} <br />
              <strong>Mobile:</strong> {mobile} <br />
              <strong>Gender:</strong> {gender} <br />
              <strong>Boarding:</strong> {boarding} <br />
              <strong>Dropping:</strong> {dropping} <br />
            </p>
            <p>
              <strong>Seats:</strong>{" "}
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "No seats selected"}
            </p>
            <div className="fare-summary mt-3">
                <strong>Discount:</strong> {discount} <br />
              <h5>Total Fare:</h5>
              <h3 className="text-success">৳ {total}</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Payment Options */}
        <div className="col-md-7">
          <div className="card shadow-lg p-4 rounded-4">
            <h4 className="mb-3">💳 Payment Details</h4>
            <form onSubmit={handlePayment}>
              {/* Payment Method */}
              <div className="mb-3">
                <label className="form-label">Select Payment Method:</label>
                <select
                  className="form-select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">-- Choose Method --</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="wallet">Mobile Wallet (bKash, Nagad, Rocket)</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="cod">Cash at Counter</option>
                </select>
              </div>

              {/* Card Payment */}
              {paymentMethod === "card" && (
                <div className="card-details">
                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">CVV</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Wallet */}
              {paymentMethod === "wallet" && (
                <div className="mb-3">
                  <label className="form-label">Wallet Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="01XXXXXXXXX"
                    value={mobileWallet}
                    onChange={(e) => setMobileWallet(e.target.value)}
                  />
                </div>
              )}

              {/* Cash on Counter */}
              {paymentMethod === "cod" && (
                <div className="alert alert-info">
                  You have chosen <strong>Cash at Counter</strong>. Please pay
                  at the bus counter before departure.
                </div>
              )}

              {/* Confirm Button */}
              <button
                type="submit"
                className="btn btn-success w-100 rounded-3 py-2 mt-3"
              >
                <Link to="/confirmation">
                Confirm & Pay ৳{total}
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPageUser;
