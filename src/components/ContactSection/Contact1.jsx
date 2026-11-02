
import React, { useState } from "react";
import {
    ArrowUpRight,
    Building2,
    MapPin,
    Phone,
    Send,
    MessageSquare,
} from "lucide-react";
import "./Contact.css";

const Contact1 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Connect your backend or form service here.
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="contact-page">

            {/* HERO SECTION */}
            

            {/* FORM AND CONTACT PANEL */}
            <section className="contact-main-section">
                <div className="contact-container contact-main-grid">

                    {/* FEEDBACK FORM */}
                    <div className="contact-form-card" id="contact-feedback">

                        <div className="contact-section-heading">
                            <span className="contact-eyebrow">
                                <span></span> WE'RE HERE TO HELP
                            </span>

                            <h2>
                                Send Us Your <span>Feedback</span>
                            </h2>

                            <p>
                                Share your enquiry with us. Our team will be happy
                                to assist you.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="contact-success">
                                <div className="contact-success-icon">
                                    <Send size={25} />
                                </div>

                                <h3>Thank you for reaching out!</h3>

                                <p>
                                    Your form has been submitted in this demo.
                                    Connect a backend or form service to receive enquiries.
                                </p>

                                <button onClick={() => setSubmitted(false)}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>

                                <div className="contact-form-row">
                                    <div className="contact-field">
                                        <label htmlFor="name">
                                            Your name <span>*</span>
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="email">
                                            Your email <span>*</span>
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="contact-field">
                                        <label htmlFor="contact">
                                            Your contact no. <span>*</span>
                                        </label>

                                        <input
                                            id="contact"
                                            name="contact"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="subject">
                                            Subject <span>*</span>
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What is this regarding?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="message">
                                        Your message <span>*</span>
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="contact-form-footer">
                                    <p>
                                        <span>*</span> Required fields
                                    </p>

                                    <button
                                        type="submit"
                                        className="contact-submit-btn"
                                    >
                                        Send Message
                                        <Send size={16} />
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>

                    {/* DARK CONTACT PANEL */}
                    <aside className="contact-side-panel">

                        <div className="contact-side-top">
                            <div className="contact-side-icon">
                                <MessageSquare size={23} />
                            </div>

                            <span>LET'S CONNECT</span>

                            <h3>
                                We're always open to meaningful conversations.
                            </h3>

                            <p>
                                Reach out to our team for product enquiries,
                                business opportunities, or general assistance.
                            </p>
                        </div>

                        <div className="contact-phone-block">
                            <div className="contact-info-icon">
                                <Phone size={18} />
                            </div>

                            <div>
                                <span>Corporate Office – Telephone</span>
                                <a href="tel:+912066090200">
                                    +91 – 20 – 6609 0200
                                </a>
                            </div>
                        </div>

                        <div className="contact-phone-block">
                            <div className="contact-info-icon">
                                <Phone size={18} />
                            </div>

                            <div>
                                <span>Factory – Telephone</span>
                                <a href="tel:02356664800">
                                    02356 – 664800
                                </a>
                            </div>
                        </div>

                        <div className="contact-side-decoration">
                            <span>DNTL</span>
                            <ArrowUpRight size={28} />
                        </div>

                    </aside>
                </div>
            </section>

            {/* OFFICE LOCATIONS */}
            <section className="contact-offices-section">
                <div className="contact-container">

                    <div className="contact-offices-heading">
                        <div>
                            <span className="contact-eyebrow">
                                <span></span> FIND US
                            </span>

                            <h2>
                                Our <span>Locations</span>
                            </h2>
                        </div>

                        <p>
                            Our offices and manufacturing facility support our
                            operations and customer relationships.
                        </p>
                    </div>

                    <div className="contact-office-grid">

                        {/* REGISTERED OFFICE */}
                        <article className="contact-office-card">
                            <div className="contact-office-card-top">
                                <div className="contact-office-icon">
                                    <Building2 size={22} />
                                </div>

                                <span className="contact-office-number">01</span>
                            </div>

                            <span className="contact-office-label">
                                REGISTERED OFFICE
                            </span>

                            <h3>Vadodara</h3>

                            <div className="contact-office-address">
                                <MapPin size={18} />

                                <p>
                                    <strong>
                                        Deepak Novochem Technologies Ltd.
                                    </strong>
                                    3rd Floor, Fermenter House, Alembic City,
                                    Alembic Avenue Road, Gorwa, Vadodara,
                                    Gujarat, India – 390003.
                                </p>
                            </div>
                        </article>

                        {/* CORPORATE OFFICE */}
                        <article className="contact-office-card contact-office-featured">
                            <div className="contact-office-card-top">
                                <div className="contact-office-icon">
                                    <Building2 size={22} />
                                </div>

                                <span className="contact-office-number">02</span>
                            </div>

                            <span className="contact-office-label">
                                CORPORATE OFFICE
                            </span>

                            <h3>Pune</h3>

                            <div className="contact-office-address">
                                <MapPin size={18} />

                                <p>
                                    515, 5th Floor, City Point 17,
                                    Boat Club Road, Pune – 411001, India.
                                </p>
                            </div>

                            <div className="contact-office-phones">
                                <div className="contact-phone-column">
                                    <strong>Sales</strong>
                                    <a href="tel:+912066090241">+91 – 20 – 6609 0241</a>
                                    <a href="tel:+912066090243">+91 – 20 – 6609 0243</a>
                                    <a href="tel:+912066090244">+91 – 20 – 6609 0244</a>
                                    <a href="tel:+912066090246">+91 – 20 – 6609 0246</a>
                                </div>

                                <div className="contact-phone-column">
                                    <strong>Purchase</strong>
                                    <a href="tel:+912066090251">+91 – 20 – 6609 0251</a>
                                    <a href="tel:+912066090252">+91 – 20 – 6609 0252</a>
                                </div>
                            </div>
                        </article>

                        {/* FACTORY */}
                        <article className="contact-office-card">
                            <div className="contact-office-card-top">
                                <div className="contact-office-icon">
                                    <Building2 size={22} />
                                </div>

                                <span className="contact-office-number">03</span>
                            </div>

                            <span className="contact-office-label">
                                FACTORY ADDRESS
                            </span>

                            <h3>Lote Parshuram</h3>

                            <div className="contact-office-address">
                                <MapPin size={18} />

                                <p>
                                    <strong>
                                        Deepak Novochem Technologies Ltd.
                                    </strong>
                                    Plot No. D-27/3/1, D-27/2, MIDC,
                                    Lote Parshuram Industrial Area, Tal. Khed,
                                    Dist. Ratnagiri, Maharashtra – 415722, India.
                                </p>
                            </div>

                            <div className="contact-office-telephone">
                                <Phone size={16} />
                                <a href="tel:02356664800">
                                    02356 – 664800
                                </a>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default Contact1;
