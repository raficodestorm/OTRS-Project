import React from "react";
import "./Admins.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyChart = () => {
  // Demo dynamic data (replace with API data later)
  const data = [
    { month: "Jan", bookings: 120 },
    { month: "Feb", bookings: 95 },
    { month: "Mar", bookings: 110 },
    { month: "Apr", bookings: 130 },
    { month: "May", bookings: 125 },
    { month: "Jun", bookings: 140 },
    { month: "Jul", bookings: 100 },
    { month: "Aug", bookings: 115 },
    { month: "Sep", bookings: 90 },
    { month: "Oct", bookings: 105 },
    { month: "Nov", bookings: 98 },
    { month: "Dec", bookings: 150 },
  ];

  return (
    <div className="chart-container">
      <h4 className="chart-title">Monthly Bookings Overview</h4>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookings" fill="#ff0000" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
