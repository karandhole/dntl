
import React from "react";
import {
  ArrowUpRight,
  FlaskConical,
  Lightbulb,
  Microscope,
  Leaf,
  ShieldCheck,
  Factory,
  Globe2,
} from "lucide-react";
import "./CompanyProfile.css";

const highlights = [
  {
    icon: FlaskConical,
    number: "50+",
    title: "Years of Expertise",
    description: "Promoters' experience in handling hazardous chemicals.",
  },
  {
    icon: Lightbulb,
    number: "20+",
    title: "Specialty Bisphenols",
    description: "Development of specialty bisphenol monomers.",
  },
  {
    icon: Factory,
    number: "01",
    title: "Advanced Manufacturing",
    description: "Specialized vapor phase catalytic technologies.",
  },
  {
    icon: Globe2,
    number: "Global",
    title: "Market Presence",
    description: "Serving life sciences and advanced materials segments.",
  },
];

const capabilities = [
  {
    icon: FlaskConical,
    title: "Advanced Chemistry",
    text: "Vapor Phase Catalytic reaction technologies for manufacturing Cresols, Xylenols, specialty Nitriles, specialty Amines and their derivatives.",
  },
  {
    icon: Microscope,
    title: "Research & Development",
    text: "A high-performing R&D team constantly seeks better ways to add value to products and discover new applications.",
  },
  {
    icon: Leaf,
    title: "Green Chemistry",
    text: "Innovative, eco-friendly routes and alternate technologies designed to create sustainable value.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Responsibility",
    text: "Responsible Care, ISO certifications, regular safety drills and a commitment to zero effluent discharge.",
  },
];

const CompanyProfile1 = () => {
  return (
    <main className="company-profile">

      {/* HERO */}
      <section className="profile-hero">
        <div className="profile-container">
          <div className="profile-eyebrow">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h1>
            DEEPAK NOVOCHEM
            <span> TECHNOLOGIES LIMITED</span>
          </h1>

          <div className="profile-hero-bottom">
            <p>
              Innovation, technology and chemistry working together
              to create greater value for customers.
            </p>

            <a href="#profile-overview" className="profile-scroll-link">
              EXPLORE OUR PROFILE
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="profile-hero-line"></div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="profile-overview" id="profile-overview">
        <div className="profile-container">
          <div className="profile-section-heading">
            <span className="profile-label">WHO WE ARE</span>
            <h2>
              Driven by innovation.
              <span> Defined by chemistry.</span>
            </h2>
          </div>

          <div className="profile-overview-content">
            <div className="profile-overview-intro">
              <span className="profile-orange-line"></span>
              <p>
                Customer needs are always varied. DNTL was established with
                the main objective of adding greater value to customers’
                products and realising the potential of innovation.
              </p>
            </div>

            <div className="profile-overview-text">
              <p>
                DNTL focuses on in-house developed technological products,
                products based on green chemistry and alternate technologies,
                and focuses on niche markets as a key intermediate supplier
                for advanced materials and life sciences products. DNTL is in
                the business of phenols and xylenols and their derivatives,
                with manufacturing facilities in India. The promoters have
                had expertise in handling hazardous chemicals for over five
                decades. Under their able guidance, DNTL has incorporated
                the legacy of innovation and excellence, thereby creating
                greater value and gaining customer satisfaction. Our
                facilities are re-created in line with our legacy. We are
                among the very few companies in the world that employ the
                Vapor Phase Catalytic reaction technologies for manufacturing
                various Cresols and Xylenols, specialty Nitriles, specialty
                Amines & their derivatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="profile-highlights">
        <div className="profile-container">
          <div className="profile-highlights-header">
            <div>
              <span className="profile-label">OUR LEGACY</span>
              <h2>Experience that drives progress.</h2>
            </div>
            <p>
              A strong foundation of expertise, technology and continuous
              innovation.
            </p>
          </div>

          <div className="profile-stats-grid">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="profile-stat-card" key={item.title}>
                  <div className="profile-stat-top">
                    <span>0{index + 1}</span>
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <h3>{item.number}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="profile-technology">
        <div className="profile-container">
          <div className="profile-section-heading">
            <span className="profile-label">OUR EXPERTISE</span>
            <h2>
              Technology built around
              <span> possibilities.</span>
            </h2>
          </div>

          <div className="profile-technology-content">
            <div className="profile-technology-intro">
              <p>
                We are able to provide customized products from the same
                facility after mastering and having strong expertise in
                Vapor Phase Catalytic reaction and processes. The company
                is the first in the world to develop a synthetic alternative
                eco-friendly route for acetonitrile. The largest producer
                and supplier of 2,6 Xylidine to the life science segment.
                Specialty bisphenols were previously regarded as downstream
                niche products of cresols and xylenols, developing more than
                20 specialty bisphenol monomers. DNTL develops and
                manufactures a wide range of specialty molecules and
                functional monomers that find end-use applications in the
                life science and advanced materials segments.
              </p>
            </div>

            <div className="profile-capabilities">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="profile-capability" key={item.title}>
                    <div className="profile-capability-number">
                      0{index + 1}
                    </div>

                    <div className="profile-capability-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <div className="profile-capability-text">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                    <ArrowUpRight
                      className="profile-capability-arrow"
                      size={19}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* R&D */}
     
{/* INNOVATION & SUSTAINABILITY */}
<section className="profile-impact">
  <div className="profile-container">
    <span className="profile-label">INNOVATION & RESPONSIBILITY</span>

    <div className="profile-impact-grid">
      {/* R&D */}
      <div className="profile-impact-card">
        <div className="profile-impact-icon">
          <Microscope size={28} strokeWidth={1.5} />
        </div>

        <h2>Research that creates value.</h2>

        <p>
          In line with our main objective, we have a high-performing R&D team
          that constantly seeks to find better ways of bringing value to our
          products and new product applications to become a versatile player
          in the global market.
        </p>
      </div>

      {/* ENVIRONMENT */}
      <div className="profile-impact-card profile-impact-environment">
        <div className="profile-impact-icon">
          <Leaf size={28} strokeWidth={1.5} />
        </div>

        <h2>
          Environmental protection begins at home.
        </h2>

        <p>
          Environmental protection begins at home. We are committed to the
          environment and the safety and security of our people, both within
          the premises and nearby communities. Our process and quality control
          ensure zero effluent discharge at our facilities. As a part of our
          quality system, we conduct safety and security drills at regular
          intervals. We are a Responsible Care and ISO certified company and
          abide by the necessary regulatory norms.
        </p>

        <div className="profile-impact-tag">
          <ShieldCheck size={18} />
          <span>RESPONSIBLE CARE & QUALITY COMMITMENT</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default CompanyProfile1;
