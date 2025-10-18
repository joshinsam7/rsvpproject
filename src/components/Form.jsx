import React, { useState, useEffect, useRef } from "react";
import formBackground from "../assets/form-previewBackground.jpeg";

export default function Form() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", attending: "", numberofGuests: "" });
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL;
        
            console.log("API_URL from env:", API_URL);
        
            if (!API_URL) {
                alert("API URL is not configured. Please check your .env file.");
                return;
            }
        
        const form = e.target;
        const formData = new FormData(form);

        // Convert to application/x-www-form-urlencoded so Apps Script reads e.parameter
        const urlEncoded = new URLSearchParams();
        for (const [key, value] of formData.entries()) {
            urlEncoded.append(key, value);
        }
        
        // urlEncoded.append('source', 'web-form');

        // Log form data before sending
        console.log("Submitting form data:", Object.fromEntries(formData.entries()));

        fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: urlEncoded,
            mode: 'no-cors', 
        })
        .then(() => {
            console.log("Form submitted successfully");
            alert("RSVP submitted successfully! 🎉");
            form.reset(); 
            setIsFormVisible(false);
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your RSVP. Please try again.");
        });
    };

    const handleButtonClick = () => {
        setIsFormVisible(true);
    };

    useEffect(() => {
        if (isFormVisible && formRef.current) {
            setTimeout(() => {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [isFormVisible]);

  
    return (
    <section id="rsvp" className="content-section" style={{ minHeight: '60vh' }}>
        <section style={{ minHeight: '60vh', backgroundImage: `url(${formBackground})`, backgroundImageOpacity: '0.5', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="form-container">
            <div className="form-preview">
                <h3>Let's make Justopher smile</h3>
                <h2>RSVP here</h2>
                <p>We are getting well-prepared to welcome you. See you soon!</p>
                <p>21.10.2025 | 5:00PM  (GMT-05:00)</p>
                <p>Houston Trinity MTC Sunday School Hall</p>

                <div className="form-button">
                    <button className="rsvp-btn rsvp-primary" onClick={handleButtonClick}>
                        RSVP Now
                    </button>
                </div>
            </div>
        </div>
        </section>

        { isFormVisible ? (
            <form ref={formRef} className="rsvp-form" onSubmit={handleSubmit} style={{ backgroundColor: 'white' }}>
                <h3>RSVP Form</h3>
                <label>Will you join us for the birthday celebration?</label>
                <div className="radio-group">
                    <label className="radio-option">
                        <input type="radio" name="attending" value="yes" required />
                        <span>Yaaay 🎉</span>
                    </label>
                    <label className="radio-option">
                        <input type="radio" name="attending" value="no" required />
                        <span>Nope :/</span>
                    </label>
                </div>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>

                <label>
                    Number of Guests:
                    <select name="numberofGuests" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </label>

                <button type="submit" className="rsvp-btn rsvp-primary">
                    Submit
                </button>
            </form>
        ) : null}
    </section>
  );
}