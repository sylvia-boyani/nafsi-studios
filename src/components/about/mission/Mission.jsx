import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaGem
} from "react-icons/fa";

import "./Mission.css";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text:
      "To empower artists, creators and innovators by providing inspiring spaces, professional facilities and opportunities for collaboration, learning and artistic growth."
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text:
      "To become East Africa's leading multidisciplinary creative hub where talent is nurtured, ideas flourish and communities are connected through art."
  },
  {
    icon: <FaGem />,
    title: "Our Values",
    values: [
      "Creativity",
      "Community",
      "Excellence",
      "Innovation",
      "Inclusivity"
    ]
  }
];

function Mission() {
  return (
    <section className="mission">

      <div className="container">

        <div className="mission-heading">

          <span>OUR PURPOSE</span>

          <h2>
            Driven By Creativity,
            Guided By Purpose
          </h2>

          <p>
            Everything we do is inspired by our commitment to helping
            creators grow, connect and bring bold ideas to life.
          </p>

        </div>

        <div className="mission-grid">

          {cards.map((card, index) => (

            <motion.div
              className="mission-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >

              <div className="mission-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              {card.text && <p>{card.text}</p>}

              {card.values && (

                <ul>

                  {card.values.map((value) => (

                    <li key={value}>
                      ✓ {value}
                    </li>

                  ))}

                </ul>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Mission;