import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const UserFooter = () => {
  return (
    <footer style={{ backgroundColor: "#0000F5" }} className="text-light pt-5 pb-3 mt-5 shadow-lg">
      <Container>
        <Row className="gy-4">
          {/* Logo + About */}
          <Col md={3}>
            <h4 className="fw-bold mb-3">
              <img
                src="/logo192.png" // replace with your logo
                alt="Logo"
                width="40"
                height="40"
                className="me-2"
              />
              Ranar Bus
            </h4>
            <p className="small">
              Smart and reliable online bus reservation system. Book your journey
              with ease, comfort, and trust.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/user/loginPage" className="text-light text-decoration-none">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/user/bookings" className="text-light text-decoration-none">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/user/offers" className="text-light text-decoration-none">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/user/support" className="text-light text-decoration-none">
                  Support
                </Link>
              </li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:support@ranarbus.com" className="text-light text-decoration-none">support@ranarbus.com</a></li>
              <li>Phone: <a href="tel:+880123456789" className="text-light text-decoration-none">+880 1234 567 89</a></li>
              <li>
                <Link to="/user/faq" className="text-light text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="small mb-0">
              © {new Date().getFullYear()} <strong>Ranar Bus</strong>. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default UserFooter;
