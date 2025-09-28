import React from "react";
import MonthlyChart from "./Salechart";
import TopSalerBranches from "./Topsalerbranch";

function Dashboard() {
  return (
    <div className="container-fluid">
    <div className="row g-2">
      <div className="col-md-3 p-2">
        <div className="hello p-2">
          <h5>Passenger</h5>
          <h2>1500p</h2>
          <p>in september</p>
        </div>
      </div>
      <div className="col-md-3 p-2">
        <div className="hello p-2">
          <h5>Sale</h5>
          <h2>85000tk</h2>
          <p>in september</p>
        </div>
      </div>
      <div className="col-md-3 p-2">
        <div className="hello p-2">
          <h5>Return</h5>
          <h2>100 pc</h2>
          <p>in september</p>
        </div>
      </div>
      <div className="col-md-3 p-2">
        <div className="hello p-2">
          <h5>Cost</h5>
          <h2>9500tk</h2>
          <p>in september</p>
        </div>
      </div>
    </div>

    <div className="row g-2">
      <div className="col-md-6 p-2">
        <div className="graph p-2">
          <MonthlyChart />
        </div>
      </div>
      <div className="col-md-6 p-2">
        <div className="graph p-2">
          <TopSalerBranches/>
        </div>
      </div>
    </div>
    

  </div>
  );
}

export default Dashboard;
