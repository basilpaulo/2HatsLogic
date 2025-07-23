import React, { useState } from 'react';
import './Projects.css';
import underlineImg from '../assets/Underline.png';
import kingdomTowerImg from '../assets/KingdomTower.png';
import dubaiMallImg from '../assets/DubaiMall.png';
import kingRoadImg from '../assets/KingRoadOffices.png';
import beachTowerImg from '../assets/BeachTowerAlupang.png';
import arrowLeft from '../assets/ArrowLeft.png';
import arrowRight from '../assets/ArrowRight.png';

const projectImages = [
  { src: kingdomTowerImg, alt: 'Kingdom Tower' },
  { src: dubaiMallImg, alt: 'Dubai Mall' },
  { src: kingRoadImg, alt: 'King Road Offices' },
  { src: beachTowerImg, alt: 'Beach Tower Alupang' },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const goToPrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  return (
    <section className="ecom-projects container py-4">
      <div className="text-center mb-3">
        <h1
          className="ecom-hero-title text-black m-0"
          style={{ fontSize: '3rem', marginTop: '-10px' }}
        >
          Projects
        </h1>
        <img
          src={underlineImg}
          alt="underline"
          style={{ display: 'block', margin: '12px auto 12px' }}
        />
        <p className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
        <p className="mt-0">been the industry's standard dummy text.</p>

        {/* ✅ Desktop Grid */}
        <div className="container mt-4 d-none d-md-block">
          <div className="row g-0 justify-content-center">
            {projectImages.map((img, idx) => (
              <div key={idx} className="col-12 col-md-3" style={{ padding: '10px' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid w-100"
                  style={{ objectFit: 'contain', height: '300px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Mobile Carousel */}
        <div className="mobile-carousel d-md-none mt-3">
          <div className="carousel-image-wrapper">
            <button className="arrow left-arrow" onClick={goToPrev}>
              <img src={arrowLeft} alt="Previous" />
            </button>

            <div
              className={`carousel-image-container ${
                direction === 'next' ? 'slide-next' : 'slide-prev'
              }`}
              key={currentIndex}
            >
              <img
                src={projectImages[currentIndex].src}
                alt={projectImages[currentIndex].alt}
                className="carousel-image"
              />
            </div>

            <button className="arrow right-arrow" onClick={goToNext}>
              <img src={arrowRight} alt="Next" />
            </button>
          </div>

          <div className="carousel-dots">
            {projectImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            className="btn px-4"
            style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0' }}
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
