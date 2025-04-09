import React from "react";
import "./Testimonials.css";
import profile1 from "../assets/images/Gajendra-Shkya.jpg";
import profile2 from "../assets/images/best-badge.png";
import profile3 from "../assets/images/best-badge.png";

const testimonials = [
  {
    img: profile1,
    name: "Ayaj Mohd. ",
    location: "Jabalpur, Madhya Pradesh",
    feedback:
      "It’s been 1 year since Miraj Solar  installed system on my home. We have not faced any issues and are very happy with their service. Highly recommend Miraj Solar .",
  },
  {
    img: profile2,
    name: "Sandeep Singh",
    location: "Indore, Madhya Pradesh",
    feedback:
      "We have installed solar in 4 of our facilities with Miraj Solar  and our energy costs have reduced substantially. Our consumers are already appreciating our efforts towards sustainability & net-zero.",
  },
  {
    img: profile3,
    name: "Vinay Vajpei",
    location: "Bhopal, Madhya Pradesh",
    feedback:
      "Miraj Solar  installed 3kW system on my house in Hyderabad. I used to pay ₹ 2,500-3,000 before solar, and last month I paid only ₹ 300! Their after-sales is also very quick & reliable.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
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
    </section>
  );
};

export default Testimonials;
