
import React from "react";
import { MapPin, Phone, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const productColumns = [
    [
        { name: "Acetonitrile", url: "/products/acetonitrile/" },
        { name: "2,6 Xylidine", url: "/products/26-xylidine/" },
        { name: "Ortho Cresol", url: "/products/ortho-cresol/" },
        { name: "2,6 Xylenol", url: "/products/26-xylenol/" },
        { name: "Valeronitrile", url: "/products/valeronitrile/" },
        { name: "Methoxy Acetic Acid", url: "/products/methoxy-acetic-acid/" },
        { name: "4 Methyl Cyclohexanone", url: "/products/4-methyl-cyclohexanone/" },
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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="dntl-footer">

            {/* Main Footer */}
            <div className="footer-main">
                <div className="footer-container">

                    {/* Products Section */}
                    <div className="footer-products">

                        <h3 className="footer-title">
                            Products
                        </h3>

                        <div className="footer-product-columns">
                            {productColumns.map((column, index) => (
                                <ul key={index}>
                                    {column.map((product) => (
                                        <li key={product.url}>
                                            <Link to={product.url}>
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                    </div>

                    {/* Contact Information */}
                    <div className="footer-contact">

                        <h3 className="footer-title">
                            Contact Info
                        </h3>

                        <div className="footer-contact-details">

                            <div className="footer-contact-item">
                                <MapPin className="footer-icon" size={27} />

                                <p>
                                    515, 5th Floor, City Point 17,
                                    <br />
                                    Boat Club Road,
                                    <br />
                                    Pune - 411001, India
                                </p>
                            </div>

                            <div className="footer-contact-item">
                                <Phone className="footer-icon" size={25} />

                                <a href="tel:+912066090200">
                                    +91 - 20 - 6609 0200
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Deepak Novochem Technologies
                    Limited. All Rights Reserved.
                </p>

                <button
                    className="back-to-top-btn"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <ChevronUp size={18} />
                </button>

            </div>

        </footer>
    );
};

export default Footer;
