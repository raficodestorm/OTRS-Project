import React, { useState } from "react";
import "./Component.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const UserNavbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/user/search?query=${encodeURIComponent(search)}`);
      setSearch(""); // clear search after redirect (optional)
    }
  };

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#fffef5c9" }} className="shadow-sm ">
      <Container fluid className="usernavbar">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="text-logo ">
          <img
            src="/assests/image/bus-logo.png" // replace with your logo
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-top me-2"
          /> <span className="runstar">RunStar</span>
        </Navbar.Brand>

        {/* Toggle button (for mobile view) */}
        <Navbar.Toggle aria-controls="user-navbar" className="bg-light" />

        <Navbar.Collapse id="user-navbar">
          {/* Searchbar */}
          <Form className="d-flex mx-auto w-50" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search buses, routes, branches..."
              className="me-2 rounded-pill"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              variant="light"
              className="rounded-pill fw-semibold"
              style={{ color: "#0000F5" }}
            >
              Search
            </Button>
          </Form>

          {/* Menu + Profile */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/user/bookings" className="text-menu fw-semibold me-3">
              My Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="/user/offers" className="text-menu fw-semibold me-3">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/user/support" className="text-menu fw-semibold me-3">
              Support
            </Nav.Link>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-profile"
                className="d-flex align-items-center rounded-pill px-2 py-1"
              >
                <img
                  src="/assests/image/rafi33.jpg" // replace with user profile
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: "32px", height: "32px", objectFit: "cover" }}
                />
                <span className="fw-semibold" style={{ color: "#0000F5" }}>
                  Rafi
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/user/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/user/settings">
                  Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/other/loginPage" className="text-danger">
                  Login
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/" className="text-danger">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
