import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import "./Hero.css";

import slide1 from "../../../assets/images/nafsi-pot2.jpeg";
import slide2 from "../../../assets/images/nafsi-dance2.jpeg";
import slide3 from "../../../assets/images/nafsi-pot3.jpeg";
import slide4 from "../../../assets/images/pottery-n.jpeg";
import slide5 from "../../../assets/images/nafsi-danceO1.jpeg";
import slide6 from "../../../assets/images/nafsi-danceO.jpeg";
import slide7 from "../../../assets/images/nafsi-pot1.jpeg";
import slide8 from "../../../assets/images/nafsi-dance2.jpeg";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
];

function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) => (prev + 1) % slides.length);

    }, 6000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="spaces-hero">

      {/* Background Images */}

      {slides.map((image, index) => (

        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />

      ))}

      {/* Overlay */}

      <div className="hero-overlay"></div>

      {/* Hero Content */}

      <div className="container hero-content">

        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          EXPLORE OUR CREATIVE SPACES
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .2,
            duration: .8
          }}
        >
          Designed For
          <br />
          Every Creator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .4
          }}
        >
          From music production and podcasting to dance,
          pottery and collaborative artistic practice,
          every space at Nafsi Studios is built to inspire.
        </motion.p>

      </div>

      {/* Scroll Indicator */}

      <div className="hero-scroll">

        <FaArrowDown />

      </div>

    </section>

  );

}

export default Hero;