import { motion } from "framer-motion";
import "./hero.css";

import heroImage from "../../../assets/1view.jpeg";

function Hero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="about-hero-overlay"></div>

      <div className="container">

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span>ABOUT NAFSI STUDIOS</span>

          <h1>
            A Creative Home
            <br />
            Where Ideas Become Art
          </h1>

          <p>
            We believe creativity flourishes when artists have inspiring
            spaces, meaningful connections, and the freedom to create
            without limits.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;