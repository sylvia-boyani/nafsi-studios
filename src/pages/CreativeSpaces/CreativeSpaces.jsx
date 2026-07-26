import Hero from "../../components/spaces/hero/Hero";
import Intro from "../../components/spaces/intro/Intro";
import Studio from "../../components/spaces/studio/Studio";


import music1 from "../../assets/images/music-event.jpg";
import music2 from "../../assets/images/music.jpg";
import music3 from "../../assets/images/music2.jpg";

import podcast1 from "../../assets/images/podcast-event.jpg";
import podcast2 from "../../assets/images/podcast.jpg";
import podcast3 from "../../assets/images/podcast1.jpg";

import dance1 from "../../assets/images/nafsi-danceO.jpeg";
import dance2 from "../../assets/images/nafsi-dance2.jpeg";
import dance3 from "../../assets/images/nafsi-danceO1.jpeg";

import pottery1 from "../../assets/images/pottery-n.jpeg";
import pottery2 from "../../assets/images/pottery-nafsi.jpeg";
import pottery3 from "../../assets/images/nafsi-pot3.jpeg";

function CreativeSpaces() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <Intro />

      {/* ==========================================
          MUSIC STUDIO
      ========================================== */}

      <Studio
        title="Music Studio"
        images={[music1, music2, music3]}
        description="Our Music Studio is built for musicians, producers, vocalists and bands seeking a professional recording experience. From demos to full album production, the space is designed to help every idea become reality."

        features={[
          "Professional Recording Booth",
          "Mixing & Mastering",
          "Studio Monitors",
          "Premium Microphones",
          "Acoustic Treatment",
          "Artist Lounge"
        ]}

        capacity="Up to 8 Artists"

        booking="Hourly • Half Day • Full Day"

        idealFor="Recording • Production • Rehearsals"
      />

      {/* ==========================================
          PODCAST STUDIO
      ========================================== */}

      <Studio
        reverse
        title="Podcast Studio"
        images={[podcast1, podcast2, podcast3]}
        description="Create engaging podcasts, interviews and digital content using modern recording equipment in a comfortable and acoustically treated environment."

        features={[
          "Broadcast Microphones",
          "Video Podcast Setup",
          "Professional Lighting",
          "Editing Suite",
          "Soundproof Recording",
          "Live Streaming"
        ]}

        capacity="Up to 5 Creators"

        booking="Hourly • Full Day"

        idealFor="Podcasts • Interviews • Livestreams"
      />

      {/* ==========================================
          DANCE STUDIO
      ========================================== */}

      <Studio
        title="Dance Studio"
        images={[dance1, dance2, dance3]}
        description="A spacious movement studio created for dancers, choreographers and performers. Whether you're rehearsing, teaching or preparing for the stage, you'll have room to create."

        features={[
          "Professional Dance Floor",
          "Full-Length Mirrors",
          "Premium Sound System",
          "Natural Lighting",
          "Private Rehearsals",
          "Group Classes"
        ]}

        capacity="Up to 25 Dancers"

        booking="Hourly • Half Day • Full Day"

        idealFor="Dance • Theatre • Fitness"
      />

      {/* ==========================================
          POTTERY STUDIO
      ========================================== */}

      <Studio
        reverse
        title="Pottery Studio"
        images={[pottery1, pottery2, pottery3]}
        description="Discover the joy of clay and ceramics in a calm, inspiring workspace designed for both beginners and experienced ceramic artists."

        features={[
          "Pottery Wheels",
          "Kiln Access",
          "Clay Preparation Area",
          "Individual Workstations",
          "Storage Space",
          "Community Workshops"
        ]}

        capacity="Up to 12 Artists"

        booking="Half Day • Full Day"

        idealFor="Ceramics • Sculpture • Workshops"
      />

      {/* CTA */}

      {/* <BookingCTA /> */}
    </>
  );
}

export default CreativeSpaces;