import { motion } from "framer-motion";
import "./Hero.css";

import heroImage from "../../../assets/2view.jpeg";

function Hero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-overlay"></div>

      <div className="container contact-content">

        <motion.span
          className="contact-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Create
          <br />
          Something Meaningful.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Whether you're looking to book a studio, collaborate on a
          creative project, host a workshop, or simply learn more about
          Nafsi Studios, we'd love to hear from you.
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;