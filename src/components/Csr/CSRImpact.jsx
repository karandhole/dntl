
import React, { useEffect, useRef, useState } from "react";
import "./CSRImpact.css";

const impactData = [
  {
    value: 60000,
    suffix: "+",
    label: "Total Count of Beneficiaries",
  },
  {
    value: 104,
    suffix: "+",
    label: "Number of Projects",
  },
  {
    value: 137,
    suffix: "+",
    label: "Number of Villages Covered",
  },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div className="csr-counter-number" ref={counterRef}>
      {count.toLocaleString("en-IN")}
      <span>{suffix}</span>
    </div>
  );
};

const CSRImpact = () => {
  return (
    <section className="csr-impact">
      <div className="csr-impact-container">
        <div className="csr-impact-heading">
          <span>OUR CONTRIBUTION</span>
          <h2>Our CSR Impact at a Glance</h2>
          <p>
            Together, we are creating measurable impact and
            building stronger, healthier communities.
          </p>
        </div>

        <div className="csr-impact-grid">
          {impactData.map((item, index) => (
            <div className="csr-impact-card" key={item.label}>
              <div className="csr-impact-index">
                0{index + 1}
              </div>

              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
              />

              <p>{item.label}</p>
              <div className="csr-impact-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRImpact;
