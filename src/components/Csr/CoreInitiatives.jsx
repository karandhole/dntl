
import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./CoreInitiatives.css";

const initiatives = [
  {
    title: "DEEP SAMRUDDHI",
    image: "/images/csr/csr-02.jpg",
    link: "/deep-samruddhi/",
  },
  {
    title: "DEEP JYOTI",
    image: "/images/csr/csr-03.jpeg",
    link: "/deep-jyoti/",
  },
  {
    title: "DEEP GYAN",
    image: "/images/csr/csr-04.jpg",
    link: "/deep-gyan/",
  },
  {
    title: "DEEP KANYA",
    image: "/images/csr/csr-05.png",
    link: "/deep-kanya/",
  },
];

const CoreInitiatives = () => {
  return (
    <section className="core-initiatives">
      <div className="core-initiatives-container">
        <div className="core-initiatives-heading">
          <span className="core-eyebrow">OUR SOCIAL IMPACT</span>
          <h2>
            Core Initiatives <span>Glimpses</span>
          </h2>
          <p>
            Creating meaningful change through initiatives that empower
            communities and build a better tomorrow.
          </p>
        </div>

        <div className="initiatives-grid">
          {initiatives.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="initiative-card"
              key={item.title}
              style={{ "--card-image": `url(${item.image})` }}
            >
              <div className="initiative-card-overlay"></div>

              <div className="initiative-card-content">
                <span className="initiative-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <div className="initiative-link">
                  <span>Know More</span>
                  <span className="initiative-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInitiatives;
