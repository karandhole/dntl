
import React, { useState } from "react";
import "./Acetonitrile.css";

const Acetonitrile = () => {
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
                    <h1>Acetonitrile</h1>
                </div>

                {/* Product Details Table */}
                <table className="product-details-table">
                    <tbody>

                        <tr>
                            <td>Product Name</td>
                            <td>Acetonitrile</td>
                        </tr>

                        <tr>
                            <td>Synonyms</td>
                            <td>Methyl Cyanide</td>
                        </tr>

                        <tr>
                            <td>CAS No</td>
                            <td>75-05-8</td>
                        </tr>

                        <tr>
                            <td>Molecular Formula</td>
                            <td>
                                C<sub>2</sub>H<sub>3</sub>N
                            </td>
                        </tr>

                        <tr className="structure-row">
                            <td>Structure</td>
                            <td>
                                <svg
                                    className="chemical-structure"
                                    viewBox="0 0 110 55"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="8"
                                        y1="30"
                                        x2="43"
                                        y2="30"
                                        stroke="#333"
                                        strokeWidth="2.5"
                                    />

                                    <line
                                        x1="43"
                                        y1="22"
                                        x2="70"
                                        y2="22"
                                        stroke="#333"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="43"
                                        y1="30"
                                        x2="70"
                                        y2="30"
                                        stroke="#333"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="43"
                                        y1="38"
                                        x2="70"
                                        y2="38"
                                        stroke="#333"
                                        strokeWidth="2"
                                    />

                                    <text
                                        x="76"
                                        y="36"
                                        fontSize="21"
                                        fontWeight="600"
                                        fill="#333"
                                    >
                                        N
                                    </text>
                                </svg>
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

export default Acetonitrile;
