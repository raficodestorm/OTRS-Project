
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css"; // custom styling

const PopularRoutes = () => {
  const routes = [
    { from: "Dhaka", to: "Natore" },
    { from: "Natore", to: "Dhaka" },
    { from: "Dhaka", to: "Rajshahi" },
    { from: "Rajshahi", to: "Dhaka" },
    { from: "Kustia", to: "Dhaka" },
    { from: "Dhaka", to: "Kustia" },
    { from: "Meherpur", to: "Dhaka" },
    { from: "Dhaka", to: "Meherpur" },
    { from: "Dhaka", to: "Cox's Bazar" },
  ];

  return (
    <div className="container my-5 p-routes">
      <h2 className="text-center mb-4 popular-title">Popular Routes</h2>
      <div className="row g-4">
        {routes.map((route, index) => (
          <div className="col-md-4 col-sm-6 card-route" key={index}>
            <div className="main-card rounded-3 p-3 ">
            <div className="int">
              <span>From</span>
              <span>To</span>
            </div>
            <div className="route-card d-flex justify-content-between align-items-center ">
              <span className="fw-bold">{route.from}</span>
              <div className="route-line mt-2 mb-2">
                {/* <i className="bi bi-geo-alt-fill start-icon"></i> */}
                <i className="bi bi-bus-front bus-icon"></i>
                {/* <i className="bi bi-geo-alt-fill end-icon"></i> */}
              </div>
              <span className="fw-bold">{route.to}</span>
              
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
