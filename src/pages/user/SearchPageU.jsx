import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Table, Button, Card } from "react-bootstrap";

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  // Dummy data (replace later with real API data)
  const results = [
    {
      id: 1,
      name: "Greenline Express",
      route: "Dhaka → Chittagong",
      manager: "https://i.pravatar.cc/50?img=1",
      status: "Available",
    },
    {
      id: 2,
      name: "Hanif Enterprise",
      route: "Dhaka → Sylhet",
      manager: "https://i.pravatar.cc/50?img=2",
      status: "Available",
    },
    {
      id: 3,
      name: "Shohagh Paribahan",
      route: "Dhaka → Khulna",
      manager: "https://i.pravatar.cc/50?img=3",
      status: "Not Available",
    },
    {
      id: 4,
      name: "Ena Transport",
      route: "Dhaka → Rangpur",
      manager: "https://i.pravatar.cc/50?img=4",
      status: "Available",
    },
    {
      id: 5,
      name: "Desh Travels",
      route: "Dhaka → Rajshahi",
      manager: "https://i.pravatar.cc/50?img=5",
      status: "Available",
    },
  ];

  return (
    <div className="container mt-4">
      <Card className="shadow-lg border-0 rounded-3">
        <Card.Body>
          <h3 className="mb-4">
            Search Results for:{" "}
            <span className="text-primary fw-bold">{query}</span>
          </h3>

          <Table hover responsive className="align-middle">
            <thead style={{ backgroundColor: "#0000F5" }} className="text-white">
              <tr>
                <th>#</th>
                <th>Bus/Branch</th>
                <th>Route</th>
                <th>Manager</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.route}</td>
                  <td>
                    <img
                      src={item.manager}
                      alt="Manager"
                      className="rounded-circle me-2 border"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                    Manager {index + 1}
                  </td>
                  <td>
                    {item.status === "Available" ? (
                      <span className="badge bg-success">{item.status}</span>
                    ) : (
                      <span className="badge bg-danger">{item.status}</span>
                    )}
                  </td>
                  <td>
                    {item.status === "Available" ? (
                      <Button
                        as={Link}
                        to={`/user/book/${item.id}`}
                        variant="primary"
                        size="sm"
                        className="rounded-pill"
                      >
                        Book Now
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-pill"
                        disabled
                      >
                        Not Available
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchPage;
