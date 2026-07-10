import "./Testimonials.css";

import TestimonialsCard from "./TestimonialsCard";

import avatar1 from "../../../assets/images/mic.jpg";
import avatar2 from "../../../assets/images/music.jpg";
import avatar3 from "../../../assets/images/pottery.jpg";

const testimonials = [
  {
    image: avatar1,
    name: "Sarah Wanjiku",
    role: "Singer • Songwriter",
    quote:
      "Nafsi Studios gave me a creative environment where I could truly express myself. Every session felt inspiring and professional."
  },

  {
    image: avatar2,
    name: "Brian Otieno",
    role: "Podcast Host",
    quote:
      "The podcast studio exceeded my expectations. The equipment, atmosphere and team made every recording effortless."
  },

  {
    image: avatar3,
    name: "Faith Mwangi",
    role: "Ceramic Artist",
    quote:
      "More than just a pottery studio, Nafsi has become a creative community where artists encourage one another to grow."
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