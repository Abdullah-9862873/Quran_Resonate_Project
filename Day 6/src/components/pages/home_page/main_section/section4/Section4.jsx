import React from "react";
import { useNavigate } from "react-router-dom";
import "./section4.css";
import TeachersData from "../../../findTeachers/Teachers_Data.jsx"; 

function Section4() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/find-teachers");
  };

  const handleHireClick = (id) => {
    navigate(`/${id}`);
  };

  const topTeachers = TeachersData.slice(0, 4); 

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
          {topTeachers.map((teacher) => (
            <div key={teacher.id} className="profile-card">
              <div>
                <img src={teacher.profilePhotoUrl} alt={teacher.name} />
              </div>
              <div className="name">{teacher.name}</div>
              <div className="languages">{teacher.languages.join(", ")}</div>
              <div>Starting from ${teacher.packages[0].payPerMonth}/month</div>
              <button onClick={() => handleHireClick(teacher.id)}>Hire</button>
            </div>
          ))}
        </div>
      </div>
      <div className="borderline"></div>
    </div>
  );
}

export default Section4;
