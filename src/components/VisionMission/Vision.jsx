
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



        {/* CARDS */}
        <div className="vm-grid">

          {/* VISION */}
          <div className="vm-card vm-vision-card">
            <div className="vm-card-top">
              <div className="vm-icon">
                <Eye size={27} strokeWidth={1.6} />
              </div>

            </div>

            <span className="vm-card-label">OUR VISION</span>



            <p>
              DNTL aims to be the valued partner to chemical, polymer and life sciences companies worldwide, catering to their specialized outsourcing needs. Our technological solutions in the area of chemistry and chemical engineering in this sphere will be outstanding.
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

            </div>

            <span className="vm-card-label">OUR MISSION</span>


            <p>
              DNTL aims to be an enabler that actively seeks solutions that allow the chemical industry to meet with an ever-increasing demand for better products. With superior manufacturing efficiencies, an ingenious R&D team we will be the preferred partner, instrumental in meeting the chemical industry’s need for innovation.
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
