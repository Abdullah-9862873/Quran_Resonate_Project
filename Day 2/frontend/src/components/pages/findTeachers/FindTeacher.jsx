import React, { useState } from "react";
import Navbar_Section from "../home_page/header_section/Navbar_Section";
import "./find_teacher.css";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import countries from "./Countries";
import { Languages, LanguageMap } from "./Languages";

function FindTeacher() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [filterMode, setFilterMode] = useState(false);

  const teachers = [
    { id: 1, name: "John Doe", country: "United States", language: "EN", gender: "Male" },
    { id: 2, name: "Jane Smith", country: "France", language: "FR", gender: "Female" },
    { id: 3, name: "Akira Tanaka", country: "Japan", language: "JA", gender: "Male" },
    { id: 4, name: "Maria Garcia", country: "Spain", language: "ES", gender: "Female" },
    { id: 5, name: "Akram", country: "United States", language: "EN", gender: "Male" },
  ];

  const filterBySearchQuery = () => {
    const queryLower = searchQuery.toLowerCase();
    const result = teachers.filter((teacher) => {
      const languageMatch = LanguageMap[queryLower] ? teacher.language === LanguageMap[queryLower] : true;
      return (
        teacher.name.toLowerCase().includes(queryLower) ||
        teacher.country.toLowerCase().includes(queryLower) ||
        languageMatch ||
        teacher.gender.toLowerCase().includes(queryLower)
      );
    });

    setFilteredTeachers(result);
    setSearchMode(true);
    setFilterMode(false);
    if (result.length > 0) {
      setSearchQuery("");
    }
  };

  const filterBySelectedFilters = () => {
    const result = teachers.filter(
      (teacher) =>
        (selectedCountry === "" || teacher.country === selectedCountry) &&
        (selectedLanguage === "" || teacher.language === selectedLanguage) &&
        (selectedGender === "" || teacher.gender === selectedGender)
    );
    setFilteredTeachers(result);
    setFilterMode(true); 
    setSearchMode(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleResetFilters = () => {
    setSelectedCountry("");
    setSelectedLanguage("");
    setSelectedGender("");
    setSearchQuery("");
    setFilteredTeachers([]);
  };

  const handleApplyFilters = () => {
    filterBySelectedFilters(); 
    setShowFilters(false);
    setSearchQuery(""); 
    setSelectedCountry("");
    setSelectedLanguage("");
    setSelectedGender("");
  };

  const handleSearchClick = () => {
    filterBySearchQuery(); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      filterBySearchQuery();
    }
  };

  return (
    <div>
      <Navbar_Section />
      <div className="findTeacher-parent">
        <div className="input-field-parent">
          <div className="input-field-and-icons">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search teachers, countries, qualifications and keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <CiFilter className="filter" onClick={toggleFilters} />
            <FaSearch className="search" onClick={handleSearchClick} />
          </div>
        </div>

        {showFilters && (
          <div className="filter-clicked">
            <h3>Filter</h3>
            <h5>Languages</h5>
            <select
              name="Languages"
              id="languages"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              {Languages.map((language, index) => (
                <option key={index} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
            <h5>Countries</h5>
            <select
              name="Countries"
              id="countries"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <h5>Filter by Gender</h5>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={selectedGender === "Male"}
                onChange={() => setSelectedGender("Male")}
              />
              <label htmlFor="male">Male</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={selectedGender === "Female"}
                onChange={() => setSelectedGender("Female")}
              />
              <label htmlFor="female">Female</label>
              <br />
            </div>
            <div className="buttons">
              <button onClick={handleResetFilters}>Reset All</button>
              <button onClick={handleApplyFilters}>Apply</button>
            </div>
          </div>
        )}

        {filteredTeachers.length > 0 ? (
          <div className="teachers-list">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <h4>{teacher.name}</h4>
                <p>Country: {teacher.country}</p>
                <p>Language: {teacher.language}</p>
                <p>Gender: {teacher.gender}</p>
              </div>
            ))}
          </div>
        ) : (searchMode || filterMode) && (
          <div className="no-results-message">
            <p>Search something else, it doesn't match.</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default FindTeacher;
