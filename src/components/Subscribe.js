import React, { useState } from 'react';
import '../css/Subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = { firstname, email };
        
        try {
            const response = await fetch('http://localhost:3000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            setMessage(result);
        } catch (error) {
            setMessage("Error: Unable to send email.");
            console.error("Error:", error);
        }
    };

    return (
        <section className="subscribe-section">
            <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input type="submit" value="Subscribe" />
            </form>
            {message && <p>{message}</p>}
        </section>
    );
};

export default Subscribe;
