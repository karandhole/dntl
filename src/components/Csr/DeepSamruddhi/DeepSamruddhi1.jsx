
import React from "react";
import "./DeepSamruddhi1.css";

const DeepSamruddhi1 = () => {
  return (
    <section className="deep-samruddhi-section">
      <div className="deep-samruddhi-container">

        {/* Left Content */}
        <div className="deep-samruddhi-content">

          <div className="deep-samruddhi-eyebrow">
            <span className="deep-eyebrow-line"></span>
            OUR CSR INITIATIVE
          </div>

          <h1>
            Deep <span>Samruddhi.</span>
          </h1>

          <h3>
            Building self-reliant communities,
            creating a sustainable tomorrow.
          </h3>

          <p>
            Deep Samruddhi is a key pillar of Deepak Novochem’s
            CSR vision, dedicated to transforming communities
            through meaningful development initiatives.
          </p>

          <p>
            With a focus on rural upliftment, infrastructure
            development and sustainable water facilities,
            we strive to empower villages and create
            opportunities for a better quality of life.
          </p>

          <div className="deep-samruddhi-highlights">

            <div className="deep-highlight">
              <span className="deep-highlight-number">01</span>
              <div>
                <strong>Rural Upliftment</strong>
                <small>Empowering village communities</small>
              </div>
            </div>

            <div className="deep-highlight">
              <span className="deep-highlight-number">02</span>
              <div>
                <strong>Infrastructure</strong>
                <small>Building stronger foundations</small>
              </div>
            </div>

            <div className="deep-highlight">
              <span className="deep-highlight-number">03</span>
              <div>
                <strong>Sustainable Water</strong>
                <small>Supporting access to water resources</small>
              </div>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="deep-samruddhi-visual">

          <div className="deep-image-decoration"></div>

          <div className="deep-samruddhi-image">
            <img
              src="/images/csr/deepsamruddhi/VocationalTraining11.jpg"
              alt="Deep Samruddhi community development initiative"
            />
          </div>

          <div className="deep-image-caption">
            <span className="deep-caption-icon">✳</span>
            <div>
              <strong>Growing Together</strong>
              <small>Creating lasting community impact</small>
            </div>
          </div>

          <div className="deep-image-index">
            <span>CSR</span>
            <strong>01</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DeepSamruddhi1;
