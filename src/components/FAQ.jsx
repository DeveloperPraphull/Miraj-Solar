import React, { useState } from "react";
import "./FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What are the benefits of installing solar panels on my home?",
    answer:  "Installation of  has many benefits. The first and most useful benefit is that you can save money on your electricity bills, followed by getting access to clean energy and enhancing the value of your property. The house owners can also make a contribution to a greener future while enjoying the benefits of sustainable energy solutions. At Freyr Energy, we have a team of experts who can help you with the installation process.",
  },
  {
    question: "What are the applications of solar power?",
    answer: "Solar power is used in homes, businesses, agriculture, street lighting, and remote areas.",
  },
  {
    question: "Can I get an App to monitor my Solar System?",
    answer: "Yes, many apps allow real-time monitoring of solar panel performance and energy production.",
  },
  {
    question: "How much do solar panels cost for a business?",
    answer: "The cost depends on the size and type of panels, typically ranging from $10,000 to $50,000.",
  },
  {
    question: "How much does a 1kW solar panel cost?",
    answer: "A 1kW solar panel system costs around $1,000 to $3,000 depending on quality and location.",
  },
  {
    question: "Who offers an affordable solar panel subsidy?",
    answer: "Governments and energy companies offer subsidies; check local programs for details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} />
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
