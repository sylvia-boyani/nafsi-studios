import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CTA.css";

import ctaImage from "../../../assets/images/collage.png";

function CTA() {
  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="cta-overlay"></div>

      <div className="container">

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span>JOIN THE NAFSI COMMUNITY</span>

          <h2>
            Ready To Create
            <br />
            Something Extraordinary?
          </h2>

          <p>
            Whether you're recording your next hit, launching a podcast,
            rehearsing a performance, or discovering a new creative passion,
            Nafsi Studios is a place where ideas come to life.
          </p>

          <div className="cta-buttons">

            <Link to="/booking" className="primary-btn">
              Book a Studio
            </Link>

            <Link to="/contact" className="secondary-btn">
              Get In Touch
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;