import React, { useEffect, useState } from "react";
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

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

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

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{count}</>;
};

const CompanyStats = () => {
  return (
    <section className="impact-section">
      <div className="impact-wrapper">

        <div className="impact-header">
          <div className="impact-heading-left">
            <span className="impact-label">
              <span className="impact-label-dot"></span>
              THE DNTL ADVANTAGE
            </span>

            <h2>
              Innovation That
              <br />
              <span>Creates Impact.</span>
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

        <div className="impact-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div className="impact-stat" key={index}>
                <div className="impact-stat-top">
                  <div className="impact-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="impact-index">
                    0{index + 1}
                  </span>
                </div>

                <div className="impact-number">
                  <Counter target={stat.number} />
                  <sup>{stat.suffix}</sup>
                </div>

                <div className="impact-stat-footer">
                  <p>{stat.label}</p>
                  <span className="impact-arrow">↗</span>
                </div>

                <div className="impact-progress">
                  <span></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="impact-bottom">
          <span>ENGINEERING A SUSTAINABLE TOMORROW</span>
          <span className="impact-bottom-line"></span>
          <span>DEEPAK NOVOCHEM TECHNOLOGIES LIMITED</span>
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;