import { Outlet } from "react-router";
import UserFooter from "../components/UserFooter";
import UserNavbar from "../components/UserNavbar";
import SearchForm from "../pages/user/SearchForm";
import "./Layout.css";

function UserPortal() {
  return (
    <>
      <UserNavbar />
      <div className="container-fluid master-background">
        <div className="row justify-content-between w-100">
          <div className="col-md-6">
            <div className="heading">
              <h1>RunStar is Near, <br />Start your journey Here,</h1>
              <p>Book fast, Ride easy and cheer!</p>
            </div>
          </div>
          <div className="col-md-4 p-5">
            <SearchForm/>
          </div>

        </div>
      </div>

      
        <Outlet />
    

      <UserFooter />
    </>
  );
}

export default UserPortal;
