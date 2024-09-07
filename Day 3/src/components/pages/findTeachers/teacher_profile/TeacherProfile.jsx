import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar_Section from "../../home_page/header_section/Navbar_Section.jsx";
import Footer_Section from "../../home_page/footer_section/Footer.jsx";
import teachersData from "../Teachers_Data.jsx"; 
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import { TbGenderDemiboy } from "react-icons/tb";
import { IoIosPerson } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { IoBookSharp } from "react-icons/io5";
import "./teacher_profile.css";

function TeacherProfile() {
  const { id } = useParams(); // Get teacher ID from URL params
  const [activeSection, setActiveSection] = useState("Overview");

  const teacher = teachersData.find((t) => t.id === parseInt(id));

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Navbar_Section />
      <div>
        <div className="section1">
          <div className="cover_photo">
            <img src={teacher.coverPhotoUrl} alt="cover" />
          </div>
          <div className="profile_photo">
            <img src={teacher.profilePhotoUrl} alt="profile" />
          </div>
        </div>
        <div className="section2">
          <h2>{teacher.name}</h2>
          <h4>{teacher.role}</h4>
          <div className="button-parent">
            <button className="contact-button">Contact Me</button>
          </div>
        </div>
        <div className="section3">
          <div className="headings">
            <h3
              className={activeSection === "Overview" ? "active" : ""}
              onClick={() => handleSectionClick("Overview")}
            >
              Overview
            </h3>
            <h3
              className={activeSection === "Qualification" ? "active" : ""}
              onClick={() => handleSectionClick("Qualification")}
            >
              Qualification
            </h3>
            <h3
              className={activeSection === "Reviews" ? "active" : ""}
              onClick={() => handleSectionClick("Reviews")}
            >
              Reviews
            </h3>
          </div>
          <div className={`underline ${activeSection.toLowerCase()}`}></div>
        </div>
        <div className="section4">
          <div className="logos-parent">
            <div className="location">
              <h3 className="city">{teacher.location}</h3>
              <div className="icon-and-heading">
                <CiLocationOn className="icon" />
                <h5 className="label">Location</h5>
              </div>
            </div>
            <div className="languages">
              <h3 className="language">{teacher.languages.join(' / ')}</h3>
              <div className="icon-and-heading">
                <LiaLanguageSolid className="icon" />
                <h5 className="label">Languages</h5>
              </div>
            </div>
            <div className="gender">
              <h3 className="city">{teacher.gender}</h3>
              <div className="icon-and-heading">
                <TbGenderDemiboy className="icon" />
                <h5 className="label">Gender</h5>
              </div>
            </div>
            <div className="since_joined">
              <h3 className="city">{teacher.joinedDate}</h3>
              <div className="icon-and-heading">
                <IoIosPerson className="icon" />
                <h5 className="label">Since Joined</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <h3>About</h3>
          <p>{teacher.about}</p>
          <h3>Recitation Samples</h3>
          <div className="recitation-samples">
            {teacher.recitationSamples.map((sample, index) => (
              <video key={index} controls>
                <source src={sample} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
        <div className="section6">
          <h3>Packages</h3>
          {teacher.packages.map((pkg, index) => (
            <div className="package" key={index}>
              <h3>{pkg.name}</h3>
              <div className="classes_per_week">
                <IoBag />
                <h2>{pkg.classesPerWeek}</h2>
                <div className="description-parent">
                  <h4>Classes / week</h4>
                </div>
              </div>
              <div className="pay_per_month">
                <FaDollarSign />
                <h2>${pkg.payPerMonth}</h2>
                <div className="description-parent">
                  <h4>Pay / Month</h4>
                </div>
              </div>
              <div className="class_duration">
                <CiTimer />
                <h2>{pkg.classDuration}</h2>
                <div className="description-parent">
                  <h4>Class duration</h4>
                </div>
              </div>
              <div className="subjects_covered">
                <IoBookSharp />
                <p>{pkg.subjectsCovered}</p>
                <div className="description-parent">
                  <h4>Subjects Covered</h4>
                </div>
              </div>
              <button>Buy Package</button>
            </div>
          ))}
        </div>
      </div>
      <Footer_Section />
    </div>
  );
}

export default TeacherProfile;
