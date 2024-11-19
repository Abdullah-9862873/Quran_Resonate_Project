import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarSection from "../../home_page/header_section/Navbar_Section.jsx";
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
  const { id } = useParams();
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
      <NavbarSection />
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
            <h3 onClick={() => handleSectionClick("Overview")}>Overview</h3>
            <h3 onClick={() => handleSectionClick("Qualification")}>
              Qualification
            </h3>
            <h3 onClick={() => handleSectionClick("Reviews")}>Reviews</h3>
          </div>
          <div className={`underline ${activeSection.toLowerCase()}`}></div>
        </div>
        {/* Overview Section */}
        {activeSection === "Overview" && (
          <div>
            <div className="section4_Overview">
              <div className="logos-parent">
                <div className="location">
                  <h3 className="city">{teacher.location}</h3>
                  <div className="icon-and-heading">
                    <CiLocationOn className="icon" />
                    <h5 className="label">Location</h5>
                  </div>
                </div>
                <div className="languages">
                  <h3 className="language">{teacher.languages.join(" / ")}</h3>
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
        )}
        {/* Qualification Section */}
        {activeSection === "Qualification" && (
          <div>
            <div className="section4_Qualification">
              <h2>Qualification</h2>
              <div className="degrees">
                <h3>Degrees:</h3>
                <div className="degree-list">
                  {teacher.qualification.degrees.map((degree, index) => (
                    <span key={index} className="degree-item">
                      {degree}
                    </span>
                  ))}
                </div>
              </div>
              <div className="teaching-experience">
                <h3>Teaching Experience:</h3>
                <ul>
                  {teacher.teachingExperience.map((experience, index) => (
                    <li key={index}>
                      <strong>{experience.heading}</strong> —{" "}
                      {experience.duration}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="note">
                <h3>Note:</h3>
                <p>{teacher.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* Review Section */}
        {activeSection === "Reviews" && (
          <div className="section4_Reviews">
            <h2>Reviews</h2>
            {teacher.reviews && teacher.reviews.length > 0 ? (
              teacher.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <h3>{review.reviewerName}</h3>
                  <div className="stars">
                    {Array.from({ length: review.stars }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p>
                    <strong>Note:</strong> {review.note}
                  </p>
                  <p>
                    <strong>Timestamp:</strong>{" "}
                    {new Date(review.timestamp).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Course Purchase Date:</strong>{" "}
                    {new Date(review.coursePurchaseDate).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherProfile;
