import React, { useState } from 'react'
import '../Header/Header.css'
import { LuPhone } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import QuoteForm from '../Button/Quote';
import { Link } from 'react-router-dom';


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <h2>Miraj$olar<span>.com</span></h2>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`nav-in ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li className="dropdown">
            <Link to="#">ROOFTOP SOLAR ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/residencal">Residential</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
              <li><Link to="/society">Society</Link></li>
            </ul>
          </li>
          <li><Link to="/AboutPage">ABOUT US</Link></li>
          {/* <li className="dropdown">
            <Link to="#">MORE ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </li> */}
        </ul>

        {/* Contact & Quote Button */}
        <div className="contact">
          <Link to="tel:8989909074">
            <button className="phone">
              <LuPhone /> 8989909074
            </button>
          </Link>

          <QuoteForm />
        </div>
      </nav>
    </div>
  )
}