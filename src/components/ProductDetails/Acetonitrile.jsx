import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  Beaker,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Globe2,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Acetonitrile.css";

const Acetonitrile = () => {
  const dialogRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const openEnquiry = () => {
    setSubmitted(false);
    dialogRef.current?.showModal();
  };

  const closeEnquiry = () => {
    dialogRef.current?.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend or form service here.
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <main className="acetonitrile-page">
      {/* Breadcrumb */}
      <div className="aceto-breadcrumb">
        <div className="aceto-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products">Products</Link>
          <ChevronRight size={14} />
          <span>Acetonitrile</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="aceto-hero">
        <div className="aceto-container aceto-hero-grid">
          <div className="aceto-hero-content">
            <span className="aceto-eyebrow">
              <span className="aceto-eyebrow-line" />
              OUR PRODUCTS
            </span>

            <h1>
              Aceto<span>nitrile.</span>
            </h1>

            <p className="aceto-hero-description">
              Acetonitrile is part of DNTL's specialty chemical product
              portfolio, supported by our commitment to quality,
              manufacturing expertise and customer partnerships.
            </p>

            <div className="aceto-hero-tags">
              <span><Atom size={15} /> Specialty Chemical</span>
              <span><FlaskConical size={15} /> Organic Compound</span>
            </div>

            <button
              className="aceto-primary-btn"
              onClick={openEnquiry}
            >
              Enquire About This Product
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="aceto-hero-visual">
            <div className="aceto-visual-orbit aceto-orbit-one" />
            <div className="aceto-visual-orbit aceto-orbit-two" />

            <div className="aceto-molecule-card">
              <div className="aceto-molecule-top">
                <span>MOLECULAR STRUCTURE</span>
                <Atom size={20} />
              </div>

               <div className="aceto-molecule-structure xylidine-structure">
                <img
                  src="/images/products/Acetonitrile-1.jpg"
                  alt="Molecular structure Acetonitrile"
                />
              </div>

              <div className="aceto-molecule-bottom">
                <span>CH₃ — C ≡ N</span>
                <span>ACETONITRILE</span>
              </div>
            </div>

            <div className="aceto-floating-icon aceto-floating-one">
              <Beaker size={23} />
            </div>
            <div className="aceto-floating-icon aceto-floating-two">
              <Atom size={22} />
            </div>

            <div className="aceto-visual-caption">
              <span className="aceto-caption-dot" />
              Chemical identity & specifications
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="aceto-details-section">
        <div className="aceto-container">
          <div className="aceto-section-heading">
            <div>
              <span className="aceto-eyebrow">PRODUCT INFORMATION</span>
              <h2>Product <span>Specifications</span></h2>
            </div>
            <p>
              Essential chemical identity and product information for
              Acetonitrile.
            </p>
          </div>

          <div className="aceto-details-layout">
            <div className="aceto-details-intro">
              <div className="aceto-detail-icon">
                <FlaskConical size={25} />
              </div>
              <h3>Acetonitrile</h3>
              <p>
                Explore the key chemical identifiers and molecular
                information for this product.
              </p>
              <div className="aceto-cas-highlight">
                <span>CAS REGISTRY NUMBER</span>
                <strong>75-05-8</strong>
              </div>
            </div>

            <div className="aceto-specifications">
              <div className="aceto-spec-row">
                <div className="aceto-spec-label">
                  <span>01</span>
                  Product Name
                </div>
                <strong>Acetonitrile</strong>
              </div>

              <div className="aceto-spec-row">
                <div className="aceto-spec-label">
                  <span>02</span>
                  Synonyms
                </div>
                <strong>Methyl Cyanide</strong>
              </div>

              <div className="aceto-spec-row">
                <div className="aceto-spec-label">
                  <span>03</span>
                  CAS No.
                </div>
                <strong>75-05-8</strong>
              </div>

              <div className="aceto-spec-row">
                <div className="aceto-spec-label">
                  <span>04</span>
                  Molecular Formula
                </div>
                <strong>C₂H₃N</strong>
              </div>

              <div className="aceto-spec-row">
                <div className="aceto-spec-label">
                  <span>05</span>
                  Molecular Structure
                </div>
                <strong className="aceto-structure-value">
                  CH₃ — C ≡ N
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="aceto-enquiry-section">
        <div className="aceto-container">
          <div className="aceto-enquiry-card">
            <div className="aceto-enquiry-content">
              <span>LET'S WORK TOGETHER</span>
              <h2>
                Looking for Acetonitrile?
                <br />
                <em>Let's discuss your requirements.</em>
              </h2>
              <p>
                Connect with our team for product enquiries and
                business-related discussions.
              </p>
            </div>

            <button
              className="aceto-enquiry-btn"
              onClick={openEnquiry}
            >
              Send Enquiry
              <ArrowUpRight size={19} />
            </button>

            <div className="aceto-enquiry-decoration">
              <Globe2 size={170} strokeWidth={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <dialog
        ref={dialogRef}
        className="aceto-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeEnquiry();
        }}
      >
        <div className="aceto-modal">
          <div className="aceto-modal-header">
            <div>
              <span className="aceto-eyebrow">PRODUCT ENQUIRY</span>
              <h2>Let's start a <span>conversation.</span></h2>
              <p>
                Share your details and our team can get in touch with you.
              </p>
            </div>

            <button
              type="button"
              className="aceto-modal-close"
              onClick={closeEnquiry}
              aria-label="Close enquiry form"
            >
              <X size={21} />
            </button>
          </div>

          {submitted ? (
            <div className="aceto-success">
              <CheckCircle2 size={48} />
              <h3>Thank you for your enquiry!</h3>
              <p>
                Your form has been submitted in this demo. Connect a form
                backend to receive enquiries from customers.
              </p>
              <button
                className="aceto-primary-btn"
                onClick={closeEnquiry}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="aceto-form" onSubmit={handleSubmit}>
              <div className="aceto-form-grid">
                <label>
                  Full Name <span>*</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label>
                  Company Name
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                  />
                </label>

                <label>
                  Email Address <span>*</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>

                <label>
                  Phone Number <span>*</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                  />
                </label>

                <label className="aceto-full-field">
                  Product
                  <input
                    type="text"
                    name="product"
                    value="Acetonitrile"
                    readOnly
                  />
                </label>

                <label className="aceto-full-field">
                  Your Requirement
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your requirements..."
                  />
                </label>
              </div>

              <button type="submit" className="aceto-submit-btn">
                Submit Enquiry
                <ArrowUpRight size={18} />
              </button>

              <p className="aceto-form-note">
                <Mail size={14} />
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          )}
        </div>
      </dialog>
    </main>
  );
};

export default Acetonitrile;