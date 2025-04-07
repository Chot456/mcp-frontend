// JumbotronSlider.jsx
import React, { useState } from 'react';

const JumbotronSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Images for the slider
  const images = [
    { src: '/img_jumbotron_slider/banner5.jpg', alt: 'Precise Measurements', caption: 'Precise Measurements' },
    { src: '/img_jumbotron_slider/banner6.jpg', alt: 'Geodetic Systems in Action', caption: 'Geodetic Systems in Action' },
    { src: '/img_jumbotron_slider/banner2.jpg', alt: 'Innovation in Geospatial Mapping', caption: 'Innovation in Geospatial Mapping' },
    { src: '/img_jumbotron_slider/banner3.jpg', alt: 'Precise Measurements', caption: 'Precise Measurements' },
    { src: '/img_jumbotron_slider/banner4.jpg', alt: 'Precise Measurements', caption: 'Precise Measurements' }
  ];

  // Change the active index
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="jumbotron">
      {/* Slider */}
      <div className="carousel">
        <div className="carousel-inner">
          {/* Display active slide */}
          <div className="carousel-item active">
            <img
              src={images[activeIndex].src}
              className="d-block w-100 img-fluid"  // Ensuring the image is responsive
              alt={images[activeIndex].alt}
              style={{ height: '600px', objectFit: 'cover' }}  // Setting a fixed height for the image
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{images[activeIndex].caption}</h5>
              <p>State-of-the-art technology at your service.</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default JumbotronSlider;
