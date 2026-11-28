
import React, { useEffect, useRef, useState } from "react";
import "./CSRImpact.css";

const impactData = [
  {
    number: 60000,
    suffix: "+",
    label: "Total Count of Beneficiaries",
  },
  {
    number: 104,
    suffix: "+",
    label: "Number of Projects",
  },
  {
    number: 137,
    suffix: "+",
    label: "Number of Villages Covered",
  },
];

const AnimatedCounter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let frameId;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;

          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(target * easedProgress));

            if (progress < 1) {
              frameId = requestAnimationFrame(updateCounter);
            } else {
              setCount(target);
            }
          };

          frameId = requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
};

const CSRImpact = () => {
  return (
    <section className="csr-impact-section">
      <div className="csr-impact-container">

        <div className="csr-impact-heading">
          

          <h2>
           Our CSR Impact at a Glance
          </h2>

        
        </div>

        <div className="csr-impact-stats-grid">
          {impactData.map((item, index) => (
            <div className="csr-impact-card" key={index}>
              <h3>
                <AnimatedCounter
                  target={item.number}
                  suffix={item.suffix}
                />
              </h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CSRImpact;
