import React from "react";
import './HeroSection.css'
import QuoteForm from "./Button/Quote";

const HeroSection = () => {
    return (
        <section>


            <div className="hero-overlay">
                <div className="hero-content">
                    <h2>
                        Save ₹1 Lakh On Rooftop Solar <br /> with the right Solar Partner
                    </h2>
                    <p>
                        Get ₹22,000 Miraj Solar Discount + ₹78,000 Government Subsidy
                    </p>

                    {/* Get a Quote Button */}
                    <QuoteForm />

                </div>
            </div>

            {/* Company Details */}
            <div className='about-compan'>
                <div className='panel-advo'>
                    <h1>We Are Central India’s Leading Rooftop Solar Panel Company </h1>
                    <p>
                        Miraj Solar is one of the renowned rooftop solar companies across India. We install solar panels for houses and businesses. With over 1,500+ delighted
                        clients across India, we have been offering world-class solar solutions since 2020. We are affiliated with MNRE. <br/>
                        We are affiliated with MNRE. Miraj Solar, our revolutionary consumer app, offers smooth solar adoption and 24/7 service support. With simple zero-interest EMI alternatives, we hope to make rooftop solar accessible to everyone.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;