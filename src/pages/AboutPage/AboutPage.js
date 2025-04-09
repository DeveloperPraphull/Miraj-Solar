import React from 'react'
import '../AboutPage/AboutPage.css'
import person from "../../assets/images/persons.png"
import solarpanal from "../../assets/images/solar-panel.png";
import job from "../../assets/images/job.png"
import womenicon from "../../assets/images/woman.png"
import QuoteForm from '../../components/Button/Quote';

export default function AboutPage() {

    const features = [
        {
            icon: person,
            heading: "20 Lakh",
            text: "Lives Impacted",
        },
        {
            icon: solarpanal,
            heading: "82,500 Tons",
            text: "C02 Emissions Reduced",
        },
        {
            icon: job,
            heading: "1,000+",
            text: "Jobs Created",
        },
        {
            icon: womenicon,
            heading: "60%",
            text: "Women in Leadership",
        },

    ];

    return (
        <section>
            <div className="about-overlay">

                <div className="residencal-content">
                    <h2>
                        About Us
                    </h2>
                    <QuoteForm />
                </div>
            </div>

            <div className='about-compan'>
                <div className='about-compan-in'>
                    <h2>We Are India’s Leading Solar Energy Company</h2>
                    <p>
                        Miraj Solar  is one of the renowned rooftop solar companies across India. We install solar panels for houses and businesses. With over 1,500+ delighted
                        clients across India, we have been offering world-class solar solutions to homes and businesses since 2020.. We are affiliated with MNRE. Miraj Solar , our revolutionary consumer app, offers smooth solar adoption and 24/7 service support. With simple zero-interest EMI alternatives, we hope to make rooftop solar accessible to everyone.
                    </p>
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                        Our mission is to empower every home and business across India with clean, affordable, and reliable solar energy. We simplify the process, making solar accessible to all. Through innovation and customer-focused solutions, we strive to revolutionise the Indian energy landscape, building a more sustainable and equitable future.
                    </p>
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        We envision a future where clean energy from solar is the norm, not a luxury. A world where individuals and businesses have control over their energy sources and environmental impact.
                    </p>
                </div>
            </div>

            <section className="social-impect">
                <h2>Social Impact</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <img src={feature.icon} alt="Feature Icon" />
                            <h2>{feature.heading}</h2>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}
