
import "./CompanyHistory.css";
import { ArrowUpRight } from "lucide-react";

const history = [
    {
        year: "2021",
        title: "New Specialty Bisphenol Plant",
        description: "Setup of new Specialty Bisphenol Plant for Electric Vehicle Application."
    },
    {
        year: "2019",
        title: "Capacity Expansion",
        description: "Augmented capacity of existing Specialty Bisphenol Plant."
    },
    {
        year: "2018",
        title: "New Dedicated Plant",
        description: "Setup of a new dedicated Specialty Bisphenol Plant."
    },
    {
        year: "2016",
        title: "Innovation for 5G",
        description: "Unique & innovative application developed for 5G based on Specialty Bisphenol."
    },
    {
        year: "2013",
        title: "Food Packaging Innovation",
        description: "Unique & innovative application developed for food packaging."
    },
    {
        year: "2010",
        title: "Six Sigma Accreditation",
        description: "Six Sigma accreditation for one of the products by a Japanese customer."
    },
    {
        year: "2009",
        title: "Acetonitrile On Purpose",
        description: "Globally first company to start Acetonitrile on purpose."
    },
    {
        year: "2008",
        title: "Global Manufacturing Leadership",
        description: "Positioned as top 2 manufacturer of 2,6-Xylidine worldwide."
    },
    {
        year: "2007",
        title: "FCCL Assets Acquisition",
        description: "Takeover of FCCL assets at Lote, Maharashtra."
    }
];

const CompanyHistory = () => {
    return (
        <section className="history-section">
            <div className="history-wrapper">

                {/* Header */}
                <div className="history-header">
                    <div>
                        <span className="history-label">
                            OUR LEGACY
                        </span>

                        <h2>
                            A Journey of <span>Innovation.</span>
                        </h2>

                        <p>
                            Milestones that define our growth,
                            expertise and commitment to excellence.
                        </p>
                    </div>

                    <div className="history-total">
                        <strong>09</strong>
                        <span>KEY MILESTONES</span>
                    </div>
                </div>

                {/* Timeline */}
                <div className="history-list">
                    <div className="history-progress"></div>

                    {history.map((item, index) => (
                        <div className="history-row" key={item.year}>

                            <div className="history-year">
                                {item.year}
                            </div>

                            <div className="history-marker">
                                <span></span>
                            </div>

                            <div className="history-details">
                                <div className="history-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>

                                <span className="history-number">
                                    0{index + 1}
                                </span>

                                <ArrowUpRight
                                    className="history-arrow"
                                    size={18}
                                />
                            </div>

                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="history-footer">
                    <span>2007 — PRESENT</span>
                    <span>GROWING THROUGH INNOVATION</span>
                </div>

            </div>
        </section>
    );
};

export default CompanyHistory;
