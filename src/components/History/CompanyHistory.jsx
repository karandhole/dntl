
import "./CompanyHistory.css";
import { useEffect, useRef } from "react";


const history = [
    {
        year: "2021",
        title: "Setup of new specialty Bisphenol plant for electric vehicle Application"
    },
    {
        year: "2019",
        title: "Augmented capacity of existing specialty Bisphenol plant"
    },
    {
        year: "2018",
        title: "Setup of new dedicated specialty Bisphenol plant"
    },
    {
        year: "2016",
        title: "Unique & innovative application developed for 5G application based on specialty Bisphenol"
    },
    {
        year: "2013",
        title: "Unique & innovative application developed for food packaging based on specialty Bisphenol"
    },
    {
        year: "2010",
        title: "Six Sigma accreditation for one of the products by the Japanese customer"
    },
    {
        year: "2009",
        title: "Globally First company to start Acetonitrile On Purpose"
    },
    {
        year: "2008",
        title: "Positioned as Top 2 Manufacturer of 2,6-Xylidine Worldwide"
    },
    {
        year: "2007",
        title: "Takeover of FCCL Assets at Lote, Maharashtra"
    }
];

const CompanyHistory = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const items =
            timelineRef.current?.querySelectorAll(".history-item");

        if (!items?.length) return;

        // Show all items if IntersectionObserver is unsupported
        if (!("IntersectionObserver" in window)) {
            items.forEach(item => {
                item.classList.add("is-visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Play animation when entering viewport
                        entry.target.classList.add("is-visible");
                    } else {
                        // Reset animation when leaving viewport
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -20px 0px"
            }
        );

        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="company-history">

            <div className="company-history-container">

                {/* Heading */}

                <div className="company-history-heading">
                    
                    <h2>COMPANY HISTORY</h2>
                   
                </div>

                {/* Timeline */}

                <div
                    className="history-timeline"
                    ref={timelineRef}
                >

                    <div className="history-center-line">
                        <span className="history-start-dot"></span>
                    </div>

                    {history.map((item, index) => (
                        <div
                            className={`history-item ${
                                index % 2 === 0
                                    ? "history-left"
                                    : "history-right"
                            }`}
                            key={item.year}
                        >

                            {/* Timeline Point */}

                            <div className="history-dot"></div>

                            {/* Milestone Card */}

                            <div className="history-card">

                                <div className="history-card-header">
                                    <h3>{item.year}</h3>
                                </div>

                                <div className="history-card-body">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>

                            </div>

                        </div>
                    ))}

                    <div className="history-end-dot"></div>

                </div>

                {/* Footer */}

                <div className="history-bottom">
                    <span>2007 — PRESENT</span>
                    <span>GROWING THROUGH INNOVATION</span>
                </div>

            </div>

        </section>
    );
};

export default CompanyHistory;
