import React, { useState } from "react";
import "./FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What are the benefits of installing solar panels on my home?",
    answer:  "Installation of  has many benefits. The first and most useful benefit is that you can save money on your electricity bills, followed by getting access to clean energy and enhancing the value of your property. The house owners can also make a contribution to a greener future while enjoying the benefits of sustainable energy solutions. At Miraj Solar, we have a team of experts who can help you with the installation process.",
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
    answer: "Miraj Solar is one of the leading companies in the solar industry in India and has been known for providing premium quality solar panels for businesses , since 2020. The cost of commercial solar panels at 3kW ranges between ₹1,80,000 to ₹2,00,000, which is between ₹60 and ₹70 cost per watt..",
  },
  {
    question: "How much does a 1kW solar panel cost?",
    answer: "At Miraj Solar, the 1kW solar panel price  varies between ₹1, 15,000 to ₹1, 30,000. This price includes many components like solar panels, mounting structures, installation services, and wiring. In addition, there is also a subsidy price of ₹30,000 for installations of 1kW solar panels, thereby decreasing the total investment needed for changing to solar energy.",
  },
  {
    question: "Who offers an affordable solar panel subsidy?",
    answer: "The Indian Government makes an effort to provide affordable solar panel subsidies, emphasizing sustainability in energy solutions. Remarkably, a scheme such as the PM Surya Ghar keeps an aim of revolutionizing the energy sector by allowing installations of solar panels on rooftops, giving priority to the middle class and those households with lower income. ",
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