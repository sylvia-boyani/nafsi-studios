import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaDirections,
} from "react-icons/fa";

import "./Map.css";

function Map() {
  return (
    <section className="map-section">
      <div className="container">

        <motion.div
          className="map-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span>VISIT US</span>

          <h2>
            Find Nafsi Studios
          </h2>

          <p>
            We'd love to welcome you into our creative home.
            Whether you're recording music, creating pottery,
            producing a podcast or simply visiting,
            our doors are open.
          </p>
        </motion.div>

        <div className="map-grid">

          {/* GOOGLE MAP */}

          <motion.div
            className="google-map"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <iframe
              title="Nafsi Studios Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.15589365797!2d34.57335507733867!3d-0.0746291790793405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa437ad4ac81d%3A0x2012a439d6248dd2!2sKisumu!5e0!3m2!1sen!2ske!4v1785518782669!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
            />

          </motion.div>

          {/* INFO */}

          <motion.div
            className="map-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="map-card">

              <FaMapMarkerAlt />

              <div>
                <h4>Location</h4>
                <p>Kisumu, Kenya</p>
              </div>

            </div>

            <div className="map-card">

              <FaPhoneAlt />

              <div>
                <h4>Phone</h4>
                <p>+254 741 144 434</p>
              </div>

            </div>

            <div className="map-card">

              <FaEnvelope />

              <div>
                <h4>Email</h4>
                <p>nafsistudios.art27@gmail.com</p>
              </div>

            </div>

            <div className="map-card">

              <FaClock />

              <div>
                <h4>Hours</h4>
                <p>Open 24 Hours</p>
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=Kisumu,Kenya"
              target="_blank"
              rel="noreferrer"
              className="directions-btn"
            >
              <FaDirections />

              Get Directions

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Map;