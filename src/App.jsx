import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import BusEntry from "./pages/BusEntry";
import Buses from "./pages/Allbuses";
import AddBranch from "./pages/Addbranch";
import AllBranches from "./pages/Allbranches";
import BookingManagement from "./pages/Booked";
import UserManagement from "./pages/Usermanage";
import LoginPage from "./pages/Login";


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Header />
        <div className="container-fluid mt-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Busentry" element={<BusEntry />} />
            <Route path="/Allbuses" element={<Buses />} />
            <Route path="/Addbranch" element={<AddBranch />} />
            <Route path="/Allbranches" element={<AllBranches />} />
            <Route path="/Booked" element={<BookingManagement />} />
            <Route path="/Usermanage" element={<UserManagement />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
