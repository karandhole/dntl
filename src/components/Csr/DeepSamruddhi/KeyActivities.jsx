import React from "react";
import {
  House,
  HeartHandshake,
  HandHeart,
  GraduationCap,
  Droplets,
  Sun,
  Utensils,
  Gem,
  Package,
  Building2,
  Users,
} from "lucide-react";

import "./KeyActivities.css";

const activities = [
  {
    number: "01",
    title: "Chiplun Flood Relief",
    icon: House,
    items: [
      "Provided food and water during crisis situations",
      "Construction of houses",
    ],
  },
  {
    number: "02",
    title: "Support to Livelihood",
    icon: HeartHandshake,
    items: ["Supporting sustainable livelihood opportunities"],
  },
  {
    number: "03",
    title: "Helping Old Age Homes",
    icon: HandHeart,
    items: ["Support and assistance for elderly care"],
  },
  {
    number: "04",
    title: "Vocational Training & Skill Development",
    icon: GraduationCap,
    items: [
      "Training for masala making",
      "Training in bakery product making",
      "Artificial jewellery making",
      "Manufacturing of cleaning materials",
    ],
  },
];

const developmentProjects = [
  {
    icon: Droplets,
    title: "Water Projects",
    items: [
      "Creation of water reservoirs",
      "Rainwater harvesting tanks",
      "Borewells and RCC water wells",
      "Water pipelines",
      "Installation of HP water pumps",
    ],
  },
  {
    icon: Sun,
    title: "Solar Projects",
    items: ["Solar streetlights"],
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    items: ["Construction of concrete pathways"],
  },
];

const KeyActivities = () => {
  return (
    <section className="key-activities">
      <div className="key-activities-container">

        <div className="activities-heading">
          <span className="activities-eyebrow">
            DEEP SAMRUDDHI
          </span>

          <h2>
            Key <span>Activities</span>
          </h2>

          <p>
            Empowering communities through meaningful initiatives,
            sustainable development and opportunities for growth.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div className="activity-card" key={activity.number}>
                <div className="activity-card-top">
                  <span className="activity-number">
                    {activity.number}
                  </span>

                  <div className="activity-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <h3>{activity.title}</h3>

                <ul>
                  {activity.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="rural-development">
          <div className="development-heading">
            <span className="activities-eyebrow">
              BUILDING BETTER COMMUNITIES
            </span>

            <h2>
              Sustainable Rural <span>Development</span>
            </h2>

            <p>
              Developing essential infrastructure and sustainable
              facilities to improve everyday life in rural communities.
            </p>
          </div>

          <div className="development-grid">
            {developmentProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <div className="development-card" key={index}>
                  <div className="development-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{project.title}</h3>

                  <ul>
                    {project.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyActivities;