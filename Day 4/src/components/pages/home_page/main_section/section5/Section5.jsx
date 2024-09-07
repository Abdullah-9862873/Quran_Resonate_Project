import React from 'react';
import "./section5.css";
import QuranImage2 from "../../../../images/home_page_images/quran-pic2.png";

function Section5() {
  return (
    <div>
      <div className="section5-parent">
        <div>
          <h1>An opportunity for Qaris</h1>
          <p>
            Qari.io is an opportunity for Qaris (teachers) to make a good living while not having to leave the teaching field of Islam
          </p>
          <button className="apply-button">Apply as a Qari</button>
        </div>
        <div>
          <img src={QuranImage2} alt="quran" />
        </div>
      </div>
    </div>
  )
}

export default Section5;
