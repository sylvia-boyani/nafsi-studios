import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaUsers,
  FaSlidersH,
  FaMicrophone,
  FaBookOpen,
  FaClock
} from "react-icons/fa";

import "./Experience.css";

import experienceImage from "../../../assets/images/studio.jpeg";

const features = [
  {
    icon: <FaPaintBrush />,
    title: "Professional Creative Spaces",
    text: "A cohesive environment built to support creators in all their diversities, needs, and visions."
  },
  {
    icon: <FaUsers />,
    title: "Artists Network",
    text: "Community of artists sharing resources, collaborating, and learning from each other."
  },
  {
    icon: <FaSlidersH />,
    title: "Quality Equipment",
    text: "Well maintained equipment for artists needs."
  },
  {
    icon: <FaMicrophone />,
    title: "Creative Freedom",
    text: "A space built to support artistic exploration, curiosity, and creation."
  },
  {
    icon: <FaBookOpen />,
    title: "Learning",
    text: "A pedagogical space that encourages artistic, social, and political growth for individuals and their communities."
  },
  {
    icon: <FaClock />,
    title: "Flexible Booking",
    text: "A 24 hour well oiled system to cater to all the needs of the people using the space."
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>THE NAFSI CULTURE</span>

          <h2>
            Community is
            <br />
            where home is at.
          </h2>

          <p>
            A thriving community is made up of intentional values system
            that builds culture and that is what balances our space.
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={experienceImage} alt="Nafsi Experience" />
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;