import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import "./EventsCard.css";

function EventCard({
  title,
  category,
  date,
  time,
  image
}) {
  return (
    <div className="event-card">

      <div className="event-image">

        <img src={image} alt={title} />

        <span className="event-category">
          {category}
        </span>

      </div>

      <div className="event-content">

        <div className="event-meta">

          <span>
            <FaCalendarAlt />
            {date}
          </span>

          <span>
            <FaClock />
            {time}
          </span>

        </div>

        <h3>{title}</h3>

        <button className="event-link">
          Learn More
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default EventCard;