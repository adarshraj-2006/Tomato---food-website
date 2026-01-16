import React, { useState } from "react";
import { assets } from "../../assets/assets";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { Phone, Mail, Clock, MapPin, ChevronDown, ChevronUp, Send } from "lucide-react";

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

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Contact Query:", formData);
    alert("Your message has been submitted successfully.");
    setFormData({ name: "", email: "", category: "general", message: "" });
    setIsSubmitting(false);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Get In Touch</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              We’re here to help you with orders, payments and more.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">Phone Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">+91 70611 76233</p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">support@tomato.com</p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">Support Hours</h3>
              <p className="text-neutral-600 dark:text-neutral-400">9:00 AM – 11:00 PM</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Send Us a Message</h2>
                <p className="text-neutral-600 dark:text-neutral-400">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-orange-500/20 text-neutral-900 dark:text-white placeholder:text-neutral-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-orange-500/20 text-neutral-900 dark:text-white placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Topic</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-orange-500/20 text-neutral-900 dark:text-white cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Issue</option>
                    <option value="payment">Payment Issue</option>
                    <option value="delivery">Delivery Issue</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your issue..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-orange-500/20 text-neutral-900 dark:text-white placeholder:text-neutral-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              {/* Map Card */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 p-8 overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Head Office</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Bengaluru, India</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-900 h-[260px] relative">
                  <iframe
                    title="Tomato Office"
                    src="https://www.google.com/maps?q=Embassy%20Tech%20Village%20Bangalore&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com/maps?q=Embassy%20Tech%20Village%20Bangalore"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white font-medium rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* FAQ Section */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 p-8">
                <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-neutral-100 dark:border-neutral-700 rounded-xl overflow-hidden transition-all hover:border-orange-200 dark:hover:border-orange-900/30"
                    >
                      <button
                        className="w-full flex items-center justify-between p-4 text-left bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                        onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                      >
                        <span className="font-medium text-neutral-900 dark:text-white pr-4">{faq.question}</span>
                        {activeFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-orange-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>

                      {activeFAQ === index && (
                        <div className="p-4 bg-white dark:bg-neutral-800 border-t border-neutral-100 dark:border-neutral-700">
                          <ul className="space-y-2">
                            {faq.answer.map((step, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
