import React, {useState} from 'react'
import "../Society/Society.css"
import QuoteForm from '../../components/Button/Quote'
import { FaMoneyBillWave, FaHandHoldingUsd, FaClipboardCheck } from "react-icons/fa";
import experienceIcon from "../../assets/images/best-badge.png";
import emiIcon from "../../assets/images/zero-cost.png";
import safetyIcon from "../../assets/images/best-badge.png";
import supportIcon from "../../assets/images/best-badge.png";
import profile1 from '../../assets/images//person.png'
import profile2 from '../../assets/images/person.png'
import profile3 from '../../assets/images/Gajendra-Shkya.jpg'
import project1 from "../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg"
import project2 from '../../assets/images/90aa40c9-9012-41e7-b2fd-c7d6e3923715.jpeg'
import project3 from '../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const loanOptions = [
    {
        icon: <FaMoneyBillWave className="icon" />,
        title1: "Zero",
        title2: "Cost EMI",
        description: "Enjoy the benefit of paying for your solar system with no extra charges under our Zero Cost EMI scheme."
    },
    {
        icon: <FaHandHoldingUsd className="icon" />,
        title1: "Up to 60 Months",
        title2: "Tenure",
        description: "Flexibility in payment with loan tenures extending up to 60 months, catering to your financial convenience."
    },
    {
        icon: <FaClipboardCheck className="icon" />,
        title1: "Loan Approval",
        title2: "Within 3 Minutes",
        description: "Rapid and efficient loan evaluation, with decisions made in just 3 minutes, streamlining your path to solar energy."
    }
];


const LoanCard = ({ icon, title1, title2, description }) => (
    <div className="loan-card">
        {icon}
        <h4>{title1}</h4>
        <h4>{title2}</h4>
        <p>{description}</p>
    </div>
);

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

];


const testimonials = [
    {
        img: profile1,
        name: "Ayaj Mohd. ",
        location: "Jabalpur, Madhya Pradesh",
        feedback:
            "It’s been 1 year since Freyr Energy installed system on my home. We have not faced any issues and are very happy with their service. Highly recommend Freyr Energy.",
    },
    {
        img: profile2,
        name: "Sandeep Singh",
        location: "Indore, Madhya Pradesh",
        feedback:
            "We have installed solar in 4 of our facilities with Freyr Energy and our energy costs have reduced substantially. Our consumers are already appreciating our efforts towards sustainability & net-zero.",
    },
    {
        img: profile3,
        name: "Vinay Vajpei",
        location: "Bhopal, Madhya Pradesh",
        feedback:
            "Freyr Energy installed 3kW system on my house in Hyderabad. I used to pay ₹ 2,500-3,000 before solar, and last month I paid only ₹ 300! Their after-sales is also very quick & reliable.",
    },
];

const projects = [
    { image: project1, title: "Regular Structure" },
    { image: project1, title: "Advanced Structure" },
    { image: project3, title: "Solar Rooftop" },

];




function Society() {


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [

        {
            question: "How do I choose the right solar system for my housing society?",
            answer: "The choice of solar energy for housing society  depends on factors like the size of the plant, the energy consumption of the society, the type of panels used, and the budget. A reputed solar energy service provider will be able to guide you in choosing the right one for the housing society.",
        },
        {
            question: "Can housing societies claim subsidies for solar panels?",
            answer: "Central financial assistance is provided to group housing societies and residential welfare associations according to PM Surys Ghar Yojna. They will receive a subsidy of INR 18,000/kW under the scheme.",
        },
        {
            question: "What are the benefits of solar systems for housing societies?",
            answer: "Housing societies can see a dramatic drop in their monthly electricity bills as the energy consumption in common areas like elevators, corridors, water motors, etc. will be managed by solar power. They can attain self-sufficiency by reducing their dependence on the grid.",
        },
        {
            question: "How much do solar panels cost for housing societies?",
            answer: "The cost of solar panels for housing societies depends on various factors like the size of the plant, maintenance, etc. A housing society whose requirement is 100kW will need a solar plant costing around INR50-60 lakhs.",
        },
        {
            question: "Why choose Freyr Energy for housing society solar energy panels?",
            answer: " Freyr Energy is a well-known and trusted solar energy installation company with a team of experts. We offer customized solutions depending on your needs and help reduce electricity costs significantly.",
        },
        {
            question: "What are the environmental benefits of solar panels for housing societies?",
            answer: "Resorting to solar energy in housing societies reduces their carbon footprint as the dependence on traditional sources of power is reduced. This will lead to cleaner and greener surroundings.",
        },
        {
            question: "How long does it take to install solar panels in housing societies?",
            answer: "The installation process by professional solar companies takes around 1 to 2 weeks. This is done after site inspection and analyzing the specifications of the particular project.",
        },
    ];
    
    return (
        <div>
            <div className="society-overlay">
                <div className="society-content">
                    <h2>
                        Rooftop Solar Panels for Housing Societies
                    </h2>
                    <QuoteForm />
                </div>
            </div>

            {/* Company Details */}
            <div className='Socity-compan'>
                <div className='panel-advo'>
                    <h1>We are India’s Top Solar Rooftop Company for Housing Societies </h1>
                    <p>
                        Freyr Energy, a leading solar power energy company in India, is known for delivering top-notch solar panel installations for homes, business and housing society. As one of India’s best solar panel providers, we have proudly served over 8,500+ satisfied clients, making us one of the most trusted names in the solar industries.
                        Recognized as one of the best solar companies, we are affiliated with MNRE, ensuring that our services meet the highest standards. Our innovative Freyr energy solar app makes it easier than ever to adopt solar panels for your home, providing 24/7 support and assistance. We offer flexible zero-interest EMI options to make adopting the best solar panels in India more accessible to everyone.
                        For those looking to work with the best solar company in India, Freyr Energy is the right choice for all your solar needs!
                    </p>

                </div>
            </div>

            <div className="solar-loan-container">
                <h2 className="title">Quick & Easy Solar Loans</h2>
                <div className="loan-cards">
                    {loanOptions.map((loan, index) => (
                        <LoanCard key={index} {...loan} />
                    ))}
                </div>
            </div>

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

            <div className="testimonials-section">
                <h2>Hear Directly From Our Satisfied Customers</h2>
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="profile">
                                <img src={testimonial.img} alt={testimonial.name} />
                                <div className="play-button">▶</div>
                            </div>
                            <h3>{testimonial.name}</h3>
                            <p className="location">📍 {testimonial.location}</p>
                            <p className="feedback">{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-container">
                <h2 className="section-title">Our Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="overlay">
                                <p>{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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

        </div>
    )
}

export default Society