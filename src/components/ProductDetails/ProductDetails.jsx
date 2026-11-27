import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import "./Acetonitrile.css";


function formatMolecularFormula(formula) {
    if (!formula) return "—";

    return formula.split(/(\d+)/).map((part, index) =>
        /^\d+$/.test(part) ? (
            <sub key={index}>{part}</sub>
        ) : (
            part
        )
    );
}
export default function ProductDetails() {
    const { slug } = useParams();
    const product = products[slug];

    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!product) {
        return (
            <main className="product-details-section">
                <div className="product-details-container">
                    <h2>Product not found</h2>
                    <Link to="/products">Back to products</Link>
                </div>
            </main>
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    function closeModal() {
        setShowModal(false);
        setSubmitted(false);
    }

    return (
        <main className="product-details-section">
            <div className="product-details-container">
                <div className="product-page-heading">
                    <h1>{product.name}</h1>
                </div>

                <table className="product-details-table">
                    <tbody>
                        <tr>
                            <td>Product Name</td>
                            <td>{product.name}</td>
                        </tr>

                        <tr>
                            <td>Synonyms</td>
                            <td>{product.synonyms || "—"}</td>
                        </tr>

                        <tr>
                            <td>CAS No.</td>
                            <td>{product.casNo || "—"}</td>
                        </tr>
                        <tr>
                            <td>Molecular Formula</td>
                            <td>{formatMolecularFormula(product.molecularFormula)}</td>
                        </tr>

                        <tr className="structure-row">
                            <td>Chemical Structure</td>
                            <td>
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={`${product.name} chemical structure`}
                                        className="chemical-structure"
                                    />
                                ) : (
                                    "—"
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="product-enquiry-button">
                    <button type="button" onClick={() => setShowModal(true)}>
                        SEND ENQUIRY
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="enquiry-overlay" onClick={closeModal}>
                    <div
                        className="enquiry-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="enquiry-heading"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="enquiry-close"
                            onClick={closeModal}
                            aria-label="Close enquiry form"
                        >
                            &times;
                        </button>

                        {submitted ? (
                            <div className="enquiry-success">
                                <div className="success-icon" aria-hidden="true">
                                    ✓
                                </div>
                                <h2 id="enquiry-heading">Thank You!</h2>
                                <p>Your enquiry has been submitted.</p>
                            </div>
                        ) : (
                            <>
                                <h2 id="enquiry-heading">Send Enquiry</h2>
                                <p>Enquiry for: {product.name}</p>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        aria-label="Your Name"
                                        required
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        aria-label="Your Email"
                                        required
                                    />

                                    <input
                                        type="tel"
                                        name="contact"
                                        placeholder="Contact Number"
                                        aria-label="Contact Number"
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        aria-label="Your Message"
                                        rows="4"
                                        defaultValue={`I am interested in ${product.name}.`}
                                        required
                                    />

                                    <button type="submit" className="enquiry-submit">
                                        Submit Enquiry
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}