import React, { useState } from "react";
import './Admins.css'; 

const AllBranches = () => {
  // Dummy data (replace with API later)
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: "Dhaka Main Branch",
      code: "DHK001",
      location: "Dhaka",
      managerName: "Mr. Karim",
      contactNumber: "017542665",
      email: "dhaka@bus.com",
    },
    {
      id: 2,
      name: "Chittagong Branch",
      code: "CTG002",
      location: "Chittagong",
      managerName: "Mr. Rahman",
      contactNumber: "0185485215",
      email: "ctg@bus.com",
    },
  ]);

  // Edit branch (later connect to API)
  const handleEdit = (id) => {
    alert(`Edit branch with ID: ${id}`);
  };

  // Remove branch
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this branch?")) {
      setBranches(branches.filter((branch) => branch.id !== id));
    }
  };

  return (
    <div className="all-branches-container">
      <h2>All Branches</h2>
      <table className="branches-table">
        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Code</th>
            <th>Location</th>
            <th>Manager</th>
            <th>Contact</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {branches.length > 0 ? (
            branches.map((branch) => (
              <tr key={branch.id}>
                <td>{branch.name}</td>
                <td>{branch.code}</td>
                <td>{branch.location}</td>
                <td>{branch.managerName}</td>
                <td>{branch.contactNumber}</td>
                <td>{branch.email}</td>
                <td className="text-center">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(branch.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(branch.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No branches available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllBranches;
