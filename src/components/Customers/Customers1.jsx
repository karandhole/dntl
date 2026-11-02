import React from "react";
import {
  Globe2,
  Handshake,
  Lightbulb,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import "./Customers.css";

const markets = [
  "United States",
  "Europe",
  "Switzerland",
  "Japan",
  "South Korea",
  "Thailand",
  "Taiwan",
  "China",
  "Brazil",
  "Israel",
];

const Customers1 = () => {
  return (
    <section className="customers-section">
      <div className="customers-container">

        {/* SECTION HEADER */}
        <div className="customers-header">
          <span className="customers-eyebrow">
            <Globe2 size={16} />
            OUR CUSTOMERS & GLOBAL REACH
          </span>

          <h2>
            Building partnerships.
            <br />
            <span>Creating global impact.</span>
          </h2>

          <p>
            At Deepak Novochem Technologies Limited, we believe lasting
            partnerships are built on trust, innovation and consistent
            performance.
          </p>
        </div>

        {/* CONTENT */}
        <div className="customers-content">
          <div className="customers-story">
            <span className="customers-label">PARTNERSHIP THAT DELIVERS</span>

            <h3>
              More than a supplier.
              <br />
              A partner in progress.
            </h3>

            <p>
              Deepak Novochem Technologies Limited aims to be a long-term,
              reliable and dynamic partner to our customers, delivering real
              performance with better value addition across varied products
              and customer segments.
            </p>

            <p>
              We work closely with our customers to understand their needs,
              develop new products and explore new opportunities. This
              collaborative approach has created mutually beneficial,
              long-term relationships with a diverse customer base and
              strengthened our presence in critical and highly competitive
              markets.
            </p>

            <div className="customers-features">
              <div>
                <Handshake size={21} />
                <span>Long-term partnerships</span>
              </div>

              <div>
                <Lightbulb size={21} />
                <span>Customer-led innovation</span>
              </div>

              <div>
                <TrendingUp size={21} />
                <span>Consistent performance</span>
              </div>
            </div>
          </div>

          {/* EXPORT STATISTIC */}
          <div className="customers-export-card">
            <div className="customers-export-top">
              <span>GLOBAL BUSINESS</span>
              <Globe2 size={25} />
            </div>

            <div className="customers-export-number">
              70<span>%</span>
            </div>

            <h3>Products exported worldwide</h3>

            <p>
              Serving diverse industries and customers across international
              markets.
            </p>

            <div className="customers-export-divider" />

            <div className="customers-market-count">
              <strong>10</strong>
              <span>Key global markets & regions</span>
            </div>
          </div>
        </div>

        {/* GLOBAL MARKETS */}
        <div className="customers-markets">
          <div className="customers-markets-heading">
            <div>
              <span className="customers-label">OUR INTERNATIONAL PRESENCE</span>
              <h3>Connected to global markets.</h3>
            </div>

            <span className="customers-market-tag">
              <span className="customers-live-dot" />
              GLOBAL REACH
            </span>
          </div>

          <div className="customers-market-list">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>

        {/* WORLD MAP */}
        {/* WORLD MAP */}
<div className="customers-map">
  <div className="customers-map-heading">
    <span>OUR GLOBAL FOOTPRINT</span>
    <h3>Across borders. Beyond expectations.</h3>
  </div>

  <div className="customers-map-visual">
    <svg
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrated world map"
      className="customers-world-svg"
    >
      {/* North America */}
      <path d="M75 105 L105 75 150 65 180 80 215 75 245 95 275 105 295 135 280 155 260 165 250 195 225 205 215 230 190 240 180 270 155 265 140 235 120 220 110 190 85 170 70 140 Z" />

      {/* Greenland */}
      <path d="M285 55 L325 35 355 50 350 85 325 110 295 95 Z" />

      {/* South America */}
      <path d="M250 260 L280 250 310 270 325 300 315 330 300 355 295 390 275 430 260 410 250 375 240 340 225 310 230 280 Z" />

      {/* Europe */}
      <path d="M445 115 L475 95 510 100 530 120 515 140 490 150 470 140 450 145 435 130 Z" />

      {/* Africa */}
      <path d="M455 165 L490 150 525 160 550 190 545 225 530 260 515 300 490 335 470 310 455 275 440 240 430 205 440 180 Z" />

      {/* Asia */}
      <path d="M525 105 L565 80 610 75 650 85 685 75 725 90 770 85 810 110 850 120 880 150 860 175 825 180 800 205 770 195 750 215 715 205 690 220 665 195 630 200 605 180 575 185 555 160 530 150 Z" />

      {/* India */}
      <path d="M650 210 L675 205 690 230 680 265 665 290 650 265 640 235 Z" />

      {/* Japan */}
      <path d="M865 190 L875 205 870 225 860 215 Z" />

      {/* Southeast Asia */}
      <path d="M715 235 L745 230 765 250 750 265 725 260 Z" />

      {/* Australia */}
      <path d="M790 315 L825 300 860 310 875 335 855 365 820 375 790 355 780 335 Z" />

      {/* Madagascar */}
      <path d="M555 325 L565 340 560 365 550 350 Z" />
    </svg>

    {/* Export destination markers */}
    <span className="map-marker marker-usa" title="United States" />
    <span className="map-marker marker-europe" title="Europe" />
    <span className="map-marker marker-india" title="India" />
    <span className="map-marker marker-japan" title="Japan" />
    <span className="map-marker marker-brazil" title="Brazil" />
    <span className="map-marker marker-korea" title="South Korea" />
    <span className="map-marker marker-china" title="China" />
  </div>

  <div className="customers-map-caption">
    <Globe2 size={17} />
    <span>Connecting with customers across the world</span>
  </div>
</div>

      </div>
    </section>
  );
};

export default Customers1;