import React, { useState, useRef, useEffect } from "react";
import "./Jobs_Section.css";
import Navbar from "../../home_page/header_section/Navbar_Section";
import Footer from "../../home_page/footer_section/Footer";
import { HiCurrencyDollar } from "react-icons/hi";
import { GiLevelFourAdvanced } from "react-icons/gi";
import jobsData from "../Jobs_Data/Jobs_Data";
import studentsData from "../Students_Data/Students_Data";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Languages } from "../../findTeachers/Languages";
import Slider from "../Slider/Slider";

function Jobs_Section() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select language");
  const [selectedPayRange, setSelectedPayRange] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const sliderRef = useRef(null);
  const filtersRef = useRef(null);

  const handleSearchClick = () => {
    setSearchQuery(tempSearchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(tempSearchQuery);
    }
  };

  // Apply filtering when searchQuery changes
  useEffect(() => {
    const newFilteredJobs = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(newFilteredJobs);
  }, [searchQuery]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.label);
    setShowLanguageDropdown(false);
  };

  const handleReset = () => {
    setSelectedLanguage("Select language");
    setSearchQuery("");
    setTempSearchQuery("");
    setSelectedPayRange("");
    setSelectedLevel("");
    setFilteredJobs(jobsData);
  };

  const handleApply = () => {
    const newFilteredJobs = jobsData.filter((job) => {
      const matchesSearchQuery =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLanguage =
        selectedLanguage === "Select language" ||
        job.languages.includes(selectedLanguage);

      const matchesPayRange =
        selectedPayRange === "" ||
        (selectedPayRange === "$10 - $70" &&
          job.price >= 10 &&
          job.price <= 70) ||
        (selectedPayRange === "$71 - $150" &&
          job.price > 70 &&
          job.price <= 150) ||
        (selectedPayRange === "$151+" && job.price > 150);

      const matchesLevel = selectedLevel === "" || job.level === selectedLevel;
      setShowFilters(false);
      setSelectedLanguage("Select language");
      setSearchQuery("");
      setTempSearchQuery("");
      setSelectedPayRange("");
      setSelectedLevel("");

      return (
        matchesSearchQuery && matchesLanguage && matchesPayRange && matchesLevel
      );
    });

    setFilteredJobs(newFilteredJobs);
  };

  const handlePayRangeChange = (range) => {
    setSelectedPayRange((prevRange) => (prevRange === range ? "" : range));
  };

  const handleLevelChange = (level) => {
    setSelectedLevel((prevLevel) => (prevLevel === level ? "" : level));
  };

  const handleJobClick = (job) => {
    const associatedStudent = studentsData.find(
      (student) => student.id === job.id
    );
    setSelectedJob({ ...job, student: associatedStudent });
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        closeSlider();
      }
    };

    if (showFilters || isSliderOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters, isSliderOpen]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (filtersRef.current && filtersRef.current.contains(event.target)) {
        event.stopPropagation();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newFilteredJobs = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(newFilteredJobs);
  }, [searchQuery]);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        {/* Search Navigator */}
        <div className="input-field-parent">
          <div className="input-field-and-icons">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search teachers, countries, qualifications, and keywords"
              value={tempSearchQuery}
              onChange={(e) => setTempSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <CiFilter className="filter" onClick={toggleFilters} />
            <FaSearch className="search" onClick={handleSearchClick} />
          </div>
          {/* Toggle Options */}
          {showFilters && (
            <div className="toggle_options" ref={filtersRef}>
              <div className="filter-section">
                <div className="filter-title">Filter</div>

                <div className="language-section">
                  <div className="language-label">Languages</div>
                  <div
                    className="language-dropdown-toggle"
                    onClick={toggleLanguageDropdown}
                  >
                    {selectedLanguage}
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {showLanguageDropdown && (
                    <div className="language-dropdown">
                      {Languages.map((lang) => (
                        <div
                          key={lang.value}
                          className="language-option"
                          onClick={() => handleLanguageSelect(lang)}
                        >
                          {lang.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="range_and_level_parent">
                  <div className="pay_range">
                    <div>Pay range/month</div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="pay1"
                        checked={selectedPayRange === "$10 - $70"}
                        onChange={() => handlePayRangeChange("$10 - $70")}
                      />
                      <label htmlFor="pay1">$10 - $70</label>
                    </div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="pay2"
                        checked={selectedPayRange === "$71 - $150"}
                        onChange={() => handlePayRangeChange("$71 - $150")}
                      />
                      <label htmlFor="pay2">$71 - $150</label>
                    </div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="pay3"
                        checked={selectedPayRange === "$151+"}
                        onChange={() => handlePayRangeChange("$151+")}
                      />
                      <label htmlFor="pay3">$151+</label>
                    </div>
                  </div>

                  <div className="level_range">
                    <div>Level of student's expertise</div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="beginner"
                        checked={selectedLevel === "Beginner"}
                        onChange={() => handleLevelChange("Beginner")}
                      />
                      <label htmlFor="beginner">Beginner</label>
                    </div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="intermediate"
                        checked={selectedLevel === "Intermediate"}
                        onChange={() => handleLevelChange("Intermediate")}
                      />
                      <label htmlFor="intermediate">Intermediate</label>
                    </div>
                    <div className="checkbox-option">
                      <input
                        type="checkbox"
                        id="advanced"
                        checked={selectedLevel === "Advanced"}
                        onChange={() => handleLevelChange("Advanced")}
                      />
                      <label htmlFor="advanced">Advanced</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="buttons">
                <button onClick={handleReset}>Reset Filters</button>
                <button onClick={handleApply}>Apply Filters</button>
              </div>
            </div>
          )}
        </div>

        {/* Jobs */}
        <div className="jobs">
          {filteredJobs.length === 0 ? (
            <p>No jobs found</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="casing"
                onClick={() => handleJobClick(job)}
              >
                <div>
                  <div className="title">{job.title}</div>
                  <div className="description">{job.description}</div>
                </div>
                <div className="section2">
                  <div className="priceLevelParent">
                    <div className="price">
                      <HiCurrencyDollar className="dollarImage" />
                      <div>${job.price} / month</div>
                    </div>
                    <div className="level">
                      <GiLevelFourAdvanced className="levelImage" />
                      <div>{job.level}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {isSliderOpen && (
        <div className="slider-overlay">
          <Slider ref={sliderRef} job={selectedJob} onClose={closeSlider} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Jobs_Section;
