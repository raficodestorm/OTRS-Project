import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard"
import BusEntry from "./pages/admin/BusEntry";
import Buses from "./pages/admin/Allbuses";
import AddBranch from "./pages/admin/Addbranch";
import AllBranches from "./pages/admin/Allbranches";
import BookingManagement from "./pages/admin/Booked";
import UserManagement from "./pages/admin/Usermanage";
import LoginPage from "./pages/other/loginPage";
import MasterAdmin from "./layout/MasterAdmin";
import Blank from "./layout/Blank";
import UserPortal from "./layout/UserPortal";
import SearchPage from "./pages/user/SearchPageU";


function App() {
  return (
          <Routes>
            {/* <Route path="/" element={< Navigate to="/other/loginPage" replace/>} />
            
            <Route path="/other/*" element={<Blank/>}>
              <Route path="loginPage" element={<LoginPage />} />
            </Route> */}

            <Route path="/" element={< Navigate to="/user/SearchPage" replace/>} />
            
            <Route path="/user/*" element={<UserPortal/>}>
              <Route path="SearchPage" element={<SearchPage />} />
            </Route>

            <Route path="/admin/*" element={<MasterAdmin/>}>
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Busentry" element={<BusEntry />} />
              <Route path="Allbuses" element={<Buses />} />
              <Route path="Addbranch" element={<AddBranch />} />
              <Route path="Allbranches" element={<AllBranches />} />
              <Route path="Booked" element={<BookingManagement />} />
              <Route path="Usermanage" element={<UserManagement />} />
            </Route>
          </Routes>
          
  );
}

export default App;
