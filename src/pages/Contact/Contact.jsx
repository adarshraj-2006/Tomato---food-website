import { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const faqs = [
  {
    question: "My order is delayed. What should I do?",
    answer: [
      "Check order status in the Orders section",
      "Ensure your delivery address is correct",
      "If delayed beyond 15 minutes, contact support",
    ],
  },
  {
    question: "Payment was deducted but order failed",
    answer: [
      "Do not retry payment immediately",
      "Refunds are auto-processed within 3–5 working days",
      "Check Wallet or original payment source",
    ],
  },
  {
    question: "How do I cancel an order?",
    answer: [
      "Go to Orders → Select active order",
      "Click Cancel if restaurant has not started preparing",
      "Refund will be initiated automatically",
    ],
  },
  {
    question: "How can I change delivery address?",
    answer: [
      "Address can be changed before restaurant confirmation",
      "Go to Cart → Change Address",
      "If locked, contact support immediately",
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    message: "",
  });

  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Query:", formData);
    alert("Your message has been submitted successfully.");
    setFormData({ name: "", email: "", category: "general", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We’re here to help you with orders, payments and more.</p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 70611 76233</p>
        </div>
        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>support@tomato.com</p>
        </div>
        <div className="contact-card">
          <h3>⏰ Support Hours</h3>
          <p>9:00 AM – 11:00 PM</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="contact-container">
        {/* LEFT: FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="general">General Inquiry</option>
            <option value="order">Order Issue</option>
            <option value="payment">Payment Issue</option>
            <option value="delivery">Delivery Issue</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Describe your issue..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Query</button>
        </form>

        {/* RIGHT: FAQ + MAP */}
        <div className="contact-right">
          {/* FAQ */}
          <div className="faq-section">
            <h2>Most Asked Questions</h2>

            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span>{activeFAQ === index ? "−" : "+"}</span>
                </div>

                {activeFAQ === index && (
                  <ul className="faq-answer">
                    {faq.answer.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* MAP CARD */}
          <div className="map-card">
            <h3>Head Office</h3>
            <p>Bengaluru, India</p>

            <iframe
              title="Tomato Office"
              src="https://www.google.com/maps?q=Embassy%20Tech%20Village%20Bangalore&output=embed"
              loading="lazy"
            ></iframe>

            <a
              href="https://www.google.com/maps?q=Embassy%20Tech%20Village%20Bangalore"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              Get Directions
            </a>
          </div>
          <section className="contact-faq-bottom">
  {/* FAQ content here */}
          </section>

        </div>
      </div>
    </div>
  );
};

export default Contact;
