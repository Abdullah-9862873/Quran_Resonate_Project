import React from "react";
import "./myQuery.css";
import Navbar from "../home_page/header_section/Navbar_Section.jsx";

function MyQuery() {
  return (
    <div className="my-query-container">
      <Navbar />
      <div className="my-query-content">
        <h2>My Queries</h2>
        <p>No Query yet</p>
      </div>
    </div>
  );
}

export default MyQuery;
