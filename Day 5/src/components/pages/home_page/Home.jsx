import React from "react";
import "./home.css";
import NavbarSection from "./header_section/Navbar_Section.jsx";
import MainSection1 from "./main_section/section1/Section1.jsx";
import MainSection2 from "./main_section/section2/Section2.jsx";
import MainSection3 from "./main_section/section3/Section3.jsx";
import MainSection4 from "./main_section/section4/Section4.jsx";
import MainSection5 from "./main_section/section5/Section5.jsx";
import FooterSection from "./footer_section/Footer.jsx";

const Home = () => {

  return (
    <div>
      <NavbarSection/>
      <div className="main-page">
        <MainSection1/>
        <MainSection2/>
        <MainSection3/>
        <MainSection4/>
        <MainSection5/>
      </div>
      <FooterSection/>
    </div>
  );
};

export default Home;
