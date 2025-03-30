import React from 'react'
import './Segment.css'
import imag1 from "../assets/images/segment-homes.jpg"
import imag2 from "../assets/images/segment-business-scaled.jpg"

function Segment() {
    return (

        <section className="customer-segments">
            <div className="customer-segments-in">
                <div>
                   <h2>Our Customer Segments</h2>
                </div>
                <div className="segments">
                    <div className="segment">
                        <img src={imag1} alt="Residential" />
                        <div className="segment-dark">
                            <p>RESIDENTIAL</p>
                        </div>
                    </div>
                    <div className="segment">
                        <img src={imag2} alt="Commercial" />
                        <div className="segment-dark">
                            <p>COMMERCIAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Segment