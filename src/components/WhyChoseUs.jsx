import React from "react";
import "./WhyChoseUs.css";
import experienceIcon from "../assets/images/best-badge.png";
import emiIcon from "../assets/images/zero-cost.png";
import safetyIcon from "../assets/images/safety-standards.png";
import supportIcon from "../assets/images/sales-support.png";
import investmentIcon from "../assets/images/payback-icon.png";
import installationIcon from "../assets/images/installation.png";
import financeIcon from "../assets/images/finance.png";

const WhyChooseUs = () => {
  const features = [
    {
      icon: experienceIcon,
      text: "5+ Years of Experience With Pan-India Presence",
    },
    {
      icon: emiIcon,
      text: "Zero-Cost EMI & Comprehensive Insurance",
    },
    {
      icon: safetyIcon,
      text: "Designed to Meet Highest Safety Standards",
    },
    {
      icon: supportIcon,
      text: "24×7 After Sales Support",
    },
    {
      icon: investmentIcon,
      text: "Get Your Solar Investment Back in 3 to 4 Years",
    },
    {
      icon: installationIcon,
      text: "Quick & Professional Installation in 4 Weeks",
    },
    {
      icon: financeIcon,
      text: "Flexible Financing Options To Suit Every Budget",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt="Feature Icon" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
