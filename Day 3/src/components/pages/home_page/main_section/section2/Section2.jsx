import React from "react";
import "./section2.css";
import Section2_Image1 from "../../../../images/home_page_images/section2-image1.png";
import Section2_Image2 from "../../../../images/home_page_images/section2-image2.png";
import Section2_Image3 from "../../../../images/home_page_images/section2-image3.png";

function Section2() {
  return (
    <div>
      <div className="section2-parent">
        <h1>What does Qari.io do?</h1>
        <p>
          Qari.io helps you connect with expert Qaris, certified by our team.
        </p>
        <div className="image-bundle">
          <div className="img1">
            <img src={Section2_Image1} alt="image1" />
            <h2>Find the right teacher</h2>
            <p>
              With our range of filters, like languages, countries, experience,
              you can find the exact teacher you are looking for.
            </p>
          </div>
          <div className="img2">
            <img src={Section2_Image2} alt="image2" />
            <h2>Online classes</h2>
            <p>
              All the classes are held online, so wherever you are in the world,
              you can learn the beautiful Quran.
            </p>
          </div>
          <div className="img3">
            <img src={Section2_Image3} alt="image3" />
            <h2>Paid Monthly</h2>
            <p>
              Students are charged on a monthly basis; only when they hire a
              teacher that they like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
