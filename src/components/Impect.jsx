import React from "react";
import "./Impect.css";
import { FaCloud, FaSolarPanel, FaUsers, FaRupeeSign } from "react-icons/fa";
import image11 from "../assets/images/co2-icon.png"
import solarhome from "../assets/images/solar-home.png"
import person from "../assets/images/persons.png"
import payback from "../assets/images/payback-icon.png"

const Impact = () => {
  const impactData = [
    {
      icon: image11,
      value: "20,625 Tons",
      label: "CO2 Emissions Reduced",
    },
    {
      icon: solarhome,
      value: "1+",
      label: "MW Installed",
    },
    {
      icon: person,
      value: "5 Lakh",
      label: "Lives Impacted",
    },
    {
      icon: payback,
      value: "₹141 Cr",
      label: "Saved Annually",
    },
  ];

  return (
    <section className="impact-section">
      <div className="impact-head">
        <h2>Impact</h2>
      </div>
      <div className="impact-container">
        {impactData.map((item, index) => (
          <div className="impact-card" key={index}>
            <div className="impact-card-in">
            <img src={item.icon}/>
            </div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
