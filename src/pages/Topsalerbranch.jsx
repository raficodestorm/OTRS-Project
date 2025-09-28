import React from "react";
import "./Admins.css";

const TopSalerBranches = () => {
  // Example dynamic data (replace later with API/backend data)
  const branches = [
    {
      id: 1,
      branch: "Dhaka Central",
      manager: "S A Rafi",
      profilePic: "https://i.pravatar.cc/50?img=1",
      sales: 1200,
    },
    {
      id: 2,
      branch: "Chittagong Hub",
      manager: "Rasel Khan",
      profilePic: "https://i.pravatar.cc/50?img=2",
      sales: 1100,
    },
    {
      id: 3,
      branch: "Sylhet Point",
      manager: "Mehedi Hasan",
      profilePic: "https://i.pravatar.cc/50?img=3",
      sales: 980,
    },
    {
      id: 4,
      branch: "Rajshahi Zone",
      manager: "Anis Khan",
      profilePic: "https://i.pravatar.cc/50?img=4",
      sales: 920,
    },
    {
      id: 5,
      branch: "Khulna Station",
      manager: "Tariq Rahman",
      profilePic: "https://i.pravatar.cc/50?img=5",
      sales: 850,
    },
  ];

  return (
    <div className="top-saler-container">
      <h4 className="top-saler-table-title mb-4">🏆 Top 5 Branches</h4>
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Branch</th>
            <th>Manager</th>
            <th className="top-saler-text-center">Sales</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.branch}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={branch.profilePic}
                    alt={branch.manager}
                    className="top-saler-profile-pic"
                  />
                  <span className="ms-2">{branch.manager}</span>
                </div>
              </td>
              <td className="text-center fw-bold top-saler-text-main">
                {branch.sales.toLocaleString()}+
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSalerBranches;
