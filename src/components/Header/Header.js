import React, {useState} from 'react'
import '../Header/Header.css'
import { LuPhone } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import QuoteForm from '../Button/Quote';

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
          <li><a href="/">HOME</a></li>
          <li className="dropdown">
            <a href="#">ROOFTOP SOLAR ▼</a>
            <ul className="dropdown-menu">
              <li><a href="/residencal">Residential</a></li>
              <li><a href="/commercial">Commercial</a></li>
              <li><a href="/society">Society</a></li>
            </ul>
          </li>
          <li><a href="/AboutPage">ABOUT US</a></li>
          <li className="dropdown">
            <a href="#">MORE ▼</a>
            <ul className="dropdown-menu">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </li>
        </ul>

        {/* Contact & Quote Button */}
        <div className="contact">
          <button className="phone">
            <LuPhone /> 9981683337
          </button>
          <QuoteForm/>
        </div>
      </nav>
    </div>
  )
}
