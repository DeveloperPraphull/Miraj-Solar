import React, { useState } from "react";
import "../Button/SideTab.css";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const SideTab = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Invalid phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("your form submited"); // Clear previous messages
    
    if (!validate()) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "c3e7cc52-4e4f-41d9-8b7f-a6555307183d",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div
      className="side-tab-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="toggle-btn">
        <IoIosArrowBack size={18} color="white" />
      </div>

      <div className="side-tab-content">
        <FaEnvelope size={16} />
        <span>Book Free Consultation</span>
      </div>

      {isHovered && (
        <div className="dropdown-form">
          <h2>Contact Us</h2>
          {message && <p className="message">{message}</p>}
          <form onSubmit={onSubmit}>
            <div className="form-group-tab">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group-tab">
              <label>Phone No</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group-tab">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SideTab;
