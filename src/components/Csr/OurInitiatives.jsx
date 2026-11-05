
import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurInitiatives.css";

const initiatives = [
  {
    title: "DEEP SAMRUDDHI",
    subtitle: "Women Empowerment & Community Services",
    image: "/images/csr/VocationalTraining11.jpg",
    path: "/csr/deep-samruddhi",
  },
  {
    title: "DEEP JYOTI",
    subtitle: "Lighting the Path to Health and Wellness",
    image: "/images/csr/initiative2.png",
    path: "/csr/deep-jyoti",
  },
  {
    title: "DEEP GYAN",
    subtitle: "Igniting Young Minds, Shaping Futures",
    image: "/images/csr/initiative3.jpg",
    path: "/csr/deep-gyan",
  },
  {
    title: "DEEP KANYA",
    subtitle: "Educate a Girl, Empower a Generation",
    image: "/images/csr/initiative4.jpg",
    path: "/csr/deep-kanya",
  },
];

const OurInitiatives = () => {
  const navigate = useNavigate();

  return (
    <section className="initiatives-section">
      <div className="initiatives-container">

        <div className="initiatives-heading">
          <span>OUR CSR PROGRAMS</span>
          <h2>Our Initiatives</h2>
          <div className="heading-line"></div>
        </div>

        <div className="initiatives-grid">
          {initiatives.map((item, index) => (
            <div
              className="initiative-box"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => navigate(item.path)}
              role="link"
              tabIndex={0}
              aria-label={`Explore ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(item.path);
                }
              }}
            >
              <div className="initiative-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>

                <span className="explore-btn">
                  Explore More
                  <span className="explore-arrow">↗</span>
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurInitiatives;
