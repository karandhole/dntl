
import React, { useState } from "react";
import "./LifeAtDNTL.css";

const images = Array.from({ length: 46 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `/images/gallery/Slide-${number}.jpg`;
});

export default function LifeDntlPage() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="life-page">
      <div className="life-heading">
        <span>OUR PEOPLE • OUR CULTURE</span>
        <h1>Life at DNTL</h1>
        <p>
          A glimpse into our people, workplace, celebrations and
          the moments that make DNTL special.
        </p>
      </div>

      <div className="life-slider">
        <button className="life-arrow left" onClick={previous}>
          &#10094;
        </button>

        <div className="life-image-wrapper">
          <img
            key={current}
            src={images[current]}
            alt={`Life at DNTL - ${current + 1}`}
            className="life-slide-image"
          />
          <div className="life-image-count">
            {String(current + 1).padStart(2, "0")} / 46
          </div>
        </div>

        <button className="life-arrow right" onClick={next}>
          &#10095;
        </button>
      </div>

      <div className="life-slider-bottom">
        <button onClick={previous} className="life-text-btn">
          PREVIOUS
        </button>

        <div className="life-progress">
          <div
            className="life-progress-fill"
            style={{ width: `${((current + 1) / 46) * 100}%` }}
          />
        </div>

        <button onClick={next} className="life-text-btn">
          NEXT
        </button>
      </div>

      <div className="life-thumbnails">
        {images.map((image, index) => (
          <button
            key={image}
            className={`life-thumb ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}
