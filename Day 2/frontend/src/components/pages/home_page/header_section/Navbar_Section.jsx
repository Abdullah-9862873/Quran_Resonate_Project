import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import HamburgerMenu from "../header_section/hamburger/HamburgerMenu.jsx";
import logo from "../../../images/home_page_images/logo.png";

function Navbar_Section() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };
  return (
    <div>
      <div className="navbar-parent">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div className="pages">
          <ul className="pages-ul">
            <Link to={"/"}>
              <li className="pages-ul-li group">
                Home<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/find-teachers"}>
              <li className="pages-ul-li group">
                Find Teachers
                <span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/find-jobs"}>
              <li className="pages-ul-li group">
                Find Jobs<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="pages-ul-li group">
                Contact Us<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
            <Link to={"/faq"}>
              <li className="pages-ul-li group">
                FAQs<span className="pages-ul-li-underliningItems"></span>
              </li>
            </Link>
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
          </ul>
        </div>
        <div className="hamburger">
          <button onClick={toggleHamburger}>
            <div className={`icon-wrapper ${showHamburgerMenu ? "open" : ""}`}>
              <GiHamburgerMenu className="hamburger-icon" />
              <AiOutlineClose className="close-icon" />
            </div>
          </button>
        </div>
      </div>
      <div className={`hamburger-menu ${showHamburgerMenu ? "open" : ""}`}>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar_Section;
