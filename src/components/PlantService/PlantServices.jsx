import React from "react";
import { Link } from "react-router-dom";
import {
  Cog,
  Microscope,
  ArrowUpRight,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import "./PlantServices.css";

const services = [
  {
    id: "01",
    title: "Contract Manufacturing",
    description:
      "We encourage outsourcing and contract manufacturing based on our vapour phase reaction technology, offering customized manufacturing services to meet diverse industrial requirements.",
    link: "/contact-manufacturing",
    icon: Cog,
    label: "CUSTOMIZED MANUFACTURING",
  },
  {
    id: "02",
    title: "R&D and Technical Support",
    description:
      "DNTL supports new product development and encourages innovative ideas. We also provide customized products from our existing product range and explore new molecule development.",
    link: "/research-development",
    icon: Microscope,
    label: "INNOVATION & DEVELOPMENT",
  },
];

const PlantServices = () => {
  return (
    <section className="plant-services-section">
      <div className="plant-services-container">

        {/* Section Heading */}
        <div className="plant-services-header">
          <div className="plant-heading-left">
            <span className="plant-section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Plant & <span>Services</span>
            </h2>
          </div>

          <div className="plant-heading-right">
            <p>
          Committed to environmental sustainability and the safety of our people and surrounding communities.
            </p>
            <div className="plant-commitment">
              <Leaf size={18} />
              <span>Responsible Manufacturing. Sustainable Future.</span>
            </div>
          </div>
        </div>

        {/* Environmental Commitment */}
        <div className="plant-highlight">
          <div className="plant-highlight-icon">
            <ShieldCheck size={27} />
          </div>

          <div>
            <h3>Our Commitment to the Environment</h3>
            <p>
              Our process and quality control ensures zero effluent
              discharge at our facilities.
            </p>
          </div>

          <span className="plant-highlight-number">01 / 02</span>
        </div>

        {/* Service Cards */}
        <div className="plant-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="plant-service-card" key={service.id}>

                <div className="plant-card-top">
                  <span className="plant-card-number">
                    {service.id}
                  </span>

                  <span className="plant-card-category">
                    {service.label}
                  </span>
                </div>

                <div className="plant-service-icon">
                  <Icon size={34} strokeWidth={1.6} />
                  <span className="plant-icon-glow"></span>
                </div>

                <div className="plant-service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link to={service.link} className="plant-read-more">
                    <span>Explore Service</span>
                    <span className="plant-read-icon">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>
                </div>

                <div className="plant-card-decoration"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PlantServices;
