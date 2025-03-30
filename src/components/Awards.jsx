import React from "react";
import "./Awards.css";
import award1 from "../assets/images/LwSOjaDT_400x400.jpg";
import award2 from "../assets/images/download (1).png";
import award3 from "../assets/images/approved-vendor-business-cards-preferred-provider-best-service-c-as-products-company-52508172.webp";
import award4 from "../assets/images/bis-certification-for-solar-panel-module.jpg";
import award5 from "../assets/images/download.png";
import award6 from "../assets/images/mqdefault.jpg";
import award7 from "../assets/images/download.jpeg";
import award8 from "../assets/images/download (1).jpeg";

const Awards = () => {
  const awards = [
    { img: award1, alt: "CII" },
    { img: award2, alt: "EQ 15" },
    { img: award3, alt: "Triumphs of Talent" },
    { img: award4, alt: "Leaders of Tomorrow" },
    { img: award5, alt: "Chevening" },
    { img: award6, alt: "Bridge to India" },
    { img: award7, alt: "Asia Leadership Awards" },
    { img: award8, alt: "Solar Quarter" },
  ];

  return (
    <section className="awards-section">
      <h2> Certified  and Recognition</h2>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <img src={award.img} alt={award.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
