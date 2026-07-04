import { motion } from "framer-motion";
import {
  FaMusic,
  FaMicrophone,
  FaUsers,
  FaCalendarAlt,
  FaHandsHelping,
  FaPalette
} from "react-icons/fa";

import "./Experience.css";

import experienceImage from "../../../assets/images/studio.jpeg";

const features = [
  {
    icon: <FaMusic />,
    title: "Professional Creative Spaces",
    text: "Purpose-built environments for music, dance, podcasting and pottery."
  },
  {
    icon: <FaUsers />,
    title: "Creative Community",
    text: "Meet artists, creators and collaborators from different disciplines."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Flexible Bookings",
    text: "Reserve spaces by the hour, session or event."
  },
  {
    icon: <FaMicrophone />,
    title: "Industry Equipment",
    text: "Professional-grade equipment ready for your creative projects."
  },
  {
    icon: <FaHandsHelping />,
    title: "Workshops & Mentorship",
    text: "Grow your skills through classes, workshops and collaboration."
  },
  {
    icon: <FaPalette />,
    title: "Creative Freedom",
    text: "A welcoming environment where every artist can explore and create."
  }
];

function Experience() {
  return (
    <section className="experience">
      <div className="container experience-grid">

        <motion.div
          className="experience-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span>THE NAFSI EXPERIENCE</span>

          <h2>
            More Than a Studio.
            <br />
            A Home for Creativity.
          </h2>

          <p>
            Every space at Nafsi Studios has been designed to inspire ideas,
            encourage collaboration and support artists at every stage of
            their creative journey.
          </p>

          <div className="experience-list">
            {features.map((feature, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-icon">
                  {feature.icon}
                </div>

                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

        <motion.div
          className="experience-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <img src={experienceImage} alt="Nafsi Experience" />
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;