import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./SuccessModal.css";

function SuccessModal({ open, onClose, whatsappLink, }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="success-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="success-modal"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="success-icon">
              <FaCheckCircle />
            </div>

            <span className="success-tag">
              BOOKING RECEIVED
            </span>

            <h2>
              Thank You!
            </h2>

            <p>
              Your booking request has been sent successfully.
              Our Studio Manager will review it and contact you
              within <strong>24 hours</strong>.
            </p>

            <button
              className="success-btn"
              onClick={onClose}
            >
              Continue Exploring
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="success-whatsapp"
            >
             Continue on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;