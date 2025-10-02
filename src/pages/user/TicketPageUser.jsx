// TicketPage.js
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./User.css"; // custom styles

function TicketPageUser() {
  const { state } = useLocation();
  const bookingData = state?.bookingData || {};

  const {
    selectedSeats = [],
    total = 0,
    name = "",
    mobile = "",
    gender = "",
    boarding = "",
    dropping = "",
    discount = 0,
  } = bookingData;

  const ticketRef = useRef();

  // 🖨️ Print button
  const handlePrint = useReactToPrint({
    contentRef: ticketRef,  // ✅ new API
    documentTitle: "BusTicket",
  });

  // ⬇️ Download PDF button
  const handleDownloadPDF = () => {
    const input = ticketRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("BusTicket.pdf");
    });
  };

  const issueDate = new Date().toLocaleString();


  return (
    <div className="container my-4">
      <div className="text-end mb-3">
        <button className="btn btn-primary me-2" onClick={handlePrint}>
          🖨️ Print Ticket
        </button>
        <button className="btn btn-success" onClick={handleDownloadPDF}>
          ⬇️ Download PDF
        </button>
      </div>

      <div ref={ticketRef} className="ticket-card shadow-lg rounded-3 p-4">
        {/* Header */}
        <div className="ticket-header text-center mb-4">
          <img
            src="/assests/image/bus-logo.png"
            alt="Company Logo"
            style={{ height: "4.5rem" }}
          />
          <h3 className="mt-2">RunStar Transport</h3>
          <p className="text-muted">Your e-ticket has been successfully issued</p>
        </div>

        {/* Journey Information */}
        <div className="section mb-4">
          <h5 className="section-title">🚌 Journey Information</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><strong>Issue Date & Time</strong></td>
                <td>{issueDate}</td>
              </tr>
              <tr>
                <td><strong>Journey Date</strong></td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
              <tr>
                <td><strong>From Station</strong></td>
                <td>{boarding}</td>
              </tr>
              <tr>
                <td><strong>To Station</strong></td>
                <td>{dropping}</td>
              </tr>
              <tr>
                <td><strong>Coach/Class</strong></td>
                <td>AC_BUS</td>
              </tr>
              <tr>
                <td><strong>Seats</strong></td>
                <td>{selectedSeats.join(", ")}</td>
              </tr>
              <tr>
                <td><strong>Fare</strong></td>
                <td>৳ {total}</td>
              </tr>
              <tr>
                <td><strong>Discount</strong></td>
                <td>৳ {discount || 0}</td>
              </tr>
              <tr>
                <td><strong>Total Paid</strong></td>
                <td><strong className="text-success">৳ {total - discount}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Passenger Information */}
        <div className="section mb-4">
          <h5 className="section-title">👤 Passenger Information</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><strong>Name</strong></td>
                <td>{name}</td>
              </tr>
              <tr>
                <td><strong>Mobile</strong></td>
                <td>{mobile}</td>
              </tr>
              <tr>
                <td><strong>Gender</strong></td>
                <td>{gender || "N/A"}</td>
              </tr>
              <tr>
                <td><strong>PNR Number</strong></td>
                <td>{Math.random().toString(36).substr(2, 10).toUpperCase()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* QR Code + Note */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="text-muted text-center small instruction">
              Please carry this ticket along with a valid photo ID.  
              No need to print if showing on mobile device.
            </p>
          </div>
          <QRCode value={`PNR-${Date.now()}`} size={80} />
        </div>

        <div className="text-center mt-3">
          <p>✅ Wishing you a safe and pleasant journey!</p>
          <h6 className="text-primary">Your Bus Company Name</h6>
        </div>
      </div>
    </div>
  );
}

export default TicketPageUser;
