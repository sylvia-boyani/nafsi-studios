import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import "./SuccessModal.css";

function SuccessModal({
  open,
  onClose,
  tag = "BOOKING RECEIVED",
  title = "Booking Request Sent!",
  message = "Thank you for choosing Nafsi Studios. Our Studio Manager has received your request and will get back to you shortly.",
  buttonText = "Continue Exploring",
  whatsappText = "Continue on WhatsApp",
  whatsappLink,
}) {
  if (!open) return null;

  return (
    <div className="success-overlay">
      <div className="success-modal">

        <div className="success-icon-wrapper">
          <FaCheckCircle className="success-icon" />
        </div>

        <span className="success-tag">
          {tag}
        </span>

        <h2>{title}</h2>

        <p className="success-message">
          {message}
        </p>

        {/* Primary Button */}
        <button
          className="success-btn"
          onClick={onClose}
        >
          {buttonText}
        </button>

        {/* Secondary Button */}
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="success-whatsapp"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            {whatsappText}
          </a>
        )}

      </div>
    </div>
  );
}

export default SuccessModal;