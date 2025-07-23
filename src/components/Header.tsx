import React, { useState } from "react";
import "./Header.css";
import logoImg from "../assets/Logo.png";
import searchImg from "../assets/Search.png";
import basketImg from "../assets/Basket.png";
import profileImg from "../assets/Profile.png";
import heartImg from "../assets/Heart.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (item: string) => {
    setActiveItem(item);

    switch (item) {
      case "HOME":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "PRODUCTS & SERVICES":
        scrollToSection("products-section");
        break;
      case "COMPANY":
        scrollToSection("projects-section");
        break;
      case "MEDIA":
        scrollToSection("footer-section");
        break;
      default:
        break;
    }
  };

  const navItems = [
    "HOME",
    "SPACES",
    "PRODUCTS & SERVICES",
    "SHOWROOMS",
    "COMPANY",
    "MEDIA",
  ];

  return (
    <header className="ecom-header border-bottom">
      <div className="container-fluid">
        {/* Top logo row for desktop */}
        <div className="desktop-logo-container d-none d-md-flex justify-content-center">
          <img src={logoImg} alt="Logo" className="desktop-logo" />
        </div>

        {/* Menu row */}
        <nav className="menu-row d-flex align-items-center justify-content-between">
          {/* Hamburger and logo (mobile only) */}
          <div className="d-flex d-md-none align-items-center gap-2">
            <button
              className="ecom-hamburger"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <img src={logoImg} alt="Logo" className="mobile-logo" />
          </div>

          {/* Left search icon on desktop */}
          <div className="d-none d-md-flex align-items-center desktop-search-wrap">
            <img src={searchImg} alt="Search" className="desktop-search" />
          </div>

          {/* Center menu items (hidden on mobile) */}
          <div className="ecom-menu-center d-none d-md-flex flex-wrap justify-content-center flex-grow-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={`ecom-menu-item btn btn-link p-0 ${
                  activeItem === item ? "active-menu-item" : ""
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side icons */}
          <div className="menu-right d-flex align-items-center gap-2 gap-md-3">
            <img
              src={searchImg}
              alt="Search"
              className="mobile-icon d-md-none"
            />
            <img src={basketImg} alt="Basket" className="menu-icon" />
            <img
              src={heartImg}
              alt="Wishlist"
              className="menu-icon d-none d-md-block"
            />
            <img src={profileImg} alt="Profile" className="menu-icon" />
          </div>
        </nav>
      </div>

      {/* Mobile side drawer */}
      {open && (
        <div
          className="mobile-menu-overlay d-md-none"
          onClick={() => setOpen(false)}
        >
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <div
                key={item}
                className={`mobile-menu-item ${
                  activeItem === item ? "active-menu-item" : ""
                }`}
                onClick={() => {
                  handleMenuClick(item);
                  setOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
