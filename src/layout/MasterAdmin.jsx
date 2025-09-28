import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function MasterAdmin() {
    return (
      <div className="d-flex">
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Header />
          <div className="container-fluid mt-3">
          <Outlet />
          </div>
        </main>
      </div>
    );
  }
  
  export default MasterAdmin;