import React, { useState } from "react";
import "../Button/Quote.css";

const QuoteForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", company: "", state: "", bill: "", finance: ""
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Enter valid 10-digit phone number";
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Enter valid email";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setMessage(""); // Reset messages
        if (!validate()) return;

        setLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "f1d86793-06d0-4f58-a3da-e71e5dff2acc",
                    ...formData,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setMessage("🎉 Form submitted successfully!");
                setFormData({ name: "", phone: "", email: "", company: "", state: "", bill: "", finance: "" });
            } else {
                setMessage("❌ Error submitting form. Please try again.");
            }
        } catch (error) {
            setMessage("⚠️ Network error. Try again later.");
        }
        setLoading(false);
    };

    return (
        <div className="quote-container">
            <button className="quote" onClick={() => setShowForm(true)}>
                GET A QUOTE
            </button>

            {showForm && (
                <div className="form-overlay" onClick={() => setShowForm(false)}>
                    <div className="form-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setShowForm(false)}>×</button>
                        <h2>Request a Quote</h2>
                        {message && <p className="message">{message}</p>}
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" name="company" value={formData.company} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Phone No</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label>Your State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Monthly Bill</label>
                                <select name="bill" value={formData.bill} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="below_5000">Below 5000</option>
                                    <option value="5000_10000">5000 - 10000</option>
                                    <option value="above_10000">Above 10000</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Interested in Finance?</label>
                                <select name="finance" value={formData.finance} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="maybe">Maybe</option>
                                </select>
                            </div>

                            <button className="submit-button" type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuoteForm;
