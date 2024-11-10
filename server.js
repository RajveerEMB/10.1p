const express = require("express");
const sgMail = require("@sendgrid/mail");
const validator = require("validator");
require("dotenv").config();

const app = express();
const PORT = 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML form for subscription on the home route
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subscribe</title>
        </head>
        <body>
            <section>
                <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
                <form action="/subscribe" method="POST">
                    <input type="text" name="firstname" placeholder="Enter your first name" required>
                    <input type="email" name="email" placeholder="Enter your email" required>
                    <input type="submit" value="Subscribe">
                </form>
            </section>
        </body>
        </html>
    `);
});

// Handle form submission to subscribe route
app.post("/subscribe", (req, res) => {
    const { firstname, email } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
        return res.status(400).send("Invalid email.");
    }

    // Create email message
    const msg = {
        to: email,
        from: "your_email@example.com",
        subject: `Welcome, ${firstname}!`,
        text: `Hi ${firstname},\n\nThanks for subscribing to our daily insider!`,
        html: `<p>Hi ${firstname},</p><p>Thanks for subscribing to our daily insider!</p>`,
    };

    // Send email using SendGrid
    sgMail
        .send(msg)
        .then(() => res.send(`<p>Email sent successfully to ${email}!</p><a href="/">Go back</a>`))
        .catch((error) => {
            console.error(error);
            res.status(500).send(`<p>Failed to send email. Please try again later.</p><a href="/">Go back</a>`);
        });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
