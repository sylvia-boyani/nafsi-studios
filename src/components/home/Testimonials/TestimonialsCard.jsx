import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./TestimonialsCard.css";

function TestimonialCard({ image, name, role, quote }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <FaQuoteLeft className="quote-icon" />

      <p className="testimonial-text">
        "{quote}"
      </p>

      <div className="testimonial-stars">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <div className="testimonial-author">
        <img src={image} alt={name} />

        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;