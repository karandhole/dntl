
import React from "react";
import { ArrowUpRight, Factory } from "lucide-react";
import "./Applications.css";

const applications = [
    {
        number: "01",
        title: "Agro Chemicals",
        image: "/images/applications/agro.jpg",
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
        image: "/images/applications/pharma.jpg",
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
        image: "/images/applications/epoxy.jpg",
        products: ["Specialty Bisphenols", "Ortho Cresol"],
    },
    {
        number: "04",
        title: "Antioxidants",
        image: "/images/applications/antioxidants.jpg",
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

            <section className="applications-hero">
                <div className="applications-container">
                    <span className="applications-eyebrow">
                        <span /> INDUSTRIES WE SERVE
                    </span>

                    <h1>
                        Our <em>Applications.</em>
                    </h1>

                    <p>
                        Delivering specialty chemical solutions across
                        diverse industries through quality, innovation
                        and manufacturing expertise.
                    </p>

                    <div className="applications-hero-bottom">
                        <span>INDUSTRY SEGMENTS</span>
                        <strong>06 APPLICATIONS</strong>
                    </div>
                </div>
            </section>

            <section className="applications-section">
                <div className="applications-container">

                    <div className="applications-heading">
                        <div>
                            <span>OUR INDUSTRIES</span>
                            <h2>Where We <em>Make an Impact</em></h2>
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
                                    <span className="application-number">
                                        {item.number}
                                    </span>
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
                                        <li key={product}>{product}</li>
                                    ))}
                                </ul>

                                {item.custom && (
                                    <div className="application-custom">
                                        <span>CUSTOM MANUFACTURING</span>
                                        {item.custom.map((product) => (
                                            <span className="custom-tag" key={product}>
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
