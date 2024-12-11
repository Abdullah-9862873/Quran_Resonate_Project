import React, { useState } from "react";
import Navbar from "../../../home_page/header_section/Navbar_Section.jsx";
import students from "../StudentsData.jsx"; // Importing the students data
import styles from "./Home.module.css"; // Import the CSS module

// Importing images for the left display
import overviewImage from "../../../../images/afterLogin-student-images/leftOptions/image1.png";
import myNotes from "../../../../images/afterLogin-student-images/leftOptions/image2.svg";
import myTeachers from "../../../../images/afterLogin-student-images/leftOptions/image4.svg";
import settings from "../../../../images/afterLogin-student-images/leftOptions/image5.png";
import support from "../../../../images/afterLogin-student-images/leftOptions/image6.png";

import OverviewPage from "./overviewPage/Overview.jsx";
import MyNotesPage from "./myNotesPage/MyNotesPage.jsx";
import MyTeachersPage from "./myTeachersPage/MyTeachersPage.jsx";
import SettingsPage from "./settingsPage/Settings.jsx";
import SupportPage from "./supportPage/Support.jsx";

function Home() {
  // Assuming we have logged in student ID (can be dynamic in a real app)
  const loggedInStudentId = 0;  // Replace this with logic to get logged-in student ID (e.g., from localStorage or context)
  
  // Find the logged-in student data from the students array
  const student = students.find((s) => s.id === loggedInStudentId);

  // State to manage the active section for both left menu and right display
  const [activeTab, setActiveTab] = useState("overview");

  // Function to handle tab change for both left-side and right-side content
  const handleTabChange = (tab) => {
    setActiveTab(tab);  // Set active tab for both the left menu and the right display
  };

  if (!student) {
    return <div>Loading...</div>; // Show loading state if student data is not found
  }

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.section1}>
        <div className={styles.coverPhoto}>
          <img src={student.coverPhotoUrl} alt="Cover" />
        </div>
        <div className={styles.profilePhoto}>
          <img src={student.profilePhotoUrl} alt="Profile" className="profileImage" />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.userInfo}>
          <h2>{student.name}</h2>
          <h4>{student.role}</h4>
        </div>
      </div>
      <div className={styles.homeSection3}>
        <div className={styles.homeLeftDisplay}>
          <div
            className={`${styles.homeOption} ${activeTab === "overview" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("overview")}
          >
            <img src={overviewImage} alt="Overview" />
            <span>Overview</span>
          </div>
          <div
            className={`${styles.homeOption} ${activeTab === "myNotes" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("myNotes")}
          >
            <img src={myNotes} alt="My Notes" />
            <span>My Notes</span>
          </div>
          <div
            className={`${styles.homeOption} ${activeTab === "myTeachers" ? styles.homeActive : ""}`}
            onClick={() => handleTabChange("myTeachers")}
          >
            <img src={myTeachers} alt="My Teachers" />
            <span>My Teachers</span>
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
          {activeTab === "overview" && <OverviewPage handleTabChange={handleTabChange} />}
          {activeTab === "myNotes" && <MyNotesPage />}
          {activeTab === "myTeachers" && <MyTeachersPage teachers={student.hiredTeachers} />}
          {activeTab === "settings" && <SettingsPage />}
          {activeTab === "support" && <SupportPage />}
        </div>
      </div>
    </div>
  );
}

export default Home;
