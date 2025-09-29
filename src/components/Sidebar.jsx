import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Sidebar() {
    useEffect(() => {
    const sideBar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");

    function toggleSidebar() {
      toggleBtn.classList.toggle("rotate");
      sideBar.classList.toggle("close");

      document.querySelectorAll(".sub").forEach((sub) => {
        if (sideBar.classList.contains("close")) {
          sub.classList.add("subpadding");
        } else {
          sub.classList.remove("subpadding");
        }
      });
    }

    toggleBtn.addEventListener("click", toggleSidebar);

    // cleanup
    return () => {
      toggleBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <nav className={`sidebar`}>
      <ul>
        <li className="first">
          <span className="nav-logo">RunStar</span>
          <button className="toggle-btn" id="toggleSide">
          <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#220901"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
          </button>
        </li>
        <li>
          <Link to="/admin/Dashboard" title="Dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Busentry" title="Bus Entry">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e00000"><path d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z"/></svg>
            <span>Bus Entry</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Allbuses" title="Allbuses">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/></svg>
            <span>Allbuses</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Addbranch" title="Addbranch">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#48752C"><path d="M80-80v-526q0-85 44-147.5T248-848q54-21 115-26.5t117-5.5q56 0 117 5.5T712-848q80 32 124 94.5T880-606v526H80Zm284-80h230l-60-60H424l-60 60Zm-64-280h360v-160H300v160Zm320 140q17 0 28.5-11.5T660-340q0-17-11.5-28.5T620-380q-17 0-28.5 11.5T580-340q0 17 11.5 28.5T620-300Zm-280 0q17 0 28.5-11.5T380-340q0-17-11.5-28.5T340-380q-17 0-28.5 11.5T300-340q0 17 11.5 28.5T340-300ZM160-160h140v-20l42-42q-44-6-73-39.5T240-340v-260q0-78 74.5-99T480-720q100 0 170 21t70 99v260q0 45-29 78.5T618-222l42 42v20h140v-446q0-60-29.5-102.5T682-774q-44-17-97.5-21.5T480-800q-51 0-104.5 4.5T278-774q-59 23-88.5 65.5T160-606v446Zm0 0h640-640Z"/></svg>
            <span>Addbranch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Allbranches" title="Branches">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#220901"><path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T200-840v80Zm80 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg>
            <span>Branches</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Booked" title="Booked">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#220901"><path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T200-840v80Zm80 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg>
            <span>Booked</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Usermanage" title="Users">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#220901"><path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T200-840v80Zm80 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg>
            <span>Users</span>
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Sidebar;
