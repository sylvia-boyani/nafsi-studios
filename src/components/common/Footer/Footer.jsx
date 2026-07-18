import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp
} from "react-icons/fa";

import logo from "../../../assets/images/nafsi_logo2.png";

import "./Footer.css";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <img
              src={logo}
              alt="Nafsi Studios"
            />

            <p>
              Nafsi Studios is a multidisciplinary creative arts
              space where music, dance, podcasting and pottery
              come together to inspire creativity, collaboration
              and community.
            </p>

            <div className="footer-social">

              <a href="https://facebook.com">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com">
                <FaInstagram />
              </a>

              <a href="https://youtube.com">
                <FaYoutube />
              </a>

              <a href="https://linkedin.com">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3>Explore</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/spaces">Creative Spaces</Link></li>

              <li><Link to="/events">Events</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

            </ul>

          </div>

          {/* Studios */}

          <div>

            <h3>Studios</h3>

            <ul>

              <li><Link to="/music">Music Studio</Link></li>

              <li><Link to="/podcast">Podcast Studio</Link></li>

              <li><Link to="/dance">Dance Studio</Link></li>

              <li><Link to="/pottery">Pottery Studio</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3>Contact</h3>

            <ul>

              <li>📍 Kisumu, Kenya</li>

              <li>📞 +254 741144434</li>

              <li>✉ info@nafsistudios.co.ke</li>

              <li>Monday - Sunday</li>

              <li>Open 24hrs. Book your night session!</li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Nafsi Studios. All Rights Reserved.
          </p>

          <button
            className="back-top"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;