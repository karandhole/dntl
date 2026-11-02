
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import "./MainSlider.css";

const slides = [
  {
    id: 1,
    subtitle: "Innovation",
    title: "Driving Innovation Through Advanced ",
    highlight: "Chemical Technologies.",
    // description:
    //   "Bringing India's finest products to international markets with quality, reliability and excellence.",
    image:"/images/banners/Slider1.jpg"
  },
  {
    id: 2,
    subtitle: "Green Chemistry",
    title: "Building a Sustainable ",
    highlight: "Future.",
    
    image:"/images/banners/slider2.png"
  },
  {
    id: 3,
    subtitle: "Expertise & Partnership",
    title: "Your Partner in Chemical ",
    highlight: "Innovation.",
    image:"/images/banners/slider3.png"
  },
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-slider">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${
            currentSlide === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          aria-hidden={currentSlide !== index}
        >
          <div className="slide-overlay"></div>

          <div className="slider-container">
            <div className="slide-content">

              <span className="slide-subtitle">
                <span className="subtitle-line"></span>
                {slide.subtitle}
              </span>

              <h1>
                {slide.title}
                <br />
                <span>{slide.highlight}</span>
              </h1>

              <p>{slide.description}</p>

              <Link
                to="/contact"
                className="slider-contact-btn"
                tabIndex={currentSlide === index ? 0 : -1}
              >
                Contact Us
                <ArrowUpRight size={19} />
              </Link>

            </div>
          </div>
        </div>
      ))}

      {/* Slider Navigation */}
      <div className="slider-navigation">

        <button
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slider-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index}
            />
          ))}
        </div>

        <button
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* Slide Counter */}
      <div className="slider-counter">
        <span>0{currentSlide + 1}</span>
        <span className="counter-divider"></span>
        <span>0{slides.length}</span>
      </div>

    </section>
  );
};

export default MainSlider;
