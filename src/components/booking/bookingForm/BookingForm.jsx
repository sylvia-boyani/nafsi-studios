import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import SuccessModal from "./SuccessModal";
import "./BookingForm.css";

function BookingForm() {
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studio: location.state?.studio || "",
    date: "",
    time: "",
    duration: "",
    participants: "",
    projectType: "",
    message: "",
  });

const whatsappLink =
  "https://wa.me/254741144434?text=" +
  encodeURIComponent("Hello Nafsi Studios! 👋 I'd like to book a creative space. Could you please assist me?");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formData,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {

      setShowSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        studio: "",
        date: "",
        time: "",
        duration: "",
        participants: "",
        projectType: "",
        message: "",
      });

    })
    .catch((error) => {
     console.error(error);
     setError(
      "We couldn't send your booking right now. Please try again or contact us on WhatsApp."
   );
  });
};

  return (
    <section className="booking-form-section" id="booking-form">
      <div className="container">
        <motion.div
          className="booking-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT SIDE */}
          <div className="booking-side">
            <span className="side-tag">NAFSI STUDIOS</span>

            <h2>Need Help Booking?</h2>

            <p>
              Questions about availability, equipment, pricing or group
              sessions? Our Studio Manager is available to assist you directly.
            </p>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Call Us</h4>
                <p>+254 741144434</p>
              </div>
            </div>

            <div className="contact-card whatsapp-card">
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>

              <div className="contact-content">
                <h4>WhatsApp</h4>
                <p>Chat with the Studio Manager instantly</p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
               >
                Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>nafsistudios.art27@gmail.com</p>
              </div>
            </div>

            <div className="hours-card">
              <div className="hours-header">
                <FaClock />
                <span>Opening Hours</span>
              </div>

              <div className="hours-row">
                <p>Mon – Sun</p>
                <span>Open Day & Night</span>
              </div>

              <div className="hours-row">
                <p>Open 24/7</p>
                <span>Book your Night Sessions!</span>
              </div>

              {/* <div className="hours-row">
                <p>Sunday</p>
                <span>By Appointment</span>
              </div> */}
            </div>

            <div className="booking-benefits">
              <div>
                <FaCheckCircle />
                <span>Response within 24 hours</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Instant WhatsApp support</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Flexible session scheduling</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="booking-form-card">
            <div className="booking-header">
              <span>BOOKING FORM</span>

              <h2>Tell Us About Your Session</h2>

              <p>
                Fill in the details below and our Studio Manager will get
                back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Select Studio</label>
                  <select
                    name="studio"
                    required
                    value={formData.studio}
                    onChange={handleChange}
                  >
                    <option value="">Choose Studio</option>
                    <option>Music Studio</option>
                    <option>Podcast Studio</option>
                    <option>Dance Studio</option>
                    <option>Pottery Studio</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Preferred Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Session Duration</label>
                  <select
                    name="duration"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                    <option>Half Day</option>
                    <option>Full Day</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Participants</label>
                  <input
                    type="number"
                    min="1"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Music Recording</option>
                  <option>Podcast Recording</option>
                  <option>Dance Rehearsal</option>
                  <option>Pottery Session</option>
                  <option>Workshop</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Tell Us About Your Project</label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your session, equipment needs, number of people, or any special requests..."
                />
              </div>

              <button className="submit-booking" type="submit">
                Reserve My Session
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      {error && (
      <div className="booking-error">
        {error}
      </div>
      )}
      <SuccessModal
          open={showSuccess}
          onClose={() => setShowSuccess(false)}
          whatsappLink={whatsappLink}
       />
    </section>
  );
}

export default BookingForm;