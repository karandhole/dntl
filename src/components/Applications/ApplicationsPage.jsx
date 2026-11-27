import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Factory } from "lucide-react";
import "./Applications.css";

const productPaths = {
    "Ortho Cresol": "/products/ortho-cresol",
    "2,6-Xylidine": "/products/2-6-xylidine",
    "Acetonitrile": "/products/acetonitrile",
    "2,6 Xylenol": "/products/2-6-xylenol",
    "4 Methyl Cyclohexanone": "/products/4-methyl-cyclohexanone",
    "Trans-4 Methyl Cyclohexylamine": "/products/trans-4-methyl-cyclohexylamine-hydrochloride",
     "Specialty Bisphenols": "/specialty-bisphenols",
};

const applications = [
    {
        number: "01",
        title: "Agro Chemicals",
        image: "/images/about/chemical-agro.jpg",
        products: [
            "Ortho Cresol",
            "2,6-Xylidine",
            "Acetonitrile",
            "2,6 Xylenol",
            "4 Methyl Cyclohexanone",
        ],
        custom: [
            "Specialty Alkylated Phenols",
            "Specialty Nitriles",
            "Specialty Amines",
        ],
    },
    {
        number: "02",
        title: "Pharma Chemicals",
        image: "/images/about/pharma-chemical.jpg",
        products: [
            "Acetonitrile",
            "2,6-Xylidine",
            "Ortho Cresol",
            "2,6 Xylenol",
            "Trans-4 Methyl Cyclohexylamine",
        ],
        custom: [
            "Specialty Alkylated Phenols",
            "Specialty Nitriles",
            "Specialty Amines",
        ],
    },
    {
        number: "03",
        title: "Epoxy Resins",
        image: "/images/about/epoxy-resins.jpg",
        products: ["Specialty Bisphenols", "Ortho Cresol"],
    },
    {
        number: "04",
        title: "Antioxidants",
        image: "/images/about/Antlioxidants_image.jpg",
        products: [
            "Specialty Bisphenols",
            "Ortho Cresol",
            "2,6 Xylenol",
        ],
    },
    {
        number: "05",
        title: "Polycarbonates",
        image: "/images/applications/polycarbonates.jpg",
        products: ["Specialty Bisphenols"],
    },
    {
        number: "06",
        title: "Flame Retardants",
        image: "/images/applications/flame-retardants.jpg",
        products: ["Specialty Bisphenols"],
    },
];

const ApplicationsPage = () => {
    return (
        <main className="applications-page">
            <section className="applications-section">
                <div className="applications-container">
                    <div className="applications-heading">
                        <div>
                            <span>OUR INDUSTRIES</span>
                            <h2>
                                Where We <em>Make an Impact</em>
                            </h2>
                        </div>
                        <p>Specialty chemicals for diverse industrial needs.</p>
                    </div>

                    <div className="applications-grid">
                        {applications.map((item) => (
                            <article
                                className="application-card"
                                key={item.number}
                                style={{
                                    "--application-image": `url("${item.image}")`,
                                }}
                            >
                                <div className="application-top">
                                    <span className="application-icon">
                                        <Factory size={20} />
                                    </span>
                                </div>

                                <h3>{item.title}</h3>

                                <div className="application-divider" />

                                <span className="application-label">
                                    KEY PRODUCTS
                                </span>

                                <ul>
                                    {item.products.map((product) => (
                                        <li key={product}>
                                            {productPaths[product] ? (
                                                <Link to={productPaths[product]}>
                                                    {product}
                                                </Link>
                                            ) : (
                                                product
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {item.custom && (
                                    <div className="application-custom">
                                        <span>CUSTOM MANUFACTURING</span>
                                        {item.custom.map((product) => (
                                            <span
                                                className="custom-tag"
                                                key={product}
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="application-card-footer">
                                    <span>DNTL INDUSTRIES</span>
                                    <ArrowUpRight size={17} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ApplicationsPage;