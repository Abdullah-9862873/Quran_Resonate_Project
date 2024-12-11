import React, { useState } from "react";
import Navbar from "../../../home_page/header_section/Navbar_Section.jsx";
import teachersData from "../TeachersData.jsx"; // Importing the teachers data
import styles from "./Home.module.css"; // Import the CSS module

// Importing images for the left display
import myNotes from "../../../../images/afterLogin-teacher-images/leftOptions/image2.svg";
import myStudents from "../../../../images/afterLogin-teacher-images/leftOptions/image4.svg";
import settings from "../../../../images/afterLogin-teacher-images/leftOptions/image5.png";
import support from "../../../../images/afterLogin-teacher-images/leftOptions/image6.png";

import MyNotesPage from "./myNotesPage/MyNotesPage.jsx";
import MyStudentsPage from "./myStudentsPage/MyStudentsPage.jsx";
import SettingsPage from "./settingsPage/Settings.jsx";
import SupportPage from "./supportPage/Support.jsx";

function Home() {
  // Assuming we have logged in teacher ID (can be dynamic in a real app)
  const loggedInTeacherId = 0;  // Replace this with logic to get logged-in teacher ID (e.g., from localStorage or context)
  
  // Find the logged-in teacher data from the teachers array
  const teacher = teachersData.find((t) => t.id === loggedInTeacherId);

  // State to manage the active section for both left menu and right display
  const [activeTab, setActiveTab] = useState("myNotes");  // Default to My Notes since Overview is removed

  // Function to handle tab change for both the left-side and right-side content
  const handleTabChange = (tab) => {
    setActiveTab(tab);  // Set active tab for both the left menu and the right display
  };

  if (!teacher) {
    return <div>Loading...</div>; // Show loading state if teacher data is not found
  }

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.section1}>
        <div className={styles.coverPhoto}>
          <img src={teacher.coverPhotoUrl} alt="Cover" />
        </div>
        <div className={styles.profilePhoto}>
          <img src={teacher.profilePhotoUrl} alt="Profile" className="profileImage" />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.userInfo}>
          <h2>{teacher.name}</h2>
          <h4>{teacher.role}</h4>
        </div>
      </div>
      <div className={styles.homeSection3}>
        <div className={styles.homeLeftDisplay}>
          {/* Remove the "Overview" tab option */}
          <div
            className={`${styles.homeOption} ${activeTab === "myNotes" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("myNotes")}
          >
            <img src={myNotes} alt="My Notes" />
            <span>My Notes</span>
          </div>
          <div
            className={`${styles.homeOption} ${activeTab === "myStudents" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("myStudents")}
          >
            <img src={myStudents} alt="My Students" />
            <span>My Students</span>
          </div>
          <div
            className={`${styles.homeOption} ${activeTab === "settings" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("settings")}
          >
            <img src={settings} alt="Settings" />
            <span>Settings</span>
          </div>
          <div
            className={`${styles.homeOption} ${activeTab === "support" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("support")}
          >
            <img src={support} alt="Support" />
            <span>Support</span>
          </div>
        </div>
        <div className={styles.homeRightDisplay}>
          {/* Conditionally render the right content based on the active tab */}
          {activeTab === "myNotes" && <MyNotesPage />}
          {activeTab === "myStudents" && <MyStudentsPage students={teacher.enrolledStudents} />}
          {activeTab === "settings" && <SettingsPage />}
          {activeTab === "support" && <SupportPage />}
        </div>
      </div>
    </div>
  );
}

export default Home;
