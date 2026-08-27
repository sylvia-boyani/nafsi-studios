import { motion } from "framer-motion";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import "./Phylosophy.css";

import philosophyImage from "../../../assets/images/mic.jpg";

function Phylosophy() {
  return (
    <section
      className="philosophy"
      style={{
        backgroundImage: `url(${philosophyImage})`,
      }}
    >
      <div className="philosophy-overlay"></div>

      <div className="container philosophy-content">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          OUR PHILOSOPHY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Art belongs
          <br />
          to Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          The mission of nafsi studios is to create an accessible, affordable, and high quality art space that fosters collaborations, partnerships, and education among creators.
          Our guiding vision is to build a sustainable infrastructure and network of artists, educators, and organisers, and their communities.
        </motion.p>

        <Link to="/about">
          <Button>
            Discover Our Story
          </Button>
        </Link>

      </div>
    </section>
  );
}

export default Phylosophy;