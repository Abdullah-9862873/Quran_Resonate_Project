import React from "react";
import styles from "./MyTeachers.module.css"; // Import the CSS module
import teachersData from "../../../../findTeachers/Teachers_Data"; // Assuming correct path

function MyTeachersPage() {
  // Mock data for the logged-in student's hired teachers
  const studentHiredTeachers = [
    { teacherName: "Hafiz Amir", contact: "hafizamir@example.com" },
    { teacherName: "Hafiz Ahmed", contact: "hafizahmed@example.com" },
  ];

  // Match hired teacher names with teachersData to get full details
  const hiredTeachers = studentHiredTeachers.map((teacherInfo) => {
    const teacher = teachersData.find((t) => t.name === teacherInfo.teacherName);
    return teacher ? { ...teacher, contact: teacherInfo.contact } : null;
  }).filter(Boolean); // Filter out null if teacher not found

  return (
    <div className={styles.myTeachersContainer}>
      <h2>My Teachers</h2>
      {hiredTeachers.length > 0 ? (
        <div className={styles.teachersList}>
          {hiredTeachers.map((teacher, index) => (
            <div key={index} className={styles.teacherCard}>
              <img
                src={teacher.profilePhotoUrl}
                alt={teacher.name}
                className={styles.teacherPhoto}
              />
              <div className={styles.teacherDetails}>
                <h3>{teacher.name}</h3>
                <p>Location: {teacher.location}</p>
                <p>Languages: {teacher.languages.join(", ")}</p>
                <p>Contact: {teacher.contact}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No teachers hired yet.</p>
      )}
    </div>
  );
}

export default MyTeachersPage;
