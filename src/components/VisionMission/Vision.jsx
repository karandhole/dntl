
import React from "react";
import {
  Eye,
  Target,
  ArrowUpRight,
  Globe2,
  Lightbulb,
} from "lucide-react";
import "./VisionMission.css";

const Vision = () => {
  return (
    <section className="vision-mission-section">
      <div className="vm-container">

        {/* HEADER */}
        <div className="vm-header">
          <span className="vm-eyebrow">
            <span></span>
            OUR PURPOSE & DIRECTION
          </span>

          <h2>
            Driven by purpose.
            <span> Guided by innovation.</span>
          </h2>

          <p>
            Our vision and mission define our commitment to creating
            meaningful partnerships and advancing the chemical industry
            through technology and innovation.
          </p>
        </div>

        {/* CARDS */}
        <div className="vm-grid">

          {/* VISION */}
          <div className="vm-card vm-vision-card">
            <div className="vm-card-top">
              <div className="vm-icon">
                <Eye size={27} strokeWidth={1.6} />
              </div>
              <span className="vm-number">01</span>
            </div>

            <span className="vm-card-label">OUR VISION</span>

            <h3>
              A valuable partner.
              <span> A global impact.</span>
            </h3>

            <p>
              DNTL aims to be the valuable partner to chemical, polymer and
              life sciences companies worldwide,{" "}
              <strong>
                catering to their specialized outsourcing needs.
              </strong>{" "}
              Our technological solutions in the area of chemistry and
              chemical engineering in this sphere will be outstanding.
            </p>

            <div className="vm-card-footer">
              <Globe2 size={19} />
              <span>PARTNERING BEYOND BOUNDARIES</span>
              <ArrowUpRight size={19} className="vm-arrow" />
            </div>
          </div>

          {/* MISSION */}
          <div className="vm-card vm-mission-card">
            <div className="vm-card-top">
              <div className="vm-icon">
                <Target size={27} strokeWidth={1.6} />
              </div>
              <span className="vm-number">02</span>
            </div>

            <span className="vm-card-label">OUR MISSION</span>

            <h3>
              Enabling progress.
              <span> Inspiring innovation.</span>
            </h3>

            <p>
              DNTL aims to be an enabler that actively seeks solutions that
              allow the chemical industry to{" "}
              <strong>
                meet an ever-increasing demand for better products.
              </strong>{" "}
              With superior manufacturing efficiencies, an ingenious R&D
              team we will be the preferred partner, instrumental in meeting
              the chemical industry’s need for innovation.
            </p>

            <div className="vm-card-footer">
              <Lightbulb size={19} />
              <span>INNOVATION THAT CREATES VALUE</span>
              <ArrowUpRight size={19} className="vm-arrow" />
            </div>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="vm-bottom">
          <span className="vm-bottom-line"></span>
          <p>
            Chemistry. Technology. Innovation.
            <strong> Building possibilities together.</strong>
          </p>
          <span className="vm-bottom-line"></span>
        </div>

      </div>
    </section>
  );
};

export default Vision;
