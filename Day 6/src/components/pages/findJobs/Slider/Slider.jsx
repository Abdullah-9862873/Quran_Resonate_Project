import React, { forwardRef, useEffect } from "react";
import "./slider.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { PiOfficeChairDuotone } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";

const Slider = forwardRef(({ job, onClose }, ref) => {
  const student = job.student;

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="slider" ref={ref}>
      <div className="main">
        <div onClick={onClose}>
          <FaArrowLeft className="arrow" onClick={onClose} />
        </div>

        <div className="job-data">
          <h2>{job.title}</h2>
          <p>{job.description}</p>
        </div>

        {student && (
          <div className="student-details">
            <h2>Student Details</h2>
            <div className="student-item">
              <div className="age-and-level">
                <div>
                  <p>{student.age}</p>
                  <div className="enclosed-casing">
                    <FaCakeCandles />
                    <span> Age</span>
                  </div>
                </div>
                <div>
                  <p>{student.level}</p>
                  <div className="enclosed-casing">
                    <GiLevelFourAdvanced />
                    <span>Level</span>
                  </div>
                </div>
              </div>
              <h4>Desired Time Slots:</h4>
              <div className="time-slots-container">
                {Object.entries(student.desiredTimeSlots).map(
                  ([day, slots], index) => {
                    const rowIndex = Math.floor(index / 2);
                    return (
                      <div
                        className={`time-slot-row row-${rowIndex}`}
                        key={day}
                      >
                        <div className="day-name">{day}</div>
                        <div className="time-range">{slots.join(", ")}</div>
                      </div>
                    );
                  }
                )}
              </div>

              <h4>Terms:</h4>
              <div className="terms-heading">
                <div>
                  <p className="terms">${student.terms.payPerMonth}</p>
                  <div className="terms-description">
                    <BiSolidDollarCircle className="dollar-logo" /> Pay / Month
                  </div>
                </div>
                <div>
                  <p className="terms">{student.terms.classesPerWeek}</p>
                  <div className="terms-description">
                    <PiOfficeChairDuotone className="office-logo" /> Classes /
                    week
                  </div>
                </div>
                <div>
                  <p className="terms">{student.terms.classDuration}</p>
                  <div className="terms-description">
                    <CiTimer className="timer-logo" /> Class Duration (min)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Apply on Job Button */}
        <div className="apply-button-container">
          <button className="apply-button">Apply on Job</button>
        </div>
      </div>
    </div>
  );
});

export default Slider;
