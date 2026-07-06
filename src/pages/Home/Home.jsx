import Hero from "../../components/home/Hero";
import Phylosophy from "../../components/home/Phylosophy/Phylosophy";
import CreativeSpaces from "../../components/home/CreativeSpaces/CreativeSpaces"
import Experience from "../../components/home/Experience/Experience"
import EventsPreview from "../../components/home/Events/EventsPreview"
import GalleryPreview from "../../components/home/Gallery/GalleryPreview"

function Home() {
  return (
    <>
      <Hero />
      <Phylosophy />
      <CreativeSpaces />
      <Experience />
      <EventsPreview />
      <GalleryPreview />
    </>
  );
}

export default Home;