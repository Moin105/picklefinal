import React, { useState } from 'react';
import './DropDownNav.css'; // Import CSS for styling

const DropdownNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a className="menu-toggle" onClick={toggleDropdown}>
            &#9776; {/* Menu icon */}
          </a>
        </li>
      </ul>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default DropdownNav;
