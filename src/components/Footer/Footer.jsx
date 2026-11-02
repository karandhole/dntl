import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
    ArrowRight,
    Factory,
    ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const productColumns = [
    [
        { name: "Acetonitrile", url: "/acetonitrile/" },
        { name: "2,6 Xylidine", url: "/26-xylidine/" },
        { name: "Ortho Cresol", url: "/ortho-cresol/" },
        { name: "2,6 Xylenol", url: "/26-xylenol/" },
        { name: "Valeronitrile", url: "/valeronitrile/" },
        { name: "Methoxy Acetic Acid", url: "/methoxy-acetic-acid/" },
        { name: "4 Methyl Cyclohexanone", url: "/4-methyl-cyclohexanone/" },
    ],
    [
        { name: "Tetramethyl Bisphenol F", url: "/tetramethyl-bisphenol-f/" },
        { name: "Tetramethyl Bisphenol A", url: "/tetramethyl-bisphenol-a/" },
        { name: "Tetra Methyl Bisaniline F", url: "/tetra-methyl-bisaniline-f/" },
        { name: "Tetra Methyl Bisphenol S", url: "/tetra-methyl-bisphenol-s/" },
        { name: "Dimethyl Bisphenol A", url: "/dimethyl-bisphenol-a/" },
        { name: "Dimethyl Bisphenol C", url: "/dimethyl-bisphenol-c/" },
        { name: "Tetra Methyl Biphenol", url: "/tetra-methyl-biphenol/" },
    ],
    [
        { name: "Bisphenol E", url: "/bisphenol-e/" },
        { name: "Bisphenol Z", url: "/bisphenol-z/" },
        { name: "Bisphenol TMC", url: "/bisphenol-tmc/" },
        { name: "Bisphenol AP", url: "/bisphenol-ap/" },
        { name: "Ortho Cumyl Octylphenol", url: "/ortho-cumyl-octylphenol/" },
        {
            name: "Trans-4 Methyl Cyclohexylamine Hydrochloride",
            url: "/trans-4-methyl-cyclohexylamine-hydrochloride/",
        },
    ],
];

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <footer className="dntl-footer">

            {/* Top CTA Section */}
            <div className="footer-cta">
                <div className="footer-cta-content">
                    <span className="footer-eyebrow">
                        <span></span> LET'S CONNECT
                    </span>

                    <h2>
                        Building a greener future
                        <br />
                        <span>through chemistry.</span>
                    </h2>

                    {/* <p>
            Looking for innovative chemical solutions?
            Let's discuss how we can work together.
          </p> */}
                </div>

                <Link to="/contact" className="footer-cta-btn">
                    Get In Touch
                    <ArrowUpRight size={20} />
                </Link>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="footer-container">

                    <div className="footer-grid">

                        {/* Company Information */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img
                                    src="/images/logo-bg.png"
                                    alt="Deepak Novochem Technologies Limited"
                                />
                            </Link>

                            <p className="footer-brand-description">
                                Deepak Novochem Technologies Limited develops
                                technological products based on green chemistries
                                and alternate technologies.
                            </p>

                            <div className="footer-brand-tagline">
                                <Factory size={18} />
                                <span>Innovation. Chemistry. Sustainability.</span>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="footer-products">
                            <div className="footer-heading">
                                <span className="footer-heading-line"></span>
                                <h3>Our Products</h3>
                            </div>

                            <div className="footer-product-columns">
                                {productColumns.map((column, index) => (
                                    <ul key={index}>
                                        {column.map((product) => (
                                            <li key={product.url}>
                                                <Link to={product.url}>
                                                    <ArrowRight size={13} />
                                                    {product.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="footer-contact">
                            <div className="footer-heading">
                                <span className="footer-heading-line"></span>
                                <h3>Contact Information</h3>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <MapPin size={20} />
                                </div>

                                <div>
                                    <h4>Our Office</h4>
                                    <p>
                                        515, 5th Floor, City Point 17,
                                        <br />
                                        Boat Club Road,
                                        <br />
                                        Pune - 411001, India
                                    </p>
                                </div>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Phone size={20} />
                                </div>

                                <div>
                                    <h4>Call Us</h4>
                                    <a href="tel:+912066090200">
                                        +91 - 20 - 6609 0200
                                    </a>
                                </div>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Mail size={20} />
                                </div>

                                <div>
                                    <h4>Email Us</h4>
                                    <Link to="/contact">Send an enquiry</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>
                        © {new Date().getFullYear()} Deepak Novochem Technologies
                        Limited. All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span></span>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </div>

                    {showBackToTop && (
                        <button
                            className="back-to-top-btn"
                            aria-label="Back to top"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <ArrowUp size={23} strokeWidth={2.2} />
                        </button>
                    )}
                </div>
            </div>

        </footer>
    );
};

export default Footer;