import { motion } from "framer-motion";
import Button from "../../common/Button/Button";
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
          Creativity Begins
          <br />
          With Belonging.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          At Nafsi Studios, every rehearsal,
          every recording, every story and
          every handcrafted piece contributes
          to a community built on creativity,
          collaboration and artistic growth.
        </motion.p>

        <Button>
          Discover Our Story
        </Button>

      </div>
    </section>
  );
}

export default Phylosophy;