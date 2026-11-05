
import React from "react";
import { ArrowUpRight, HeartHandshake, Droplets, GraduationCap, HeartPulse, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CsrSection.css";

const initiatives = [
    {
        number: "01",
        title: "DEEP SAMRUDDHI",
        subtitle: "Community Development & Services",
        description:
            "Creating better opportunities and strengthening community infrastructure for a sustainable future.",
        points: [
            "Financial aid to institutions supporting people in need",
            "Infrastructure development",
            "Water harvesting and water facilities",
            "Vocational training",
        ],
        path: "/csr/deep-samruddhi",
        icon: HeartHandshake,
    },
    {
        number: "02",
        title: "DEEP SANGAATH",
        subtitle: "A Helping Hand for Your Entitlements",
        description:
            "Helping communities access essential government schemes, documents and public services.",
        points: [
            "Support for essential documents",
            "Linking 90%+ households to government schemes",
            "Jan Suvidha Kendra for doorstep assistance",
        ],
        path: "#",
        icon: Users,
    },
    {
        number: "03",
        title: "DEEP JYOTI",
        subtitle: "Nurturing Health & Wellbeing",
        description:
            "Supporting accessible healthcare and improving health outcomes for vulnerable communities.",
        points: [
            "Improving overall mortality rates",
            "Improving neonatal mortality rates",
            "Financial assistance for BPL patients with acute illnesses",
        ],
        path: "/csr/deep-jyoti",
        icon: HeartPulse,
    },
    {
        number: "04",
        title: "DEEP GYAN",
        subtitle: "Fostering Education & Literacy",
        description:
            "Encouraging quality education through technology-enabled learning and improved school facilities.",
        points: [
            "Computer laboratories",
            "Interactive digital classrooms",
            "Infrastructure facilities at schools",
        ],
        path: "/csr/deep-gyan",
        icon: GraduationCap,
    },
    {
        number: "05",
        title: "DEEP KANYA",
        subtitle: "Supporting Girl Education & Empowerment",
        description:
            "Creating opportunities for girls through educational support and access to digital resources.",
        points: [
            "Educational assistance for girls",
            "Laptops and computers for girl students",
            "Supporting education and empowerment",
        ],
        path: "/csr/deep-kanya",
        icon: Users,
    },
];

const CsrSection = () => {
    const navigate = useNavigate();
    return (
        <main className="csr-page">

            {/* Hero */}
            <section className="csr-hero">
                <div className="csr-hero-content">
                    <span className="csr-eyebrow">OUR SOCIAL RESPONSIBILITY</span>
                    <h1>
                        Creating Impact.
                        <br />
                        <span>Building Communities.</span>
                    </h1>
                    <p>
                        Our commitment goes beyond business. We believe in creating
                        sustainable communities and building a better future together.
                    </p>
                    <a href="#csr-commitment" className="csr-hero-btn">
                        Discover Our Initiatives <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="csr-hero-visual">
                    <div className="csr-hero-overlay" />
                    <div className="csr-hero-caption">
                        <span>PEOPLE • PLANET • PROGRESS</span>
                        <h3>Making a difference, together.</h3>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="csr-commitment" id="csr-commitment">
                <div className="csr-commitment-heading">
                    <span className="csr-eyebrow">OUR COMMITMENT</span>
                    <h2>Our Commitment to Social Responsibility</h2>
                </div>

                <div className="csr-commitment-content">
                    <p>
                        Our dedication to sustainability extends beyond sustainable
                        products and operations to the communities in which we operate.
                        We are committed to supporting their long-term development
                        and wellbeing.
                    </p>

                    <p>
                        Deepak Novochem's facilities and employees are integral parts
                        of these communities. Guided by our corporate values, we believe
                        in giving back through meaningful initiatives and partnerships.
                    </p>

                    <p>
                        We actively engage with local organizations, contribute volunteer
                        time and resources, and support programs focused on education,
                        environmental stewardship and inclusive communities.
                    </p>
                </div>
            </section>

            {/* Community Impact */}
            <section className="csr-impact">
                <div className="csr-impact-heading">
                    <span className="csr-eyebrow">MAKING A DIFFERENCE</span>
                    <h2>What We Help Communities Achieve</h2>
                    <p>
                        We support initiatives that improve quality of life,
                        encourage equal opportunities and strengthen community resilience.
                    </p>
                </div>

                <div className="csr-impact-grid">
                    <div className="csr-impact-item">
                        <Droplets />
                        <h3>Water & Infrastructure</h3>
                        <p>Water harvesting, reservoirs and essential community facilities.</p>
                    </div>

                    <div className="csr-impact-item">
                        <HeartPulse />
                        <h3>Health & Wellbeing</h3>
                        <p>Improving medical facilities and supporting healthcare access.</p>
                    </div>

                    <div className="csr-impact-item">
                        <GraduationCap />
                        <h3>Education</h3>
                        <p>Digital education, science labs and better learning facilities.</p>
                    </div>

                    <div className="csr-impact-item">
                        <Users />
                        <h3>Women Empowerment</h3>
                        <p>Promoting economic independence and community resilience.</p>
                    </div>
                </div>
            </section>

            {/* CSR Initiatives */}
            <section className="csr-initiatives">
                <div className="csr-initiatives-heading">
                    <span className="csr-eyebrow">OUR PROGRAMMES</span>
                    <h2>Initiatives That Create Change</h2>
                    <p>
                        Discover the programmes through which we contribute to
                        stronger, healthier and more inclusive communities.
                    </p>
                </div>

                <div className="csr-cards-grid">
                    {initiatives.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article className="csr-card" key={item.number}>
                                <div className="csr-card-top">
                                    <span className="csr-card-number">{item.number}</span>
                                    <div className="csr-card-icon">
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>
                                </div>

                                <h3>{item.title}</h3>
                                <h4>{item.subtitle}</h4>
                                <p className="csr-card-description">{item.description}</p>

                                <ul>
                                    {item.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>

                               
                                <button
                                    type="button"
                                    className="csr-read-more"
                                    onClick={() => navigate(item.path)}
                                >
                                    Read More <ArrowUpRight size={17} />
                                </button>
                            </article>
                        );
                    })}
                </div>
            </section>



        </main>
    );
};

export default CsrSection;
