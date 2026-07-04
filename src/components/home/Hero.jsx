import { motion } from "framer-motion";
// import { FaArrowDown } from "react-icons/fa";
import Button from "../common/Button/Button";
import "./Hero.css";

import heroImage from "../../assets/images/collage.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-tag"
        >
          WELCOME TO NAFSI STUDIOS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Where Every Art Form
          <br />
          Finds Its Voice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A creative arts space bringing together music,
          dance, podcasting and pottery under one roof.
          Create, collaborate and inspire.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button>Explore Our Spaces</Button>

          <button className="secondary-btn">
            Watch Our Story
          </button>
        </motion.div>
      </div>

      

    </section>
  );
}

export default Hero;