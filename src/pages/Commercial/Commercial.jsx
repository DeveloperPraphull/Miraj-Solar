import React, {useState} from 'react'
import '../Commercial/Commercial.css'
import aboutimg from '../../assets/images/rooftop-company.webp'
import profile1 from '../../assets/images//person.png'
import profile2 from '../../assets/images/person.png'
import profile3 from '../../assets/images/Gajendra-Shkya.jpg'
import experienceIcon from "../../assets/images/best-badge.png";
import emiIcon from "../../assets/images/zero-cost.png";
import safetyIcon from "../../assets/images/best-badge.png";
import supportIcon from "../../assets/images/best-badge.png"
import project1 from "../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg"
import project2 from '../../assets/images/90aa40c9-9012-41e7-b2fd-c7d6e3923715.jpeg'
import project3 from '../../assets/images/2cdab8d7-8472-4a3b-9ade-e0d1491468e7.jpeg'
import QuoteForm from '../../components/Button/Quote'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";



function Commercial() {

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


    const businessSegments = [
        { name: "Industries", icon: "🏭" },
        { name: "Commercial Establishments", icon: "🏢" },
        { name: "Healthcare Centres", icon: "🏥" },
        { name: "Educational Institutions", icon: "🏫" },
        { name: "Petrol Pumps", icon: "⛽" },
    ];


    const projects = [
        { image: project1, title: "Regular Structure" },
        { image: project1, title: "Advanced Structure" },
        { image: project3, title: "Solar Rooftop" },
        { image: project1, title: "Commercial Solar" },
        { image: project2, title: "Industrial Solar" },
        { image: project3, title: "Residential Solar" },
    ];


        const [openIndex, setOpenIndex] = useState(null);
    
        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const faqData = [
    
            {
                question: "How much do solar panels cost in India?",
                answer: "In India, the price range of commercial solar panels at 3kW is between ₹1, 75,000 to ₹1, 80,000. This implies that the price per watt ranges between ₹50 and ₹60, based on your specific requirements and the size of the system.",
            },
            {
                question: "What financing options does Freyr Energy offer for solar panel installations in Industries?",
                answer: "With Freyr Energy, you will get a solar loan that allows you to own a solar system to save your energy bills and provides financial returns with very less to no upfront price. The loan terms are also flexible which means payments can easily fit into your budget and the money you save on energy covers your EMI. In addition, you can gain some extra savings because of tax incentives such as benefits from GST and rapid depreciation.",
            },
            {
                question: "What are the benefits of installing a solar panel system in Industries?",
                answer: "Installing solar panels  reduces the costs of electricity, increases the value of your property, and supports your environment by decreasing carbon emissions. With minimum upkeep and high durability, the benefits of the system lengthen for years, making payment for itself with the created savings.",
            },
            {
                question: "How does Freyr Energy ensure the quality and reliability of its solar system?",
                answer: "Freyr Energy makes sure their solar panels for commercial and industries  are of the highest quality by doing detailed tests and quality checks. Plus, our Freyr Energy Solar App  lets you easily monitor your solar system’s performance in real-time, ensuring everything runs smoothly. Freyr Energy is known for its expertise in solar solutions in India, helping customers understand everything about solar panel installations, whether for homes or businesses, to make informed choices.",
            },
            {
                question: "What types of solar panel systems does Freyr Energy offer for industries?",
                answer: "Freyr Energy offers solar panel systems having feature components from the best vendors to make sure it is of premium quality. We offer installation services that are free from trouble along with the best solar financing options . We make all efforts to make sure that solar energy is available for your maximum applications whether it is for residential purposes or commercial.",
            },
            {
                question: "What is the best way to clean solar panels?",
                answer: "You can use a soft brush or cloth to clean the solar panels. Using abrasive materials or any harsh detergents should not be used as they can damage the panels. It’s good to clean during early morning or late evening so that you can prevent water evaporation which can leave behind some residues in your panels.",
            },
            {
                question: "How much do industrial solar panels cost?",
                answer: "Commercial solar systems in India range between Rs. 1,75,000 and Rs. 1,80,000. It indicates the price per watt is between Rs. 50 and Rs. 60. The price may vary based on your requirements and system capacity.",
            },
            {
                question: "Where to buy commercial solar panels?",
                answer: "You can buy solar for bussiness for a reputed Miraj Solar company , such as Miraj Solar. The company assists you in installing appropriate solar panels that deliver optimum output.",
            },
            {
                question: "How long do commercial solar power systems take to install?",
                answer: "It takes about 4 to 12 weeks to install solar panels for commercial buildings.The process goes through several steps that include site evaluation, designing, obtaining licenses/permits and actual installation. ",
            },
            {
                question: "How do I choose the right solar panels for a small business?",
                answer: "Choosing solar panels for small business  depends on a few factors. These include your business type, energy consumption and office space availability. The right way is to approach a trustworthy solar energy company and consult them.",
            },
    
            {
                question: "What are the advantages of using solar power for industrial use?",
                answer: "Industries are generally located in remote places, where conventional grid connections may not be available. However, solar energy doesn’t need any connection as it absorbs sunlight. This is a major advantage for industrial solar power system. Other common advantages include financial and environmental benefits, with increased property value.",
            },
            {
                question: "Is there any subsidy on solar panels for business?",
                answer: "Unfortunately, there are no government subsidies on solar panels for business. However, the government offers tax incentives to businesses investing in solar energy installation systems.",
            },
            {
                question: "What is the lifespan of solar panels for industrial applications?",
                answer: "On average solar panels last for about 25 to 30 years",
            },
            {
                question: "How can I maximize the efficiency of solar panels for my business?",
                answer: "Always insist on high-quality panels and ensure  the panels are appropriately placed and tilted to produce more energy. Regularly check for obstacles that block sunlight from hitting the panels. Using the help to inspect your solar panels performance and take corrective actions to improve performance.",
            },
            {
                question: "How does net metering work for businesses using solar energy?",
                answer: "Net metering  helps businesses reduce their electricity bills. It’s an arrangement allowing companies to offset their electricity costs, by selling surplus power back to the state DISCOM. ",
            },
            {
                question: "What is the payback period for investing in commercial solar power systems?",
                answer: "A typical payback period for commercial solar systems is between 2 and 10 years. It depends on system cost, energy consumption, local electricity charges, government incentives, net metering policy and financing options.  ",
            },
            {
               question: "Which type of solar panel is best for industrial use in India?",
               answer: "The best solar power of industrial use depends on your energy needs, area available for solar installation , your budget, tax incentives offered and your location. Monocrystalline solar panels are best known for their durability, quality, and adaptabilityto diverse climatic conditions. They work at high efficiency, delivering optimum output. "
            },
        ];
    


    return (
        <div>
            <div className="commercial-overlay">

                <div className="commercial-content">
                    <h2>
                    Solar for Business: Reduce Costs, Boost Efficiency
                    </h2>
                    <QuoteForm />
                </div>
            </div>

            {/* Company Details */}
            <div className='about-compan'>
                <div className='panel-advo'>
                    <h1>Top Commercial Solar Power Systems Company in India </h1>
                    <p>
                        Freyr Energy is one of the renowned rooftop solar companies across India. We install solar panels for houses and businesses. With over 8,500+ delighted
                        clients across India, we have been offering world-class solar solutions since 2014. We are affiliated with MNRE.
                    </p>

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


            <div className="business-segments">
                <h2>Solar Solutions for Diverse Business Segments</h2>
                <div className="segments-container">
                    {businessSegments.map((segment, index) => (
                        <div className="segment-card" key={index}>
                            <div className="icon">{segment.icon}</div>
                            <p>{segment.name}</p>
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

export default Commercial