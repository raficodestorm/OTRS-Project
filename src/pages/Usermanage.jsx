import React, { useState } from "react";
import "./Admins.css";

const UserManagement = () => {
  // Dummy data (replace with API later)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "S A Rafi",
      email: "rafi@example.com",
      phone: "0170124587",
      status: "Active",
    },
    {
      id: 2,
      name: "Rasel Khan",
      email: "rasel@example.com",
      phone: "018245698",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Ashik Khan",
      email: "ashik@example.com",
      phone: "018245698",
      status: "Blocked",
    },
  ]);

  // Toggle user status
  const handleToggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            status: user.status === "Active" ? "Blocked" : "Active",
          }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
                <td className="text-center">
                  <button
                    className={`status-btn ${
                      user.status === "Active" ? "block" : "unblock"
                    }`}
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
