

import {
  GraduationCap,
  HandCoins,
  Laptop,
} from "lucide-react";

import "./DeepKanyaActivities.css";

const activities = [
  {
    number: "01",
    title: "Promoting Girl Education",
    description:
      "Promoting and encouraging girls to pursue education and unlock their full potential.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Financial Support for Higher Education",
    description:
      "Providing financial assistance to help girls continue their higher education and achieve their career aspirations.",
    icon: HandCoins,
  },
  {
    number: "03",
    title: "Laptop Distribution",
    description:
      "Distributing laptops to support digital learning and improve access to educational resources.",
    icon: Laptop,
  },
];

const DeepKanyaActivities = () => {
  return (
    <section className="deep-kanya-activities">
      <div className="dka-container">

        <div className="dka-heading">
          <span>DEEP KANYA</span>
          <h2>Key Activities</h2>
          <div className="dka-line"></div>
          <p>
            Empowering girls through education, financial assistance
            and digital opportunities.
          </p>
        </div>

        <div className="dka-grid">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div className="dka-card" key={item.number}>
                <div className="dka-card-top">
                  <div className="dka-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="dka-bottom-line"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DeepKanyaActivities;