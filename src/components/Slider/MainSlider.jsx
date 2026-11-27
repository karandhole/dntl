
import { useState, useEffect } from "react";
import "./MainSlider.css";

const slides = [
  { id: 1, title: "Sustainable Technology" },
  { id: 2, title: "Alkylation" },
  { id: 3, title: "Hydrogenation" },
  { id: 4, title: "Condensation" },
  { id: 5, title: "Oxidation" },
  { id: 6, title: "Ammonolysis" },
  { id: 7, title: "Ammoxidation" },
  { id: 8, title: "Ketonization" },
  { id: 9, title: "Isomerization" },
  { id: 10, title: "Vapour Phase Catalytic Reaction" },
];
const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="main-slider">
      {/* Background image */}
      <div className="slider-background" />

      {/* Background overlay */}
      <div className="slide-overlay" />

      {/* Animated title */}
      <div className="slider-container">
        <div className="slide-content" key={slide.id}>
          <h1 className="slide-title">{slide.title}</h1>

          {slide.description && <p>{slide.description}</p>}
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
