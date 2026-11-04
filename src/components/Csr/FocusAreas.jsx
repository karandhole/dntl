
import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  MapPin,
} from "lucide-react";
import "./FocusAreas.css";

const focusAreas = [
  {
    name: "Khed",
    image: "images/csr/01khed-1.jpg",
    number: "01",
    description: "Our focus area in Khed.",
  },
  {
    name: "Chiplun",
    image: "images/csr/02Chiplun-1.jpg",
    number: "02",
    description: "Our focus area in Chiplun.",
  },
  {
    name: "Guhagar",
    image: "images/csr/03Guhagar-1.jpg",
    number: "03",
    description: "Our focus area in Guhagar.",
  },
];

const actionPlans = [
  {
    year: "2024–25",
    title: "Annual Action Plan",
    link: "https://dntl.co.in/annual-24",
    number: "01",
  },
  {
    year: "2025–26",
    title: "Annual Action Plan",
    link: "https://dntl.co.in/annual-25",
    number: "02",
  },
];

const FocusAreas = () => {
  return (
    <main className="focus-page">

      {/* =========================
          FOCUS AREAS
      ========================= */}
      <section className="focus-section">
        <div className="focus-container">

          <div className="focus-heading">
            <div>
              <span className="focus-eyebrow">
                <span />
                OUR INITIATIVES
              </span>

              <h2>
                Our Focus <span>Areas.</span>
              </h2>
            </div>

            <p>
              Discover the key geographical areas where
              DNTL focuses its initiatives and community
              engagement activities.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.name}>

                <div className="focus-card-image">
                  <img
                    src={area.image}
                    alt={`${area.name} focus area`}
                    loading="lazy"
                  />

                  <div className="focus-image-overlay" />

                  <span className="focus-card-number">
                    {area.number}
                  </span>

                  <div className="focus-card-content">
                    <span className="focus-location-label">
                      <MapPin size={14} />
                      FOCUS AREA
                    </span>

                    <h3>{area.name}</h3>

                    <p>{area.description}</p>
                  </div>

                  <div className="focus-card-arrow">
                    <ArrowUpRight size={21} />
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          ANNUAL ACTION PLANS
      ========================= */}
      <section className="action-plan-section">
        <div className="action-plan-container">

          <div className="action-plan-heading">
            <span className="focus-eyebrow">
              <span />
              PLANNING & DEVELOPMENT
            </span>

            <h2>
              Annual Action <span>Plans.</span>
            </h2>

            <p>
              Explore our annual action plans and the initiatives
              outlined for each financial year.
            </p>
          </div>

          <div className="action-plan-grid">
            {actionPlans.map((plan) => (
              <article className="action-plan-card" key={plan.year}>

                <div className="action-plan-top">
                  <div className="action-plan-icon">
                    <FileText size={25} />
                  </div>

                  {/* <span className="action-plan-number">
                    {plan.number}
                  </span> */}
                </div>

                <div className="action-plan-content">
                  <span className="action-plan-label">
                    <CalendarDays size={14} />
                    FINANCIAL YEAR
                  </span>

                  <h3>{plan.year}</h3>

                  <p>{plan.title}</p>
                </div>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-plan-link"
                >
                  View Action Plan
                  <ArrowUpRight size={18} />
                </a>

              </article>
            ))}
          </div>

          <div className="action-plan-footer">
            <span className="action-plan-footer-line" />
            <p>
              Building stronger communities through
              planned and purposeful initiatives.
            </p>
            <span className="action-plan-footer-line" />
          </div>

        </div>
      </section>

    </main>
  );
};

export default FocusAreas;
