import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./CoreInitiatives.css";
import { useNavigate } from "react-router-dom";

const initiatives = [
  {
    title: "DEEP SAMRUDDHI",
    image: "/images/csr/csr-02.jpg",
    path: "/csr/deep-samruddhi",
  },
  {
    title: "DEEP JYOTI",
    image: "/images/csr/csr-03.jpeg",
    path: "/csr/deep-jyoti",
  },
  {
    title: "DEEP GYAN",
    image: "/images/csr/csr-04.jpg",
    path: "/csr/deep-gyan",
  },
  {
    title: "DEEP KANYA",
    image: "/images/csr/csr-05.png",
    path: "/csr/deep-kanya",
  },
];

const CoreInitiatives = () => {
  const navigate = useNavigate();

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
            <div
              className="initiative-card"
              key={item.title}
              role="link"
              tabIndex={0}
              onClick={() => navigate(item.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(item.path);
                }
              }}
              style={{ "--card-image": `url(${item.image})` }}
            >
              <div className="initiative-card-overlay"></div>

              <div className="initiative-card-content">
                <h3>{item.title}</h3>

                <div className="initiative-link">
                  <span>Know More</span>

                  <span className="initiative-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInitiatives;
