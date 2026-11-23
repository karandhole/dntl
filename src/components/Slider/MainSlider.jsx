import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./MainSlider.css";

const slides = [
  {
    id: 1,
    title: "Sustainable Technology",
   
  },
  {
    id: 2,
    title: "Alkylation",
    
  },
  {
    id: 3,
    title: "Hydrogenation",
    
  },
  {
    id: 4,
    title: "Condensation",
    
  },
  {
    id: 5,
    title: "Oxidation",
    
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

  const slide = slides[currentSlide];

  return (
    <section className="main-slider">

      {/* Fixed background image for all slides */}
      <div className="slider-background" />

      {/* Background overlay */}
      <div className="slide-overlay" />

      {/* Navbar can be placed here if needed */}

      {/* Centered animated text */}
      <div className="slider-container">
        <div
          className="slide-content"
          key={slide.id}
        >
          <h1>{slide.title}</h1>

          <p>{slide.description}</p>
        </div>
      </div>

      {/* Slider Navigation */}
    

      {/* Slide Counter */}
      <div className="slider-counter">
        <span>
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <span className="counter-divider" />

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

    </section>
  );
};

export default MainSlider;