import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./UpcomingEvents.css";

import event1 from "../../../assets/images/music-event.jpg";
import event2 from "../../../assets/images/music.jpg";
import event3 from "../../../assets/images/nafsi-dance2.jpeg";

const events = [
  {
    title: "Creative Arts Workshop",
    date: "15",
    month: "AUG",
    year: "2026",
    time: "10:00 AM – 4:00 PM",
    location: "Nafsi Studios, Kisumu",
    description:
      "A hands-on creative experience bringing together artists, makers and creatives for a day of learning, collaboration and expression.",
    image: event1,
  },
  {
    title: "Nafsi Music Session",
    date: "22",
    month: "AUG",
    year: "2026",
    time: "2:00 PM – 8:00 PM",
    location: "Music Studio",
    description:
      "An intimate creative session celebrating music, collaboration and emerging artists.",
    image: event2,
  },
  {
    title: "Pottery & Creativity Day",
    date: "05",
    month: "SEP",
    year: "2026",
    time: "11:00 AM – 3:00 PM",
    location: "Pottery Studio",
    description:
      "Explore your creativity through clay in a relaxed and inspiring studio environment.",
    image: event3,
  },
];

function UpcomingEvents() {
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <section className="upcoming-events">
      <div className="container">

        {/* SECTION HEADER */}

        <motion.div
          className="events-section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>WHAT'S HAPPENING</span>

          <h2>
            Upcoming Events
          </h2>

          <p>
            From creative workshops to performances and community
            gatherings, there's always something happening at Nafsi.
          </p>
        </motion.div>

        {/* FEATURED EVENT */}

        <motion.div
          className="featured-event"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="featured-event-image">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
            />

            <div className="event-date">
              <strong>{featuredEvent.date}</strong>
              <span>{featuredEvent.month}</span>
            </div>
          </div>

          <div className="featured-event-content">

            <span className="featured-label">
              FEATURED EVENT
            </span>

            <h3>
              {featuredEvent.title}
            </h3>

            <p className="event-description">
              {featuredEvent.description}
            </p>

            <div className="event-details">

              <div>
                <FaCalendarAlt />
                <span>
                  {featuredEvent.date} {featuredEvent.month}{" "}
                  {featuredEvent.year}
                </span>
              </div>

              <div>
                <FaClock />
                <span>{featuredEvent.time}</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>{featuredEvent.location}</span>
              </div>

            </div>

            <button className="event-btn">
              Learn More
              <FaArrowRight />
            </button>

          </div>

        </motion.div>

        {/* OTHER EVENTS */}

        <div className="events-grid">

          {otherEvents.map((event, index) => (

            <motion.article
              className="event-card"
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="event-card-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <div className="event-date small">
                  <strong>{event.date}</strong>
                  <span>{event.month}</span>
                </div>

              </div>

              <div className="event-card-content">

                <h3>{event.title}</h3>

                <p>
                  {event.description}
                </p>

                <div className="event-card-info">

                  <span>
                    <FaClock />
                    {event.time}
                  </span>

                  <span>
                    <FaMapMarkerAlt />
                    {event.location}
                  </span>

                </div>

                <button className="event-card-btn">
                  Learn More
                  <FaArrowRight />
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;