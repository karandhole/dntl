
import React, { useState } from "react";
import "./Acetonitrile.css";
import xylidineImage from "../../../public/images/products/2-6-Xylidine.jpg";

const Xylidine = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
  };

  return (
    <section className="product-details-section">

      <div className="product-details-container">

        {/* Product Title */}
        <div className="product-page-heading">
          <h1>2,6 Xylidine</h1>
        </div>

        {/* Product Details Table */}
        <table className="product-details-table">
          <tbody>

            <tr>
              <td>Product Name</td>
              <td>2,6 Xylidine</td>
            </tr>

            <tr>
              <td>Synonyms</td>
              <td>2,6-Dimethylaniline</td>
            </tr>

            <tr>
              <td>CAS No</td>
              <td>87-62-7</td>
            </tr>

            <tr>
              <td>Molecular Formula</td>
              <td>
                C<sub>8</sub>H<sub>11</sub>N
              </td>
            </tr>

            <tr className="structure-row">
              <td>Structure</td>
              <td>
                <img
                  src={xylidineImage}
                  alt="2,6 Xylidine Chemical Structure"
                  className="chemical-structure"
                />
              </td>
            </tr>

          </tbody>
        </table>

        {/* Send Enquiry Button */}
        <div className="product-enquiry-button">
          <button onClick={() => setShowModal(true)}>
            SEND ENQUIRY
          </button>
        </div>

      </div>

      {/* Product Enquiry Popup */}
      {showModal && (
        <div
          className="enquiry-overlay"
          onClick={closeModal}
        >

          <div
            className="enquiry-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
          >

            {/* Close Button */}
            <button
              type="button"
              className="enquiry-close"
              onClick={closeModal}
              aria-label="Close enquiry form"
            >
              ×
            </button>

            {/* Popup Heading */}
            <h2 id="enquiry-title">
              Product Enquiry
            </h2>

            {/* Success Message */}
            {isSubmitted ? (

              <div className="enquiry-success">
                <div className="success-icon">
                  ✓
                </div>

                <p>
                  Your message submitted successfully!
                </p>
              </div>

            ) : (

              /* Enquiry Form */
              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />

                <input
                  type="tel"
                  name="contact"
                  placeholder="Enter Your Contact No"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows="5"
                  required
                />

                <button
                  type="submit"
                  className="enquiry-submit"
                >
                  Submit
                </button>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};

export default Xylidine;
