import { Outlet } from "react-router";
import UserFooter from "../components/UserFooter";
import UserNavbar from "../components/UserNavbar";
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
            <div className="card shadow-sm p-4 rounded-3">
              <h5 className="fw-bold mb-3 text-center" style={{ color: "#220901" }}>
                Find Your Bus
              </h5>
              <form>
                {/* From */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">From</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter departure city...."
                  />
                </div>

                {/* To */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">To</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter destination city...."
                  />
                </div>

                {/* Date */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Date of Journey</label>
                  <input
                    type="date"
                    className="form-control rounded-3"
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn bus-src rounded-3 fw-semibold">
                    Search Buses
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div>
        <Outlet />
      </div>

      <UserFooter />
    </>
  );
}

export default UserPortal;
