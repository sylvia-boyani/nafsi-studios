import "./Testimonials.css";

import TestimonialsCard from "./TestimonialsCard";

import avatar1 from "../../../assets/images/mic.jpg";
import avatar2 from "../../../assets/images/music.jpg";
import avatar3 from "../../../assets/images/nafsi-pot2.jpeg";

const testimonials = [
  {
    image: avatar1,
    name: "Sarah Wanjiku",
    role: "Singer • Songwriter",
    quote:
      ""
  },

  {
    image: avatar2,
    name: "Brian Otieno",
    role: "Podcast Host",
    quote:
      ""
  },

  {
    image: avatar3,
    name: "Faith Mwangi",
    role: "Ceramic Artist",
    quote:
      ""
  }
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="testimonials-heading">

          <span>VOICES FROM NAFSI</span>

          <h2>
            Stories From
            Our Creative Community
          </h2>

          <p>
            Discover how artists, creators and storytellers have
            experienced Nafsi Studios.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              {...testimonial}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;