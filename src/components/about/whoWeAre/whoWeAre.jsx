import { motion } from "framer-motion";
import "./whoWeAre.css";

import storyImage from "../../../assets/2view.jpeg";

function WhoWeAre() {
  return (
    <section className="who-we-are">

      <div className="container">

        <div className="who-grid">

          <motion.div
            className="who-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <img
              src={storyImage}
              alt="Nafsi Studios"
            />
          </motion.div>

          <motion.div
            className="who-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span>WHO WE ARE</span>

            <h2>
              More Than A Studio.
              <br />
              A Creative Community.
            </h2>

            <p>
              Nafsi Studios was founded with a simple belief: every artist
              deserves a space where creativity can thrive. We created a home
              where musicians, podcasters, dancers and visual artists can
              collaborate, experiment and bring their ideas to life.
            </p>

            <p>
              Our multidisciplinary studios combine professional facilities
              with an inspiring atmosphere that encourages innovation,
              learning and meaningful creative connections. Whether you're
              producing your first project or refining your craft, Nafsi
              Studios is designed to support your journey.
            </p>

            <div className="who-stats">

              <div className="stat-box">
                <h3>4+</h3>
                <span>Creative Studios</span>
              </div>

              <div className="stat-box">
                <h3>500+</h3>
                <span>Artists Served</span>
              </div>

              <div className="stat-box">
                <h3>150+</h3>
                <span>Events Hosted</span>
              </div>

              <div className="stat-box">
                <h3>1000+</h3>
                <span>Creative Sessions</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhoWeAre;