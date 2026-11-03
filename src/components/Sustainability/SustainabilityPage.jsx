
import React from "react";
import "./Sustainability.css";

const sustainabilityLogos = [
  {
    name: "Sustainability Initiative 1",
    image: "/images/about/logo02.jpg",
  },
  {
    name: "Sustainability Initiative 2",
    image: "/images/about/logo01.jpg",
  },
  {
    name: "Sustainability Initiative 3",
    image: "/images/about/logo03.png",
  },
];

const certifications = [
  {
    name: "ISO 9001",
    image: "/images/sustainability/cover.jpg",
    pdf: "/images/sustainability/ISO-9001-2015.pdf",
  },
  {
    name: "ISO 14001",
    image: "/images/sustainability/cover.jpg",
    pdf: "/images/sustainability/ISO-14001-2015.pdf",
  },
  {
    name: "ISO 45001",
    image: "/images/sustainability/cover.jpg",
    pdf: "/images/sustainability/ISO-45001-2018.pdf",
  },
];

const SustainabilityPage = () => {
  return (
    <main className="sustainability-page">

      {/* Sustainability Logos Section */}
      <section className="sustainability-section">
        <div className="sustainability-heading">
          <span className="sustainability-eyebrow">
            RESPONSIBLE BUSINESS
          </span>
          <h1>Sustainability</h1>
          <p>
            Building a responsible future through sustainable practices,
            environmental care and continuous improvement.
          </p>
        </div>

        <div className="sustainability-logo-grid">
          {sustainabilityLogos.map((logo, index) => (
            <div className="sustainability-logo-card" key={index}>
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="certifications-heading">
          <span className="sustainability-eyebrow">
            QUALITY & EXCELLENCE
          </span>
          <h2>Our Certifications</h2>
          <p>
            Our certifications reflect our commitment to quality,
            environmental responsibility and workplace safety.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <a
              href={certification.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
              key={index}
              aria-label={`View ${certification.name} certificate PDF`}
            >
              <div className="certification-image">
                <img
                  src={certification.image}
                  alt={`${certification.name} certificate`}
                />
                <div className="certificate-overlay">
                  <span>View Certificate ↗</span>
                </div>
              </div>

              <div className="certification-info">
                <h3>{certification.name}</h3>
                <span className="certificate-link">
                  VIEW PDF <span>↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
};

export default SustainabilityPage;
