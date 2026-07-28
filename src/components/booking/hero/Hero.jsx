import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import "./Hero.css";

import bookingHero from "../../../assets/images/collage.png";

function Hero() {
  const scrollToForm = () => {
    const section = document.getElementById("booking-form");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="booking-hero"
      style={{
        backgroundImage: `url(${bookingHero})`,
      }}
    >
      <div className="booking-overlay"></div>

      <div className="container booking-content">

        <motion.span
          className="booking-tag"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          BOOK YOUR CREATIVE SESSION
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .7 }}
        >
          Reserve Your
          <br />
          Creative Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          Whether you're recording your next hit,
          producing a podcast,
          rehearsing a performance,
          or creating with clay,
          we're ready to help bring your ideas to life.
        </motion.p>

        <motion.button
          className="booking-btn"
          onClick={scrollToForm}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >
          Start Your Booking
        </motion.button>

      </div>

      <button
        className="scroll-down"
        onClick={scrollToForm}
      >
        <FaArrowDown />
      </button>

    </section>
  );
}

export default Hero;