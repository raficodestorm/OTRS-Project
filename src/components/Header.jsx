import React from "react";

function Header() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary" id="header">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="Search" />
          <button className="btn bg-white" type="submit">Search</button>
        </form>
        <div className="col-auto ms-auto d-flex align-items-center">
          <div className="position-relative me-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" 
                                width="28px" fill="#0000F5" class="notification-icon">
                            <path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
                            </svg>
            <span className="badge bg-danger rounded-pill notification-badge">3</span>
          </div>
          {/* Profile Dropdown */}
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle"
              id="profileDropdown" data-bs-toggle="dropdown">
              <img src="/assests/image/rafi33.jpg" alt="Profile"
                className="rounded-circle img-fluid"
                style={{ width: "40px", height: "40px", objectFit: "cover", border: "2px solid #0000F5" }} />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
