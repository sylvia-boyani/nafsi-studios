import "./CreativeSpaces.css";
import SpaceCard from "./SpaceCard";

import music from "../../../assets/images/music.jpg";
import podcast from "../../../assets/images/podcast.jpg";
import dance from "../../../assets/images/nafsi-dance2.jpeg";
import pottery from "../../../assets/images/pottery-nafsi.jpeg";

const spaces = [
  {
    title: "Music Studio",
    description:
      "A state of the art studio for recording, mixing, and mastering for singers, producers, and musicians.",
    image: music,
  },
  {
    title: "Podcast Studio",
    description:
      "Audio-visual space with equipment for those ready to take up space",
    image: podcast,
  },
  {
    title: "Dance Studio",
    description:
      "A space that suits solo and group works for dancers, choreographers, and instructors.",
    image: dance,
  },
  {
    title: "Pottery Studio",
    description:
      "Studio built for advanced, intermediary, and beginner ceramists and potters for creation and classes/workshops.",
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
            What are the creators creating?
          </h2>

          <p>
           The studios are integrated to support creators at different levels of creation and their careers.
           With four studios down and more to go, our work is just beginning:
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