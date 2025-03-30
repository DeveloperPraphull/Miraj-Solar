import React, {useState} from 'react'
import '../Residencal/Residencal.css'
import { FaMoneyBillWave, FaHandHoldingUsd, FaClipboardCheck } from "react-icons/fa";
import abouting from '../../assets/images/90aa40c9-9012-41e7-b2fd-c7d6e3923715.jpeg'
import experienceIcon from "../../assets/images/best-badge.png";
import emiIcon from "../../assets/images/zero-cost.png";
import safetyIcon from "../../assets/images/best-badge.png";
import supportIcon from "../../assets/images/best-badge.png";
import QuoteForm from '../../components/Button/Quote';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import profile1 from '../../assets/images//person.png'
import profile2 from '../../assets/images/person.png'
import profile3 from '../../assets/images/Gajendra-Shkya.jpg'
import project1 from "../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg"
import project2 from '../../assets/images/90aa40c9-9012-41e7-b2fd-c7d6e3923715.jpeg'
import project3 from '../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg'

function Residencal() {

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

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [

        {
            question: "How do solar panels for home works?",
            answer: "Solar panels for homes take sunlight as a source of energy to generate electricity. This process is done with the help of photovoltaic cells. This solar electricity can be used for your home and thereby lower your dependence on traditional sources of electricity. Using solar panels can reduce your current bills.",
        },
        {
            question: "Does solar work at night?",
            answer: "As solar panels depend on sunlight to produce electricity, solar panels do not generate electricity at night. During the nighttime or when there is insufficient sunlight, solar panels are inactive.",
        },
        {
            question: "How long do solar panels last?",
            answer: "Solar panels have a long lifespan and can last for several decades. Most solar panel manufacturers provide warranties ranging from 20 to 25 years. This guarantees that the panels will continue to generate a certain percentage of their original capacity during that time.",
        },
        {
            question: "How much solar subsidy can I get?",
            answer: "The 2024 update on India’s solar subsidies offers 40% off for systems up to 3 kW and 20% for up to 10 kW under the , plus a 23% boost in the Central Financial Assistance to make solar more affordable.",
        },
        {
            question: "Should I buy solar panels for my home​?",
            answer: " is a smart investment. It is cheaper than conventional energy and enables you to save money on electricity bills. It provides you with an alternative energy source and is a no-pollution affair. It also escalates your property value.",
        },
        {
            question: "How to get solar panels for home?",
            answer: "Installing a solar panel system for home  is a straightforward process. Contact a reputable company like Freyr Energy. They will assist you at every installation step and procure the subsidy amount on your behalf.",
        },
        {
            question: "How to install or setup solar panels at home in India?",
            answer: "The solar installation company helps you to have a solar setup for home. They listen to your requirements and suggest the appropriate solar system capacity. After completing all formalities (space evaluation, form filling etc.), the team starts the installation work.",
        },
        {
            question: "What is the cost of solar panels for your home?",
            answer: "The home solar installation cost depends on several factors. These include your energy consumption, solar system capacity, off-grid or on-grid system, panel types and quality of components. In addition, it also depends on the subsidy amount you receive from the government. Visit ‘Calculate your savings’ section to get an idea of the price of solar panel for home.",
        },
        {
            question: "Which type of solar panel system is best for home use?",
            answer: " The best solar for home depends on your requirements, region, and budget. For some areas, monocrystalline or polycrystalline panels  work best. While for others, thin film or bi-facial give more output. Consult a reputed home solar system dealer to what fits best for your home",
        },
        {
            question: " How to use solar energy at home?",
            answer: "You don’t have to do anything once your solar installation is ready. The PV panels absorb sunlight and convert it to solar energy for your home, which you can use directly, as you use conventional energy. It helps you reduce your dependency on the traditional grid . Moreover, you can set up storage to save extra solar energy and use it during emergencies, e.g. during power breaks. ",
        },

        {
            question: "Which company solar panel is best for home?",
            answer: "There are many brands available offering the best solar energy system for home. Consult a trustworthy solar panel dealer like Miraj Solar to understand more details.",
        },
        {
            question: "What are solar panels used for in homes?",
            answer: "Solar power home panels  power lights and other electrical appliances like fans, refrigerators, washing machines, and ACs. You can also charge your mobile phones, laptops, and power banks. However, the usage depends on the capacity of the solar energy system.",
        },
        {
            question: "What size solar panel do I need for my home​?",
            answer: "Solar panels for home come in many sizes, 1 kW, 2 kW to 10 kW. However, based on studies, a 3 kW system suits many households that consume average electricity.",
        },
        {
            question: "How many solar panels are needed to run a house?",
            answer: "The Number of solar energy panels for home  depends on your electricity requirements, and location (plenty of sunlight or scarce, cloud region, etc.). Generally, panels that can generate 3 to 5 kW of power are enough to power an average house. Please consult your solar panel dealer for details.",
        },
        {
            question: "How do solar panels work for your home?",
            answer: "Solar panels for homes absorb sunlight and convert it to solar energy. It thus provides a renewable energy source that is free of pollution and cheaper than conventional energy.",
        },
        {
            question: "What are the benefits of solar panels for your home?",
            answer: "Solar panels for home offer several benefits. These include financial (reduce electricity bills, property appreciation etc.) and environmental (no pollution energy). In addition, it provides you with a continuous energy source, unlike the conventional. Solar panels last for 25 years, making it a wise investment. ",
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



    return (
        <section>

            <div className="residencal-overlay">

                <div className="residencal-content">
                    <h2>
                        Best Solar System for Home in India
                    </h2>
                    <QuoteForm />
                </div>
            </div>

            <div className='about-compan'>
                <div className='about-compan-in'>
                    <h2>We are India’s Top Solar Rooftop Company for Home</h2>
                    <p>
                        Freyr Energy proudly stands as an approved solar energy provider by the Ministry of New and Renewable Energy, India. Our user-friendly app allows homeowners to effortlessly transition to solar power with home solar panel system. Plus, our hassle-free 0-cost EMI options ensure that solar panels for home cost remains both affordable and accessible to everyone.
                    </p>

                </div>
            </div>

            <div className="solar-loan-container">
                <h2 className="title">Quick & Easy Solar Loans</h2>
                <div className="loan-cards">

                    <div className="loan-card">
                        <FaMoneyBillWave className="icon" />
                        <h4>Zero</h4>
                        <h4>Cost EMI</h4>
                        <p> Enjoy the benefit of paying for your solar system with no extra charges under our Zero Cost EMI scheme.</p>
                    </div>

                    <div className="loan-card">
                        <FaHandHoldingUsd className="icon" />
                        <h4>Up to 60 Months</h4>
                        <h4>Tenure</h4>
                        <p> Flexibility in payment with loan tenures extending up to 60 months, catering to your financial convenience. </p>
                    </div>

                    <div className="loan-card">
                        <FaClipboardCheck className="icon" />
                        <h4>Loan Approval</h4>
                        <h4>Within 3 Minutes</h4>
                        <p> Rapid and efficient loan evaluation, with decisions made in just 3 minutes, streamlining your path to solar energy. </p>

                    </div>

                </div>
            </div>


            <div className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features-grids">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <img src={feature.icon} alt="Feature Icon" />
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>

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
        </section>
    )
}

export default Residencal