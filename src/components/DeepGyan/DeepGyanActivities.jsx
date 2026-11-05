

import {
  Monitor,
  Presentation,
  FlaskConical,
  School,
  Archive,
  Droplets,
  Armchair,
} from "lucide-react";

import "./DeepGyanActivities.css";

const activities = [
  {
    number: "01",
    title: "Computer Labs",
    description:
      "Provision of computer laboratories to encourage digital literacy and practical learning.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Digital Learning Classrooms",
    description:
      "Provision of interactive digital classrooms to create engaging and modern learning experiences.",
    icon: Presentation,
  },
  {
    number: "03",
    title: "Science Laboratories",
    description:
      "Construction of science laboratories along with essential laboratory equipment.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "School Infrastructure & Amenities",
    description: "Improving school facilities through the provision of:",
    icon: School,
    amenities: [
      { label: "Cupboards", icon: Archive },
      { label: "Water Coolers", icon: Droplets },
      { label: "Classroom Benches", icon: Armchair },
    ],
  },
];

const DeepGyanActivities = () => {
  return (
    <section className="deep-gyan-activities">
      <div className="dga-container">

        <div className="dga-heading">
          <span>DEEP GYAN</span>
          <h2>Key Activities</h2>
          <div className="dga-heading-line"></div>
          <p>
            Creating better learning environments through educational
            infrastructure and modern facilities.
          </p>
        </div>

        <div className="dga-grid">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div className="dga-card" key={item.number}>
                <div className="dga-card-top">
                  <div className="dga-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.amenities && (
                  <div className="dga-amenities">
                    {item.amenities.map((amenity) => {
                      const AmenityIcon = amenity.icon;

                      return (
                        <div key={amenity.label}>
                          <AmenityIcon size={16} />
                          <span>{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="dga-bottom-line"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DeepGyanActivities;