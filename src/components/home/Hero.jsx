import { motion } from "framer-motion";
import Button from "../common/Button/Button";
import "./Hero.css";
import { useRef } from "react";

import heroVideo from "../../assets/nafsi-video.mp4";

function Hero() {
   const videoRef = useRef(null);
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        onEnded={() => {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">

        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          WELCOME TO NAFSI STUDIOS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Where
          <br />
          We Birth Art
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
          <Button>
            Explore Our Spaces
          </Button>

          <button className="secondary-btn">
            Watch Our Story
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;