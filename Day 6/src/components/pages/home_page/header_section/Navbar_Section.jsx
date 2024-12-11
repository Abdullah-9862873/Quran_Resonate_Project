import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import HamburgerMenu from "../header_section/hamburger/HamburgerMenu.jsx";
import logo from "../../../images/home_page_images/logo.png";
import "./header.css";
import { useAuth } from "../../../../context/AuthContext.js";

function Navbar_Section() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const { isLoggedIn, role, user, logout } = useAuth(); // Use logout from AuthContext
  const navigate = useNavigate(); // Initialize navigate hook

  const toggleHamburger = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate("/"); // Redirect to home page
  };

  return (
    <div>
      <div className="navbar-parent">
        {/* Logo Section */}
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="pages">
          <ul className="pages-ul">
            <Link to={"/"}>
              <li className="pages-ul-li group">
                Home<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            {isLoggedIn && role === "student" && (
              <>
                <Link to={"/find-teachers"}>
                  <li className="pages-ul-li group">
                    Find Teachers
                    <span className="pages-ul-li-underliningItems"></span>
                  </li>
                </Link>
              </>
            )}
            <Link to={"/find-jobs"}>
              <li className="pages-ul-li group">
                Find Jobs<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="pages-ul-li group">
                Contact Us<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/faq"}>
              <li className="pages-ul-li group">
                FAQs<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>

            {/* Conditional Links for Authenticated Users */}
            {isLoggedIn && role === "student" && (
              <>
                <Link to={"/my-queries"}>
                  <li className="pages-ul-li group">
                    My Queries
                    <span className="pages-ul-li-underliningItems"></span>
                  </li>
                </Link>
                <Link to={"/post-job"}>
                  <li className="pages-ul-li group">
                    <button className="post-job-btn">
                      Post a Job Requirement
                    </button>
                  </li>
                </Link>
              </>
            )}

            {/* Login and Signup Links */}
            {!isLoggedIn && (
              <>
                <Link to={"/login"}>
                  <li className="pages-ul-li group">
                    Login<span className="pages-ul-li-underliningItems"></span>
                  </li>
                </Link>
                <Link to={"/signup"}>
                  <li className="pages-ul-li group">
                    Signup<span className="pages-ul-li-underliningItems"></span>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>

        {/* Icons: Messages, Notifications, Profile Picture */}
        <div className="icons-container">
          {isLoggedIn && (
            <>
              {/* Messages Icon */}
              <Link to={"/messages"} className="icon-link">
                <BiMessageRounded className="icon" />
              </Link>

              {/* Notifications Icon */}
              <Link to={"/notifications"} className="icon-link">
                <IoIosNotificationsOutline className="icon" />
              </Link>

              {/* Profile Picture */}
              <div
                className="profile-picture-container"
                onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
              >
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="profile-picture"
                  />
                ) : (
                  <div className="empty-profile-picture"></div>
                )}

                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <div className="profile-dropdown">
                    <ul>
                      <li>
                        <button onClick={handleLogout}>Logout</button>{" "}
                        {/* Logout button */}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger">
          <button onClick={toggleHamburger}>
            <div className={`icon-wrapper ${showHamburgerMenu ? "open" : ""}`}>
              <GiHamburgerMenu className="hamburger-icon" />
              <AiOutlineClose className="close-icon" />
            </div>
          </button>
        </div>
      </div>

      {/* Hamburger Menu Dropdown */}
      <div className={`hamburger-menu ${showHamburgerMenu ? "open" : ""}`}>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar_Section;
