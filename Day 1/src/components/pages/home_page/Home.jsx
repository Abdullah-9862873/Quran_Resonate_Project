import React, { useState } from "react";
import "./home.css";
import logo from "../../images/home_page_images/logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import HamburgerMenu from "./hamburger/HamburgerMenu.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleHamburger = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <div>
      <div className="navbar-parent">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            onClick={handleLogoClick}
          />
        </div>
        <div className="pages">
          <ul className="pages-ul">
            <li className="pages-ul-li group">
              Home<span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              Find Teachers
              <span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              Find Jobs<span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              Contact Us<span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              FAQs<span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              Login<span className="pages-ul-li-underliningItems"></span>
            </li>
            <li className="pages-ul-li group">
              Signup<span className="pages-ul-li-underliningItems"></span>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <a href="#" onClick={toggleHamburger}>
            <div className={`icon-wrapper ${showHamburgerMenu ? 'open' : ''}`}>
              <GiHamburgerMenu className="hamburger-icon" />
              <AiOutlineClose className="close-icon" />
            </div>
          </a>
        </div>
      </div>
      <div className={`hamburger-menu ${showHamburgerMenu ? "open" : ""}`}>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Home;
