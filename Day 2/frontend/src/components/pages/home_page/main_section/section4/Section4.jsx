import React from "react";
import { useNavigate } from "react-router-dom";
import "./section4.css";
import Qari from "../../../../images/home_page_images/qari.jpg";

function Section4() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/find-teachers");
  };

  const profiles = [
    {
      id: 1,
      imgSrc: Qari,
      name: "John Doe",
      languages: "English, Spanish",
      price: "$20/hour",
    },
    {
      id: 2,
      imgSrc: Qari,
      name: "Jane Smith",
      languages: "French, German",
      price: "$25/hour",
    },
    {
      id: 3,
      imgSrc: Qari,
      name: "Alice Brown",
      languages: "Arabic, Turkish",
      price: "$30/hour",
    },
    {
      id: 4,
      imgSrc: Qari,
      name: "Bob Johnson",
      languages: "Chinese, Japanese",
      price: "$35/hour",
    },
  ];

  return (
    <div>
      <div className="section4-parent">
        <div className="heading">
          <h2>Discover some of our best teachers</h2>
          <div className="button-outer-div">
          <button onClick={handleButtonClick}>see all teachers</button>
          </div>
        </div>
        <div className="profiles">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <div>
            <img src={profile.imgSrc} alt={profile.name} />
          </div>
          <div className="name">{profile.name}</div>
          <div className="languages">{profile.languages}</div>
          <div>Starting from {profile.price}</div>
          <button>Hire</button>
        </div>
      ))}
    </div>
      </div>
      <div className="borderline"></div>
    </div>
  );
}

export default Section4;
