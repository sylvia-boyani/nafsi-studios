import { motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  return (
    <section className="spaces-intro">

      <div className="container">

        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="intro-tag">
            OUR CREATIVE ENVIRONMENTS
          </span>

          <h2>
            Every Creative Journey
            <br />
            Begins With The Right Space.
          </h2>

          <p>
            Nafsi Studios is more than a collection of rooms—it's a home for
            artists, storytellers and creators. Each space is thoughtfully
            designed to inspire creativity, encourage collaboration and provide
            professional tools that allow ideas to flourish.
          </p>

        </motion.div>

        <motion.div
          className="intro-highlights"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="highlight-card">
            <h3>4</h3>
            <p>Creative Studios</p>
          </div>

          <div className="highlight-card">
            <h3>Professional</h3>
            <p>Equipment & Facilities</p>
          </div>

          <div className="highlight-card">
            <h3>Community</h3>
            <p>Driven Creative Space</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Intro;