import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import NavbarSection from "../home_page/header_section/Navbar_Section";
import FooterSection from "../home_page/footer_section/Footer";
import "./find_teacher.css";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import countries from "./Countries";
import { Languages } from "./Languages";
import QariImage from "../../images/home_page_images/qari.jpg";

const LanguageMap = Languages.reduce((acc, lang) => {
  acc[lang.label.toLowerCase()] = lang.value;
  return acc;
}, {});

function FindTeacher() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [filterMode, setFilterMode] = useState(false);

  const navigate = useNavigate();

  const teachers = useMemo(() => [
    {
      id: 1,
      name: "John Doe",
      country: "United States",
      languages: ["English", "Spanish"],
      price: "$20/hour",
      image: QariImage,
      gender: "Male",
    },
    {
      id: 2,
      name: "Jane Smith",
      country: "France",
      languages: ["French", "English"],
      price: "$25/hour",
      image: QariImage,
      gender: "Female",
    },
    {
      id: 3,
      name: "Akira Tanaka",
      country: "Japan",
      languages: ["Japanese", "English"],
      price: "$30/hour",
      image: QariImage,
      gender: "Male",
    },
    {
      id: 4,
      name: "Maria Garcia",
      country: "Spain",
      languages: ["Spanish", "English"],
      price: "$22/hour",
      image: QariImage,
      gender: "Female",
    },
    {
      id: 5,
      name: "Akram",
      country: "United States",
      languages: ["English"],
      price: "$18/hour",
      image: QariImage,
      gender: "Male",
    },
  ], []);

  useEffect(() => {
    let result = [];

    if (searchMode) {
      result = teachers.filter((teacher) => {
        const queryLower = searchQuery.toLowerCase();
        const languageMatch = teacher.languages.some(lang =>
          lang.toLowerCase().includes(queryLower)
        );
        return (
          teacher.name.toLowerCase().includes(queryLower) ||
          teacher.country.toLowerCase().includes(queryLower) ||
          languageMatch ||
          teacher.gender.toLowerCase().includes(queryLower) ||
          teacher.price.toLowerCase().includes(queryLower)
        );
      });
    } else if (filterMode) {
      result = teachers.filter(
        (teacher) =>
          (selectedCountry === "" || teacher.country === selectedCountry) &&
          (selectedLanguage === "" || teacher.languages.some(lang =>
            lang.toLowerCase() === selectedLanguage.toLowerCase()
          )) &&
          (selectedGender === "" || teacher.gender === selectedGender)
      );
    } else {
      result = teachers;
    }

    setFilteredTeachers(result);
  }, [searchMode, filterMode, searchQuery, selectedCountry, selectedLanguage, selectedGender, teachers]);

  const handleSearchClick = () => {
    setSearchQuery(tempSearchQuery);
    setSearchMode(true);
    setFilterMode(false);
    setShowFilters(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(tempSearchQuery);
      setSearchMode(true);
      setFilterMode(false);
      setShowFilters(false);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    if (!showFilters) {
      setFilteredTeachers([]);
      setSearchMode(false);
      setFilterMode(false);
    } else {
      setFilteredTeachers(teachers);
    }
  };

  const handleResetFilters = () => {
    setSelectedCountry("");
    setSelectedLanguage("");
    setSelectedGender("");
    setSearchQuery("");
    setTempSearchQuery("");
    setSearchMode(false);
    setFilterMode(false);
    setShowFilters(false);
    setFilteredTeachers(teachers);
  };

  const handleApplyFilters = () => {
    const filteredResults = teachers.filter(
      (teacher) =>
        (selectedCountry === "" || teacher.country === selectedCountry) &&
        (selectedLanguage === "" || teacher.languages.some(lang =>
          lang.toLowerCase() === selectedLanguage.toLowerCase()
        )) &&
        (selectedGender === "" || teacher.gender === selectedGender)
    );

    setFilteredTeachers(filteredResults);
    setSearchMode(false);
    setFilterMode(true);
    setShowFilters(false);
  };

  const handleHireClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <NavbarSection />
      <div className="findTeacher-parent">
        <div className="input-field-parent">
          <div className="input-field-and-icons">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search teachers, countries, qualifications and keywords"
              value={tempSearchQuery}
              onChange={(e) => setTempSearchQuery(e.target.value)}
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
                <option key={index} value={language.label}>
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
            <h5>Gender</h5>
            <label>
              <input
                type="radio"
                value="Male"
                checked={selectedGender === "Male"}
                onChange={() => setSelectedGender("Male")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={selectedGender === "Female"}
                onChange={() => setSelectedGender("Female")}
              />
              Female
            </label>
            <div className="buttons">
              <button onClick={handleResetFilters}>Reset Filters</button>
              <button onClick={handleApplyFilters}>Apply Filters</button>
            </div>
          </div>
        )}

        {!showFilters && filteredTeachers.length > 0 && (
          <div className="teachers-list">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <img src={teacher.image} alt={teacher.name} />
                <h4>{teacher.name}</h4>
                <p>{teacher.country}</p>
                <div>{teacher.price}</div>
                <button onClick={() => handleHireClick(teacher.id)}>Hire</button>
              </div>
            ))}
          </div>
        )}

        {!showFilters && filteredTeachers.length === 0 && (
          <div className="no-results-message">
            {searchMode
              ? 'No teachers found with the given search criteria. Please adjust your search.'
              : filterMode
              ? 'No teachers found with the selected filters. Please adjust your filters.'
              : 'No teachers found. Please adjust your search or filters.'}
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}

export default FindTeacher;
