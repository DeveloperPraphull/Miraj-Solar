import React, { useState } from 'react';
import '../Header/Header.css';
import { LuPhone } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import QuoteForm from '../Button/Quote';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>Miraj$olar<span>.com</span></h2>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`nav-in ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>ROOFTOP SOLAR ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/residencal" onClick={closeMenu}>Residential</Link></li>
              <li><Link to="/commercial" onClick={closeMenu}>Commercial</Link></li>
              <li><Link to="/society" onClick={closeMenu}>Society</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/AboutPage" onClick={closeMenu}>ABOUT US</Link>
          </li>
        </ul>

        {/* Contact & Quote Buttons */}
        <div className="contact">
          <a href="tel:8989808097">
            <button className="phone">
              <LuPhone /> 8989808097
            </button>
          </a>

          <QuoteForm />
        </div>
      </nav>
    </header>
  );
}
