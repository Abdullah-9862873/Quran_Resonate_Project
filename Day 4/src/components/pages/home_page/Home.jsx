import React from "react";
import "./home.css";
import Navbar_Section from "./header_section/Navbar_Section";
import Main_Section1 from "./main_section/section1/Section1.jsx";
import Main_Section2 from "./main_section/section2/Section2.jsx";
import Main_Section3 from "./main_section/section3/Section3.jsx";
import Main_Section4 from "./main_section/section4/Section4.jsx";
import Main_Section5 from "./main_section/section5/Section5.jsx";
import Footer_Section from "./footer_section/Footer.jsx";

const Home = () => {

  return (
    <div>
      <Navbar_Section/>
      <div className="main-page">
        <Main_Section1/>
        <Main_Section2/>
        <Main_Section3/>
        <Main_Section4/>
        <Main_Section5/>
      </div>
      <Footer_Section/>
    </div>
  );
};

export default Home;
