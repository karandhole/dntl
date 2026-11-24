
import React, { useEffect, useRef, useState } from "react";

import {
  Users,
  UserRoundCheck,
  Factory,
  FlaskConical,
} from "lucide-react";

import "./CompanyStats.css";

const stats = [
  {
    number: 266,
    suffix: "+",
    label: "Global Customers",
    icon: Users,
  },
  {
    number: 300,
    suffix: "+",
    label: "Dedicated Employees",
    icon: UserRoundCheck,
  },
  {
    number: 11,
    suffix: "+",
    label: "Manufacturing Plants",
    icon: Factory,
  },
  {
    number: 20,
    suffix: "+",
    label: "Years of Innovation",
    icon: FlaskConical,
  },
];

/* =========================================
   ANIMATED COUNTER
========================================= */

const Counter = ({ target, duration = 2000, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, active]);

  return <>{count}</>;
};

/* =========================================
   COMPANY STATS SECTION
========================================= */

const CompanyStats = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when stats section enters or leaves screen
  useEffect(() => {
    const section = statsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={statsRef}>
      <div className="impact-wrapper">

        {/* Header */}

        <div className="impact-header">

          <div className="impact-heading-left">

            <span className="impact-label">
              <span className="impact-label-dot"></span>
              THE DNTL ADVANTAGE
            </span>

            <h2>
              Innovation That
              <br />
              Creates Impact.
            </h2>

          </div>

          <div className="impact-heading-right">

            <p>
              Developing technological products through green
              chemistries and alternate technologies to create
              a sustainable future.
            </p>

            <div className="impact-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="impact-stats">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div className="impact-stat" key={index}>

                <div className="impact-stat-top">

                  <div className="impact-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  {/* <span className="impact-index">
                    0{index + 1}
                  </span> */}

                </div>

                {/* Animated Number */}

                <div className="impact-number">

                  <Counter
                    target={stat.number}
                    duration={2000}
                    active={isVisible}
                  />

                  <sup>{stat.suffix}</sup>

                </div>

                <div className="impact-stat-footer">

                  <p>{stat.label}</p>

                  <span className="impact-arrow">
                    ↗
                  </span>

                </div>

                <div className="impact-progress">
                  <span></span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Text */}

        <div className="impact-bottom">

          <span>
            ENGINEERING A SUSTAINABLE TOMORROW
          </span>

          <span className="impact-bottom-line"></span>

          <span>
            DEEPAK NOVOCHEM TECHNOLOGIES LIMITED
          </span>

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;
