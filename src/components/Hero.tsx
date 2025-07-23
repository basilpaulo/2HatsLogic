import React from "react";
import "./Hero.css";
import chairImg from "../assets/Chair.png";
import chairMobileImg from "../assets/ChairMobile.png";

const Hero: React.FC = () => {
  return (
    <section className="ecom-hero position-relative">
      <picture>
        {/* Mobile image */}
        <source srcSet={chairMobileImg} media="(max-width: 600px)" />
        {/* Desktop image */}
        <img src={chairImg} alt="Hero Banner" className="ecom-hero-img" />
      </picture>

      <div className="ecom-hero-overlay">
        <h1 className="ecom-hero-title">New Generation Ceramic Tile</h1>
        <p className="ecom-hero-desc">
          Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
          aptent dapibus metus meceanas consequat. Elementum interdum a semper.
          Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis
          sit aliquet at. Magna nam platea justo.
        </p>
        <button className="ecom-hero-btn">LEARN MORE</button>
      </div>
    </section>
  );
};

export default Hero;
