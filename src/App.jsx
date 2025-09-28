import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard"
import BusEntry from "./pages/Admin/BusEntry";
import Buses from "./pages/Admin/Allbuses";
import AddBranch from "./pages/Admin/Addbranch";
import AllBranches from "./pages/Admin/Allbranches";
import BookingManagement from "./pages/Admin/Booked";
import UserManagement from "./pages/Admin/Usermanage";
import LoginPage from "./pages/Admin/Login";
import MasterAdmin from "./layout/MasterAdmin";


function App() {
  return (
          <Routes>
            <Route path="/" element={< Navigate to="/Admin/Dashboard" replace/>} />

            <Route path="/Admin/*" element={<MasterAdmin/>}>
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Busentry" element={<BusEntry />} />
              <Route path="Allbuses" element={<Buses />} />
              <Route path="Addbranch" element={<AddBranch />} />
              <Route path="Allbranches" element={<AllBranches />} />
              <Route path="Booked" element={<BookingManagement />} />
              <Route path="Usermanage" element={<UserManagement />} />
              <Route path="Login" element={<LoginPage />} />
            </Route>
          </Routes>
  );
}

export default App;
