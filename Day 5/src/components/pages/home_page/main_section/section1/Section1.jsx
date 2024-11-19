import React from "react";
import "./section1.css";
import QuranImage from "../../../../images/home_page_images/quran.png";

function Section1() {
  return (
    <div>
      <div className="section1-parent">
        <div>
          <h1>Find and hire expert Qaris from around the world</h1>
          <p>
            Hire Quran teachers on monthly basis and learn online from anywhere
            in the world. Suitable and safe for children and adults.
          </p>
        </div>
        <div>
          <img src={QuranImage} alt="quran" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
