
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, FlaskConical } from "lucide-react";

import "./SpecialtyBisphenols.css";

const bisphenolProducts = [
    {
        name: "Tetra Methyl Bisphenol F",
        cas: "5384-21-4",
        slug: "tetra-methyl-bisphenol-f",
    },
    {
        name: "Tetra Methyl Bisphenol A",
        cas: "5613-46-7",
        slug: "tetra-methyl-bisphenol-a",
    },
    {
        name: "Tetra Methyl Bisaniline F",
        cas: "4073-98-7",
        slug: "tetra-methyl-bisaniline-f",
    },
    {
        name: "Tetra Methyl Bisphenol S",
        cas: "13288-70-5",
        slug: "tetra-methyl-bisphenol-s",
    },
    {
        name: "Bisphenol Z",
        cas: "843-55-0",
        slug: "bisphenol-z",
    },
    {
        name: "Bisphenol TMC",
        cas: "129188-99-4",
        slug: "bisphenol-tmc",
    },
    {
        name: "Tetra Methyl Biphenol",
        cas: "2417-04-1",
        slug: "tetra-methyl-biphenol",
    },
    {
        name: "Bisphenol E",
        cas: "2081-08-5",
        slug: "bisphenol-e",
    },
    {
        name: "Dimethyl Bisphenol A",
        cas: "79-97-0",
        slug: "dimethyl-bisphenol-a",
    },
    {
        name: "Dimethyl Bisphenol C",
        cas: "2362-14-3",
        slug: "dimethyl-bisphenol-c",
    },
    {
        name: "Ortho Cumyl Octylphenol",
        cas: "73936-80-8",
        slug: "ortho-cumyl-octylphenol",
    },
    {
        name: "Bisphenol AP",
        cas: "1571-75-1",
        slug: "bisphenol-ap",
    },
];

const SpecialtyBisphenols = () => {
    return (
        <main className="bisphenol-page">

            {/* =================================
    BISPHENOL APPLICATIONS SECTION
================================= */}

            <section className="bisphenol-applications">

                <h2>
                    Our Specialty Bisphenols Are Used In Following Products
                </h2>

                <img
                    src="/images/products/specialty-bisphenols.png"
                    alt="Applications of Specialty Bisphenols"
                />

            </section>

            {/* =================================
                SPECIALTY BISPHENOLS
            ================================= */}

            <section className="bisphenol-products-section">
                <div className="bisphenol-container">

                    {/* Section Heading */}

                    
                    {/* Products Grid */}

                    <div className="bisphenol-products-grid">

                        {bisphenolProducts.map((product, index) => (

                            <article
                                className="bisphenol-product-card"
                                key={product.slug}
                            >

                                {/* Card Top */}

                                <div className="bisphenol-card-top">

                                    <span className="bisphenol-product-number">
                                        {/* {String(index + 1).padStart(2, "0")} */}
                                    </span>

                                    <div className="bisphenol-product-icon">
                                        <FlaskConical size={25} />
                                    </div>

                                </div>

                                {/* Product Content */}

                                <div className="bisphenol-card-content">

                                    <span className="bisphenol-product-label">
                                        SPECIALTY CHEMICAL
                                    </span>

                                    <h3>{product.name}</h3>

                                    <div className="bisphenol-product-cas">

                                        <span>CAS Number</span>

                                        <strong>{product.cas}</strong>

                                    </div>

                                    {/* Product Link */}

                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="bisphenol-product-link"
                                    >
                                        Explore Product
                                        <ArrowUpRight size={17} />
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
};

export default SpecialtyBisphenols;
