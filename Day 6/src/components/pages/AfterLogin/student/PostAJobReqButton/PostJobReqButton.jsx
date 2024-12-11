import React, { useState } from "react";
import Navbar from "../../../home_page/header_section/Navbar_Section.jsx";
import "./postAJobReq.css";

function PostJobReqButton() {
  const [schedule, setSchedule] = useState({
    Sunday: { enabled: false, times: [] },
    Monday: { enabled: false, times: [] },
    Tuesday: { enabled: false, times: [] },
    Wednesday: { enabled: false, times: [] },
    Thursday: { enabled: false, times: [] },
    Friday: { enabled: false, times: [] },
    Saturday: { enabled: false, times: [] },
  });

  const [desiredPay, setDesiredPay] = useState(5);
  const [languages, setLanguages] = useState([]); // State for language list
  const [inputValue, setInputValue] = useState(""); // State for language input field

  // Toggle the schedule for a day
  const handleToggleDay = (day) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));
  };

  // Add a time slot
  const handleAddTimeSlot = (day) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        times: [...prev[day].times, { from: "", to: "" }],
      },
    }));
  };

  // Update time slot
  const handleTimeChange = (day, index, field, value) => {
    setSchedule((prev) => {
      const updatedTimes = [...prev[day].times];
      updatedTimes[index][field] = value;
      return { ...prev, [day]: { ...prev[day], times: updatedTimes } };
    });
  };

  // Remove a time slot
  const handleRemoveTimeSlot = (day, index) => {
    setSchedule((prev) => {
      const updatedTimes = prev[day].times.filter((_, i) => i !== index);
      return { ...prev, [day]: { ...prev[day], times: updatedTimes } };
    });
  };

  // Increase or decrease desired pay
  const handleIncreasePay = () => setDesiredPay((prev) => prev + 1);
  const handleDecreasePay = () => setDesiredPay((prev) => (prev > 5 ? prev - 1 : prev));

  // Handle language input change
  const handleInputChange = (e) => setInputValue(e.target.value);

  // Handle Enter key press to add a language
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setLanguages([...languages, inputValue.trim()]);
      setInputValue("");
      e.preventDefault();
    }
  };

  // Remove a language
  const handleRemoveLanguage = (language) => {
    setLanguages(languages.filter((lang) => lang !== language));
  };

  return (
    <div>
      <Navbar />
      <div className="post-job-container">
        <h1 className="page-title">Post a New Job</h1>
        <p className="page-description">Please fill in the following fields to post a job.</p>

        <form className="job-form">
          {/* Job Title */}
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Looking for a qualified teacher"
              className="form-control"
            />
          </div>

          {/* Job Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Explain what you are looking for in detail"
              className="form-control"
            ></textarea>
          </div>

          {/* Expertise Level */}
          <div className="form-group">
            <label>Student's Expertise Level</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="expertiseLevel" value="beginner" />
                Beginner
              </label>
              <label>
                <input type="radio" name="expertiseLevel" value="intermediate" />
                Intermediate
              </label>
              <label>
                <input type="radio" name="expertiseLevel" value="advanced" />
                Advanced
              </label>
            </div>
          </div>

          {/* Fluent Language */}
          <div className="form-group">
            <label htmlFor="language">Teacher Must Be Fluent In</label>
            <div className="language-input">
              <input
                type="text"
                id="language"
                name="language"
                placeholder="Enter required language"
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <div className="language-list">
                {languages.map((lang, index) => (
                  <span key={index} className="language-tag">
                    {lang}
                    <button
                      type="button"
                      className="remove-language"
                      onClick={() => handleRemoveLanguage(lang)}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Teacher's Gender */}
          <div className="form-group">
            <label>Teacher's Gender</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
          </div>

          {/* Class Schedule */}
          <div className="schedule-container">
            <label>Class Schedule</label>
            <p className="timezone">Timezone: GMT+0500 (Pakistan Standard Time)</p>
            {Object.keys(schedule).map((day) => (
              <div key={day} className="day-schedule">
                <div className="day-header">
                  <span>{day}</span>
                  <input
                    type="checkbox"
                    checked={schedule[day].enabled}
                    onChange={() => handleToggleDay(day)}
                  />
                </div>
                {schedule[day].enabled && (
                  <div className="time-slots">
                    {schedule[day].times.map((time, index) => (
                      <div key={index} className="time-slot">
                        <input
                          type="time"
                          value={time.from}
                          onChange={(e) =>
                            handleTimeChange(day, index, "from", e.target.value)
                          }
                          className="time-input"
                        />
                        <span>to</span>
                        <input
                          type="time"
                          value={time.to}
                          onChange={(e) =>
                            handleTimeChange(day, index, "to", e.target.value)
                          }
                          className="time-input"
                        />
                        <button
                          type="button"
                          className="remove-time-slot-button"
                          onClick={() => handleRemoveTimeSlot(day, index)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="add-time-slot-button"
                      onClick={() => handleAddTimeSlot(day)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desired Pay Per Month */}
          <div className="form-group desired-pay">
            <label>Desired Pay Per Month *</label>
            <div className="pay-control">
              <button type="button" onClick={handleDecreasePay}>
                -
              </button>
              <span>${desiredPay}</span>
              <button type="button" onClick={handleIncreasePay}>
                +
              </button>
            </div>
          </div>

          {/* Post Job Button */}
          <div className="form-group">
            <button type="submit" className="post-job-button">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJobReqButton;
