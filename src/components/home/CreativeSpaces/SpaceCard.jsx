import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./SpaceCard.css";

function SpaceCard({ title, description, image, reverse }) {
  return (
    <motion.div
      className={`space-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
    >
      <div className="space-image">
        <img src={image} alt={title} />
      </div>

      <div className="space-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <button className="space-link">
          Explore Space
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

export default SpaceCard;