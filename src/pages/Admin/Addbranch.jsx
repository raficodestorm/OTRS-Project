import React, { useState } from "react";
import './Admins.css'; // optional CSS for styling

const AddBranch = () => {
  // State to hold form data
  const [branchData, setBranchData] = useState({
    name: "",
    code: "",
    location: "",
    managerName: "",
    contactNumber: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    for (let key in branchData) {
      if (!branchData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }

    // Here you can call your API
    console.log("Branch Data Submitted:", branchData);
    alert("Branch added successfully!");

    // Reset form
    setBranchData({
      name: "",
      code: "",
      location: "",
      managerName: "",
      contactNumber: "",
      email: "",
    });
  };

  return (
    <div className="add-branch-container">
      <h2>Add New Branch</h2>
      <form onSubmit={handleSubmit} className="add-branch-form">
        <div className="form-group">
          <label>Branch Name</label>
          <input
            type="text"
            name="name"
            value={branchData.name}
            onChange={handleChange}
            placeholder="Enter branch name"
          />
        </div>

        <div className="form-group">
          <label>Branch Code</label>
          <input
            type="text"
            name="code"
            value={branchData.code}
            onChange={handleChange}
            placeholder="Enter branch code"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={branchData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label>Manager Name</label>
          <input
            type="text"
            name="managerName"
            value={branchData.managerName}
            onChange={handleChange}
            placeholder="Enter manager name"
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={branchData.contactNumber}
            onChange={handleChange}
            placeholder="Enter contact number"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={branchData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Branch
        </button>
      </form>
    </div>
  );
};

export default AddBranch;
