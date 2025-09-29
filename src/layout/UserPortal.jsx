import { Outlet } from "react-router";
import UserFooter from "../components/UserFooter";
import UserNavbar from "../components/UserNavbar";
import "./Layout.css";

function UserPortal() {
  return (
    <>
      <UserNavbar />
      <div className="container-fluid master-background">
        <button className="btn btn-primary">Buy Ticket</button>
      </div>

      <div>
        <Outlet />
      </div>

      <UserFooter />
    </>
  );
}

export default UserPortal;
