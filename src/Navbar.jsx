// Navbar.js
//import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css";

const Navbar = ({ onSearchChange }) => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", 
    display: "flex", justifyContent: "space-between", padding: 10}}>
        <nav>
            <a>Start</a>
            <a>Nyheter</a>
            <a>Poddar & Program</a>
            <a>Direkt</a>
            <a>Min sida</a>
        </nav>
    <div style={{ backgroundColor: "black", 
    display: "flex"}}>
      <input
        type="text"
        placeholder="Search channels"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    </div>
  );
};

Navbar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Navbar;
