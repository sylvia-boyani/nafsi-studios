import { motion } from "framer-motion";
import "./whoWeAre.css";

import storyImage from "../../../assets/2view.jpeg";

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="container">

        {/* ===========================
            IMAGE + STORY
        ============================ */}

        <div className="who-grid">

          <motion.div
            className="who-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={storyImage}
              alt="Nafsi Studios"
            />
          </motion.div>

          <motion.div
            className="who-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span>WHO WE ARE</span>

            <h2>
              More Than A Studio.
              <br />
              A Creative Community.
            </h2>

            <p>
              The building of Nafsi Studios began in 2024 as an answer to one
              important question:
              <strong> What is the role of artists and art at the end of the world?</strong>
            </p>

            <p>
              Founded by five multidisciplinary artists, Nafsi Studios was
              created to bridge the gap within Kenya's creative ecosystem,
              particularly for artists from marginalized identities.
              Located in Kisumu, we are building a home where creativity,
              collaboration and community come together to shape meaningful
              artistic expression.
            </p>

            <p>
              Our goal is to recenter art as a tool for archiving,
              storytelling, world-building and organising communities
              toward liberation. We believe art belongs to the people,
              which is why we strive to provide professional creative
              spaces that remain affordable and accessible.
            </p>

          </motion.div>

        </div>

        {/* ===========================
            PILLARS
        ============================ */}

        <motion.div
          className="who-pillars-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>OUR THREE PILLARS</span>

          <h3>
            Everything We Do Is Built Around These Core Values
          </h3>

          <p>
            Through collaboration, mentorship and community engagement,
            we are creating a creative ecosystem where artists can grow,
            connect and thrive.
          </p>

        </motion.div>

        <div className="who-stats">

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <div className="stat-number">
              01
            </div>

            <h3>
              Creative Collaboration
            </h3>

            <p>
              Dedicated studios supporting music production,
              podcasting, dance and pottery while encouraging
              collaboration across artistic disciplines.
            </p>

          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .25 }}
            viewport={{ once: true }}
          >

            <div className="stat-number">
              02
            </div>

            <h3>
              Mentorship & Education
            </h3>

            <p>
              Fellowship programmes, mentorship initiatives
              and educational opportunities that nurture
              artists from beginner to professional level.
            </p>

          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >

            <div className="stat-number">
              03
            </div>

            <h3>
              Community Organising
            </h3>

            <p>
              Events, exhibitions, showcases and productions
              that strengthen the relationship between artists
              and the communities they create for.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;