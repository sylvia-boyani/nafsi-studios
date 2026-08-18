import { motion } from "framer-motion";
import "./EventsHero.css";

function EventsHero() {
  return (
    <section className="events-hero">

      <div className="events-hero-overlay"></div>

      <div className="container events-hero-content">

        <motion.span
          className="events-hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          NAFSI STUDIOS EVENTS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Experience.
          <br />
          <span>Create. Connect.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover creative experiences, workshops, performances
          and community events happening at Nafsi Studios.
        </motion.p>

        <motion.div
          className="events-hero-line"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        ></motion.div>

      </div>

    </section>
  );
}

export default EventsHero;