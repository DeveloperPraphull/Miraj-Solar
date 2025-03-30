import React from "react";
import '../Footer/Footer.css';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaYoutube, FaLinkedin
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
              { name: "NEWS", link: "/news" },
              { name: "BLOGS", link: "/blogs" },
              { name: "CAREERS", link: "/careers" },
              { name: "ABOUT US", link: "/about" },
              { name: "CONTACT US", link: "/contact" },
              { name: "CASE STUDIES", link: "/case-studies" },
              { name: "SOLAR CALCULATOR", link: "/solar-calculator" },
              { name: "SOLAR PANEL FOR HOME", link: "/solar-home" },
              { name: "SOLAR PANEL FOR BUSINESS", link: "/solar-business" },
              { name: "SOLAR PANEL FOR HOUSING SOCIETY", link: "/solar-society" }
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="footer-contact">
          <QuoteForm/>
          <p><FaPhone /> <a href="tel:9981683337">9981683337</a></p>
          <p><FaEnvelope /> <a href="mailto:info@mirajsolar.com">info@mirajsolar.com</a></p>
          <p><FaMapMarkerAlt /> <a href="https://g.co/kgs/DQSCyQC"> 300 A, Ground Floor, Anoop Nagar, Indore, India - 452018 </a> </p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
