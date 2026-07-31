import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Faq.css";

const faqs = [
  {
    question: "Do I need to book a studio in advance?",
    answer:
      "Yes. We recommend booking in advance to ensure your preferred studio and time slot are available. Walk-ins are welcome where space permits, but availability cannot be guaranteed.",
  },
  {
    question: "What creative spaces can I book?",
    answer:
      "Nafsi Studios offers a Music Studio, Podcast Studio, Dance Studio and Pottery Studio. Each space is designed to support different forms of creative expression.",
  },
  {
    question: "Can I book the studios for workshops or group sessions?",
    answer:
      "Absolutely. Our spaces are available for workshops, rehearsals, community gatherings, training sessions and other creative events. Let us know your requirements when making your booking.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Nafsi Studios is open 24 hours a day, seven days a week. Bookings are scheduled in advance to ensure the space is ready for your session.",
  },
  {
    question: "How long can I book a studio for?",
    answer:
      "Sessions can be booked from one hour to full-day bookings depending on availability and your project's needs.",
  },
  {
    question: "How will I know my booking is confirmed?",
    answer:
      "Once you submit a booking request, our Studio Manager will review it and contact you via email or WhatsApp to confirm availability and finalize your booking.",
  },
];

function Faq() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Everything You Need To Know
          </h2>

          <p>
            We've answered some of the most common questions about
            Nafsi Studios. If you can't find what you're looking for,
            feel free to contact us.
          </p>
        </motion.div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {active === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>

              <div
                className={`faq-answer ${
                  active === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Faq;