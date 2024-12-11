import React, { useState, useEffect } from "react";
import styles from "./Settings.module.css"; // Import the CSS module
import studentsData from "../../TeachersData.jsx"; // Path to your data file
import ProfilePhoto from "../../../../../images/afterLogin-student-images/profilePhoto.jpg";
import CoverPhoto from "../../../../../images/afterLogin-student-images/cover.png";

function Settings() {
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState(null);
  const [message, setMessage] = useState("");
  
  // Dummy logged-in student's ID (you can replace this with real authentication logic)
  const loggedInStudentId = 1;

  // Fetch student data based on the logged-in student ID
  useEffect(() => {
    const studentData = studentsData.find((student) => student.id === loggedInStudentId);
    setStudent(studentData);
    setUpdatedStudent(studentData);  // To keep a copy for editing
  }, [loggedInStudentId]);

  // Handle input change for the editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent({
      ...updatedStudent,
      [name]: value,
    });
  };

  // Handle file upload for profile photo
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedStudent({
          ...updatedStudent,
          profilePhotoUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file upload for cover photo
  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedStudent({
          ...updatedStudent,
          coverPhotoUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would usually send updatedStudent to the backend to save the changes
    setStudent(updatedStudent); // Updating the displayed student data
    setMessage("Your profile has been updated successfully!"); // Success message
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsNavbar}>
        {/* Your Navbar code for Profile, Contracts, etc. */}
      </div>

      <div className={styles.profileSection}>
        <h2 className={styles.sectionHeading}>Edit Profile</h2>

        <div className={styles.profileHeader}>
          <div className={styles.profilePhotoContainer}>
            <img
              className={styles.profilePhoto}
              src={updatedStudent.profilePhotoUrl || ProfilePhoto}
              alt="Profile"
            />
            <input
              type="file"
              className={styles.fileInput}
              onChange={handleProfilePhotoChange}
            />
          </div>

          <div className={styles.coverPhotoContainer}>
            <img
              className={styles.coverPhoto}
              src={updatedStudent.coverPhotoUrl || CoverPhoto}
              alt="Cover"
            />
            <input
              type="file"
              className={styles.fileInput}
              onChange={handleCoverPhotoChange}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            {/* Set the Full Name input to readonly */}
            <input
              type="text"
              name="name"
              value={updatedStudent.name}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={updatedStudent.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={updatedStudent.dob}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={updatedStudent.country}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={updatedStudent.state}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={updatedStudent.city}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Languages</label>
            <input
              type="text"
              name="languages"
              value={updatedStudent.languages.join(", ")}
              onChange={(e) => handleChange({ target: { name: "languages", value: e.target.value.split(", ") } })}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={updatedStudent.gender}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>

        {message && <div className={styles.successMessage}>{message}</div>}
      </div>
    </div>
  );
}

export default Settings;
