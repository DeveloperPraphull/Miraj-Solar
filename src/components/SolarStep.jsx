import React from "react";
import "./SolarStep.css";
import consultationIcon from "../assets/images/person.png";
import proposalIcon from "../assets/images/headset.png";
import installationIcon from "../assets/images/installation.png";
import solarPoweredIcon from "../assets/images/solar.png";

const SolarSteps = () => {
  const steps = [
    {
      icon: consultationIcon,
      title: "Book a Free Consultation",
      description:
        "Talk to our team to understand your system size, pricing, subsidy eligibility and explore finance options",
      buttonText: "Book a Consultation Now",
    },
    {
      icon: proposalIcon,
      title: "Review Proposal & Confirm Order",
      description:
        "Review your proposal and approve costing & design specification on Freyr Energy App",
      buttonText: "Download Now",
    },
    {
      icon: installationIcon,
      title: "Track Project Installation",
      description:
        "We manage the project from start to finish including subsidy documentation, liaisoning and net-metering",
      buttonText: "Download Now",
    },
    {
      icon: solarPoweredIcon,
      title: "Your Site is Solar Powered",
      description:
        "We offer 24×7 service support and proactive maintenance to ensure that the system operates at peak efficiency with Freyr Energy App",
      buttonText: "Download Now",
    },
  ];

  return (
    <section className="solar-steps">
      <h2>Choose Solar in 4 Easy Steps</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <img src={step.icon} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <button>{step.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarSteps;
