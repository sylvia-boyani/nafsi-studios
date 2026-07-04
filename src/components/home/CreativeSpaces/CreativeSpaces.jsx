import "./CreativeSpaces.css";
import SpaceCard from "./SpaceCard";

import music from "../../../assets/images/music.jpg";
import podcast from "../../../assets/images/podcast.jpg";
import dance from "../../../assets/images/dance.jpg";
import pottery from "../../../assets/images/pottery.jpg";

const spaces = [
  {
    title: "Music Studio",
    description:
      "Professional recording, mixing and mastering for artists and creators.",
    image: music,
  },
  {
    title: "Podcast Studio",
    description:
      "Audio and video podcast production with professional equipment.",
    image: podcast,
  },
  {
    title: "Dance Studio",
    description:
      "A versatile rehearsal and performance space for dancers and instructors.",
    image: dance,
  },
  {
    title: "Pottery Studio",
    description:
      "A creative environment for pottery classes, workshops and ceramic art.",
    image: pottery,
  },
];

function CreativeSpaces() {
  return (
    <section className="creative-spaces">
      <div className="container">

        <div className="spaces-heading">

          <span>OUR CREATIVE SPACES</span>

          <h2>
            Designed for Every
            Creative Journey.
          </h2>

          <p>
            Discover inspiring spaces crafted for musicians,
            storytellers, dancers and makers to create,
            collaborate and grow.
          </p>

        </div>

        {spaces.map((space, index) => (
          <SpaceCard
            key={index}
            {...space}
            reverse={index % 2 !== 0}
          />
        ))}

      </div>
    </section>
  );
}

export default CreativeSpaces;