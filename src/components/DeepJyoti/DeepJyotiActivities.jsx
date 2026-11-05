
import {
  HeartPulse,
  Baby,
  Stethoscope,
  HandHeart,
} from "lucide-react";
import "./DeepJyotiActivities.css";

const activities = [
  {
    number: "01",
    title: "Covid Centre Formation",
    description:
      "Establishing support centres to provide care and assistance during the COVID-19 pandemic.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Neo-natal Care",
    description:
      "Supporting initiatives aimed at reducing neo-natal mortality and improving newborn health.",
    icon: Baby,
  },
  {
    number: "03",
    title: "Medical Equipment",
    description:
      "Procurement of ventilators, multipara monitors and other essential medical accessories.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Financial Aid to BPL Patients",
    description:
      "Providing financial assistance to Below Poverty Line patients, nurturing health and wellbeing.",
    icon: HandHeart,
  },
];

const DeepJyotiActivities = () => {
  return (
    <section className="deep-jyoti-activities">
      <div className="dja-container">
        <div className="dja-heading">
          <span>OUR IMPACT</span>
          <h2>Key <strong>Activities</strong></h2>
          <p>Compassionate healthcare support for healthier communities.</p>
        </div>

        <div className="dja-grid">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div className="dja-card" key={item.number}>
                <div className="dja-card-top">
                  <span>{item.number}</span>
                  <div className="dja-icon">
                    <Icon size={23} />
                  </div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dja-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeepJyotiActivities;

