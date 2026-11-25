
import React, { useEffect, useRef, useState } from "react";
import "./CompanyStats.css";

const stats = [
  {
    icon: "/images/customer-icon.png",
    number: 266,
    suffix: "+",
    label: "Customers",
    alt: "Customers",
  },
  {
    icon: "/images/employee-icon.png",
    number: 300,
    suffix: "+",
    label: "Employees",
    alt: "Employees",
  },
  {
    icon: "/images/plants-icon.png",
    number: 11,
    suffix: "+",
    label: "Plants",
    alt: "Plants",
  },
];

function AnimatedNumber({ target, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const endValue = Number(target);
    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(endValue * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, start]);

  return (
    <span>
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function CompanyStats() {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="company-stats"
      ref={sectionRef}
    >
      <div className="company-stats-container">

        <h2 className="company-stats-heading">
          DNTL Develops Technological Products,
          <br />
          Products Based On Green Chemistries &amp; Alternate
          <br />
          Technologies
        </h2>

        <div className="company-stats-grid">
          {stats.map((stat) => (
            <div
              className="company-stat-card"
              key={stat.label}
            >
              <div className="company-stat-icon">
                <img src={stat.icon} alt={stat.alt} />
              </div>

              <div className="company-stat-content">
                <h3>
                  <AnimatedNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    start={startCounting}
                  />
                </h3>

                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
