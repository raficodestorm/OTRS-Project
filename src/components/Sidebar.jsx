import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBus } from 'react-icons/fa6';
import { FaUserCog } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { PiBusBold, PiBookmarksBold } from 'react-icons/pi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { LuArrowBigLeftDash } from 'react-icons/lu';
import { MdOutlineAddModerator } from 'react-icons/md';
import { GiTreeBranch } from 'react-icons/gi';
import { TbBusStop } from 'react-icons/tb';

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(false);
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
          <LuArrowBigLeftDash/>
          </button>
        </li>
        <li>
          <Link to="/admin/Dashboard" title="Dashboard">
            <RiDashboardFill className="dicons"/>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Busentry" title="Bus Entry">
            <PiBusBold className="dicons"/>
            <span>Bus Entry</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Allbuses" title="Allbuses">
            <FaBus className="dicons"/>
            <span>Allbuses</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Addbranch" title="Addbranch">
            <MdOutlineAddModerator className="dicons"/>
            <span>Addbranch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Allbranches" title="Branches">
            <GiTreeBranch className="dicons"/>
            <span>Branches</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Booked" title="Booked">
            <PiBookmarksBold className="dicons"/>
            <span>Booked</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/Usermanage" title="Users">
            <FaUserCog className="dicons"/>
            <span>Users</span>
          </Link>
        </li>
        <li className={`dropdown ${openDropdown ? "open" : ""}`}>
          <button
            type="button"
            className="drop-btn"
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            <TbBusStop className="dicons" />
            <span>Stations</span>
            <BiSolidDownArrow
              className={`arrow ${openDropdown ? "rotate" : ""}`}
            />
          </button>

          {openDropdown && (
            <ul className="submenu">
              <li>
                <Link to="/admin/stations/add">
                  <RiDashboardFill className="dicons" />
                  <span>Add</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/stations/remove">
                  <RiDashboardFill className="dicons" />
                  <span>Remove</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/stations/edit">
                  <RiDashboardFill className="dicons" />
                  <span>Edit</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/stations/show">
                  <RiDashboardFill className="dicons" />
                  <span>Show</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        
      </ul>
    </nav>
  );
}

export default Sidebar;
