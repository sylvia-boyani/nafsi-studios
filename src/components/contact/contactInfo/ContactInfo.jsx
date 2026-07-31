import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SuccessModal from "../../booking/bookingForm/SuccessModal";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import "./ContactInfo.css";

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const whatsappLink =
    "https://wa.me/254741144434?text=" +
    encodeURIComponent(
      "Hello Nafsi Studios! I'd like to get in touch."
    );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);

        setShowSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);

        setLoading(false);

        alert(
          "Sorry, we couldn't send your message. Please try again."
        );
      });
  };

  return (
    <section className="contact-section">
      <div className="container contact-grid">

        {/* LEFT SIDE */}

        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            We'd Love To Hear From You
          </h2>

          <p>
            Whether you're interested in collaborating,
            booking a visit, partnering with us,
            or simply saying hello, our team is here
            to help.
          </p>

          <div className="contact-card">
            <FaPhoneAlt />

            <div>
              <h4>Call Us</h4>
              <p>+254 741 144 434</p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope />

            <div>
              <h4>Email</h4>
              <p>nafsistudios.art27@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />

            <div>
              <h4>Location</h4>
              <p>Kisumu, Kenya</p>
            </div>
          </div>

          <div className="contact-card">
            <FaClock />

            <div>
              <h4>Opening Hours</h4>
              <p>Monday – Sunday</p>
              <p>Open 24 Hours</p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-contact-btn"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="7"
              name="message"
              placeholder="Tell us how we can help..."
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button
              className="contact-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </motion.div>

      </div>

      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        tag="MESSAGE SENT"
        title="Your Enquiry Has Been Sent!"
        message="Thank you for reaching out to Nafsi Studios. We've received your message and a member of our team will respond as soon as possible."
        buttonText="Continue Exploring"
        whatsappText="Continue the Conversation"
        whatsappLink={whatsappLink}
/>

    </section>
  );
}

export default ContactInfo;