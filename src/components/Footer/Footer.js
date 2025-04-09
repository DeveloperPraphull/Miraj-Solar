import React from "react";
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram 
} from "react-icons/fa";
import QuoteForm from "../Button/Quote";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Miraj<span>$olar.com</span></h2>
          <p>Making solar <span className="green">Easy</span> </p>
        </div>

        <div className="footer-links">
          <ul>
            {[

              { name: "ABOUT US", link: "/AboutPage" },
              { name: "CONTACT US", link: "/contactus" },
              { name: "SOLAR CALCULATOR", link: "/solar-calculator" },
              { name: "SOLAR PANEL FOR HOME", link: "/Residencal" },
              { name: "SOLAR PANEL FOR BUSINESS", link: "/Commercial" },
              { name: "SOLAR PANEL FOR HOUSING SOCIETY", link: "/Society" }
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="footer-contact">
          <QuoteForm/>
          <p><FaPhone /> <Link to="tel:8989909074">8989909074</Link></p>
          <p><FaEnvelope /> <Link to="mailto:sales@mirajsolar.com">sales@mirajsolar.com</Link></p>
          <p><FaMapMarkerAlt /> <Link to="https://g.co/kgs/DQSCyQC"> 300A, Ground Floor, Anoop Nagar Near Shaikh Super Store , Indore, India - 452018 </Link> </p>

          <div className="social-icons">
            <Link to="https://www.facebook.com/share/14E8iV3Cw2h/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            <Link to="https://www.instagram.com/mirajsolar__rooftopsolar?igsh=MTg3cjBrcHZjYndkaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <h3>Our Locations</h3>
        <div className="locations">
          <p><strong>MADHYA PRADESH</strong> • Solar in Indore • Solar in Dewas • Solar in Ujjain • Solar in Bhopal • Solar in Sehore • Solar in Jabalpur • Solar in Katni • Solar in Satna • Solar in Rewa • Solar in Mandla • Solar in Seoni • Solar in Narsinghpur • Solar in Damoh  • Solar in Gwalior </p>
          <p><strong>MAHARASHTRA</strong> • Solar in Pune • Solar in Nagpur</p>
          <p><strong>UTTAR PRADESH</strong> • Solar in Lucknow • Solar in Kanpur</p>
        </div>

        <div className="footer-policy">
          <p>Disclaimer Policy | Privacy Policy | Sitemap</p>
          <p>Copyright © {new Date().getFullYear()} Miraj$olar | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;