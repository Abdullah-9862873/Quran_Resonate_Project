import React from "react";
import { Link } from "react-router-dom";
import styles from "./Overview.module.css"; 

function Overview({ handleTabChange }) {
  return (
    <div>
      <h3 className={styles.heading}>Notes</h3>
      <div className={styles.homeTabButtons}>
        <button
          className={`${styles.homeTab} ${styles.homeActive}`}
          onClick={() => handleTabChange("myTeachers")} // Click here triggers the "My Teachers" tab change
        >
          My Teachers
        </button>
        <button
          className={styles.homeTab}
          onClick={() => handleTabChange("myNotes")} // Click here triggers the "My Notes" tab change
        >
          My Notes
        </button>
      </div>

      <h3 className={styles.heading}>Quick Action</h3>
      <div className={styles.homeQuickAction}>
        <Link to="/post-job" className={styles.homeCard}>
          <div className={styles.homeIcon}>📢</div>
          <h4 className={styles.cardTitle}>Post a Job</h4>
          <p>Post a job requirement to hire teachers.</p>
        </Link>

        <Link to="/find-teachers" className={styles.homeCard}>
          <div className={styles.homeIcon}>🔍</div>
          <h4 className={styles.cardTitle}>Find Teachers</h4>
          <p>Find teachers.</p>
        </Link>

        <div className={styles.homeCard} onClick={() => handleTabChange("support")}>
          <div className={styles.homeIcon}>🛎️</div>
          <h4 className={styles.cardTitle}>Contact Support</h4>
          <p>Our team is always here to help.</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
