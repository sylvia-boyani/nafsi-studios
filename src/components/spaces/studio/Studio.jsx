import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaCalendarAlt,
  FaLightbulb,
} from "react-icons/fa";

import "./Studio.css";

function Studio({
  title,
  description,
  images,
  features,
  capacity,
  booking,
  idealFor,
  reverse = false,
}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="studio-section">
      <div className={`container studio-grid ${reverse ? "reverse" : ""}`}>

        {/* ======================
            IMAGE GALLERY
        ====================== */}

        <motion.div
          className="studio-gallery"
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="studio-main-image">
            <img src={activeImage} alt={title} />
          </div>

          <div className="studio-thumbnails">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  activeImage === image ? "active" : ""
                }`}
                onClick={() => setActiveImage(image)}
              >
                <img src={image} alt={`${title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ======================
            CONTENT
        ====================== */}

        <motion.div
          className="studio-content"
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="studio-tag">
            CREATIVE SPACE
          </span>

          <h2>{title}</h2>

          <p className="studio-description">
            {description}
          </p>

          {/* FEATURES */}

          <div className="studio-features">

            {features.map((feature, index) => (

              <div
                key={index}
                className="feature-item"
              >
                <FaCheckCircle />

                <span>{feature}</span>

              </div>

            ))}

          </div>

          {/* DETAILS */}

          <div className="studio-details">

            <div className="detail-row">

              <div className="detail-title">

                <FaUsers />

                <span>Capacity</span>

              </div>

              <p>{capacity}</p>

            </div>

            <div className="detail-row">

              <div className="detail-title">

                <FaCalendarAlt />

                <span>Booking</span>

              </div>

              <p>{booking}</p>

            </div>

            <div className="detail-row">

              <div className="detail-title">

                <FaLightbulb />

                <span>Ideal For</span>

              </div>

              <p>{idealFor}</p>

            </div>

          </div>

          {/* BUTTON */}

          <button className="studio-btn">

            Book This Studio

            <FaArrowRight />

          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Studio;