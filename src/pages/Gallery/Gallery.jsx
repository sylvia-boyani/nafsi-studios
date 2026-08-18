import React, { useEffect, useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    category: "music",
    image: "/images/mic.jpg",
    title: "Music Sessions",
  },
  {
    id: 2,
    category: "podcast",
    image: "/images/podcast.jpg",
    title: "Podcast Sessions",
  },
  {
    id: 3,
    category: "dance",
    image: "/images/nafsi-dance2.jpeg",
    title: "Dance & Movement",
  },
  {
    id: 4,
    category: "pottery",
    image: "/images/nafsi-pot1.jpeg",
    title: "Pottery & Craft",
  },
  {
    id: 5,
    category: "events",
    image: "/images/event1.jpg",
    title: "Studio Events",
  },
  {
    id: 6,
    category: "music",
    image: "/images/studio.jpeg",
    title: "Live Creation",
  },
  {
    id: 7,
    category: "podcast",
    image: "/images/podcast-event.jpg",
    title: "Behind the Mic",
  },
  {
    id: 8,
    category: "dance",
    image: "/images/nafsi-danceO1.jpeg",
    title: "Creative Movement",
  },
  {
    id: 9,
    category: "pottery",
    image: "/images/pottery-n.jpeg",
    title: "Hands at Work",
  },
  {
    id: 10,
    category: "pottery",
    image: "/images/nafsi-pot3.jpeg",
    title: "The Art of Making",
  },
  {
    id: 11,
    category: "music",
    image: "/images/music2.jpg",
    title: "Sound & Soul",
  },
  {
    id: 12,
    category: "podcast",
    image: "/images/podcast1.jpg",
    title: "Conversations",
  },
];

const behindScenes = [
  {
    id: 1,
    image: "/images/studio.jpeg",
  },
  {
    id: 2,
    image: "/images/mic.jpg",
  },
  {
    id: 3,
    image: "/images/event1.jpg",
  },
  {
    id: 4,
    image: "/images/nafsi-pot1.jpeg",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "all",
    "music",
    "podcast",
    "dance",
    "pottery",
    "events",
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  /* =========================
     LIGHTBOX NAVIGATION
  ========================= */

  const currentIndex = selectedImage
    ? filteredItems.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + 1) % filteredItems.length;

    setSelectedImage(filteredItems[nextIndex]);
  };

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      (currentIndex - 1 + filteredItems.length) %
      filteredItems.length;

    setSelectedImage(filteredItems[previousIndex]);
  };

  /* =========================
     ESC KEY
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  });

  /* =========================
     PREVENT BODY SCROLL
  ========================= */

  useEffect(() => {
    document.body.style.overflow = selectedImage
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="gallery-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">

          <span className="gallery-eyebrow">
            NAFSI STUDIOS
          </span>

          <h1>
            Inside <span>Nafsi Studios</span>
          </h1>

          <p>
            A glimpse into the spaces, people and creativity
            that make Nafsi Studios come alive.
          </p>

        </div>

        <div className="gallery-scroll">
          <span></span>
          <p>Scroll to explore</p>
        </div>

      </section>


      {/* =================================
          FILTERS
      ================================= */}

      <section className="gallery-filters-section">

        <div className="gallery-container">

          <div className="gallery-section-intro">

            <span>EXPLORE OUR WORLD</span>

            <h2>
              Moments of <em>Creation</em>
            </h2>

          </div>

          <div className="gallery-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImage(null);
                }}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          FEATURED GALLERY
      ================================= */}

      <section className="featured-gallery">

        <div className="gallery-container">

          <div className="gallery-grid">

            {filteredItems.map((item, index) => (

              <article
                className={`gallery-item gallery-item-${(index % 8) + 1}`}
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-item-overlay">

                  <div>

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                  <button
                    className="gallery-view"
                    aria-label={`View ${item.title}`}
                  >
                    ↗
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          BEHIND THE SCENES
      ================================= */}

      <section className="behind-scenes">

        <div className="gallery-container">

          <div className="behind-header">

            <div>

              <span>
                THE MOMENTS BETWEEN
              </span>

              <h2>
                Behind the <em>Scenes</em>
              </h2>

            </div>

            <p>
              The laughter, preparation, experimentation
              and energy that happen before the final
              creation comes to life.
            </p>

          </div>


          <div className="behind-grid">

            {behindScenes.map((item) => (

              <div
                className="behind-image"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt="Behind the scenes at Nafsi Studios"
                  loading="lazy"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="gallery-cta">

        <div className="gallery-cta-overlay"></div>

        <div className="gallery-cta-content">

          <span>
            YOUR NEXT CREATION STARTS HERE
          </span>

          <h2>
            Ready to <em>Create?</em>
          </h2>

          <p>
            Bring your ideas to life in a space designed
            for creativity, collaboration and expression.
          </p>

          <a
            href="/contact"
            className="gallery-cta-button"
          >
            Book a Session
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =================================
          LIGHTBOX
      ================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>


          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ←
          </button>


          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

            </div>

          </div>


          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            →
          </button>

        </div>

      )}

    </main>
  );
};

export default Gallery;