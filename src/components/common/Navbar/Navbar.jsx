import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Button/Button";
import logo from "../../../assets/images/nafsi_logo2.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-container">

        {/* Logo */}
            <NavLink to="/" className="logo">
  <img
    src={logo}
    alt="Nafsi Studios"
    className="logo-image"
  />
</NavLink>

        {/* Desktop Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/spaces" onClick={() => setMenuOpen(false)}>
            Spaces
          </NavLink>

          <NavLink to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </NavLink>

          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

        </nav>

        {/* CTA Button */}
        <div className="nav-right">

          <Button>Book a Session</Button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;