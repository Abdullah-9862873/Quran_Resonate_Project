import React from "react";
import { Link } from "react-router-dom";
import styles from "./Support.module.css"; // Import the CSS module
import SupportImage from "../../../../../images/afterLogin-student-images/rightDisplay/support/support.jpg";

function Support() {
  return (
    <div className={styles.supportContainer}>
      <Link to="/contact" className={styles.supportLink}>
        <div className={styles.supportImageContainer}>
          <img
            src={SupportImage}
            alt="Support"
            className={styles.supportImage}
          />
          <div className={styles.supportText}>
            <h2>Send us a message</h2>
            <p>We will get back within 24 hours</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Support;
