import React from "react";
import { FileText, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import "./Compliance.css";

const policies = [
    {
        title: "Nomination and Remuneration Policy",
        file: "images/compliance/CSR-policy.pdf",
    },
    {
        title: "Quality Management Policy",
        file: "images/compliance/CSR-policy.pdf",
    },
    {
        title: "Customer Data Protection and Privacy Policy",
        file:"images/compliance/CSR-policy.pdf",
    },
    {
        title: "Health, Safety & Environment Protection Policy",
        file: "HSE-Policy-1.pdf",
    },
    {
        title: "Policy on Safety, Security and Prevention of Sexual Harassment",
        file: "Posh-Policy.pdf",
    },
    {
        title: "Vigil Mechanism – Whistle Blower Policy",
        file: "VIGIL-Mechanism-Whistle-Blower-Policy.pdf",
    },
];

const Compliance1 = () => {
    return (
        <main className="compliance-page">
            <section className="compliance-hero">
                <div className="compliance-container">
                    <span className="compliance-eyebrow">
                        <ShieldCheck size={16} /> CORPORATE GOVERNANCE
                    </span>

                    <h1>
                        Compliance <span>& Policies</span>
                    </h1>

                    <p>
                        Our commitment to ethical practices, transparency, quality and
                        responsible business operations.
                    </p>
                </div>
            </section>

            <section className="compliance-content">
                <div className="compliance-container">
                    <div className="compliance-heading">
                        <div>
                            <span className="compliance-label">DOCUMENTS & GUIDELINES</span>
                            <h2>Company Policies</h2>
                        </div>
                        <span className="compliance-count">06 POLICIES</span>
                    </div>

                    <div className="compliance-list">
                        {policies.map((policy, index) => (
                            <a
                                href={policy.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="compliance-policy"
                                key={policy.file}
                            >
                                <div className="compliance-file-icon">
                                    <FileText size={21} />
                                </div>

                                <span className="compliance-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{policy.title}</h3>

                                <span className="compliance-pdf">
                                    PDF <ArrowUpRight size={17} />
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="compliance-officer">
                        <div className="compliance-officer-icon">
                            <Mail size={23} />
                        </div>

                        <div className="compliance-officer-info">
                            <span>GRIEVANCE REDRESSAL</span>
                            <h3>Grievance Officer</h3>
                            <p>Barnali Sengupta</p>
                        </div>

                        <a href="mailto:bsengupta@dntl.co.in">
                            bsengupta@dntl.co.in
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Compliance1;