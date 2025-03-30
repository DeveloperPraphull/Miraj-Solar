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
                    <h1>Top Commercial Solar Power Systems Company in India </h1>
                    <p>
                        Freyr Energy is one of the renowned rooftop solar companies across India. We install solar panels for houses and businesses. With over 8,500+ delighted
                        clients across India, we have been offering world-class solar solutions since 2014. We are affiliated with MNRE.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
