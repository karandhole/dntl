import React from "react";
import { HeartPulse, ShieldCheck, HandHeart, Activity } from "lucide-react";
import "./DeepJyoti1.css";

const DeepJyoti1 = () => {
  return (
    <section className="deep-jyoti-section">
      <div className="deep-jyoti-container">

        {/* LEFT CONTENT */}
        <div className="deep-jyoti-content">

          <span className="jyoti-eyebrow">
            <span className="jyoti-line"></span>
            HEALTH & WELLNESS INITIATIVE
          </span>

          <h1>
            DEEP <span>JYOTI</span>
          </h1>

          <h3>
            Bringing Hope, Healthcare and Better Living to Communities.
          </h3>

          <p>
            Deep Jyoti is Deepak Novochem’s dedicated initiative
            towards health and wellness. It aims to improve the
            overall well-being of Below Poverty Line (BPL) patients
            by providing financial assistance and healthcare support.
          </p>

          <p>
            Through this initiative, we also strive to address
            neonatal mortality and promote better health awareness.
            We believe access to basic healthcare is a fundamental
            right and work towards bridging the healthcare gap
            at the grassroots level.
          </p>

          <div className="jyoti-highlights">

            <div className="jyoti-highlight">
              <span className="jyoti-highlight-icon">
                <HandHeart size={21} />
              </span>
              <div>
                <strong>Financial Healthcare Support</strong>
                <small>Assistance for BPL patients</small>
              </div>
            </div>

            <div className="jyoti-highlight">
              <span className="jyoti-highlight-icon">
                <HeartPulse size={21} />
              </span>
              <div>
                <strong>Maternal & Newborn Care</strong>
                <small>Supporting efforts to reduce neonatal mortality</small>
              </div>
            </div>

            <div className="jyoti-highlight">
              <span className="jyoti-highlight-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <strong>Health Awareness</strong>
                <small>Promoting healthcare at the grassroots level</small>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="deep-jyoti-visual">

          <div className="jyoti-image-decoration"></div>

          <div className="deep-jyoti-image">
            <img
              src="/images/csr/deepjyoti/deepjyoti1.jpg"
              alt="Deep Jyoti healthcare initiative"
            />
          </div>

          <div className="jyoti-image-caption">
            <span className="jyoti-caption-icon">
              <Activity size={22} />
            </span>
            <div>
              <strong>Care. Compassion. Commitment.</strong>
              <small>Building healthier communities</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DeepJyoti1;
