
import { ArrowUpRight, Globe2, Leaf, FlaskConical } from "lucide-react";
import "./AboutUs.css";
import { useEffect, useRef } from "react";
const AboutSection = () => {

    const logoRef = useRef(null);

useEffect(() => {
    const logoSection = logoRef.current;

    if (!logoSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                logoSection.classList.add("logos-visible");
            } else {
                logoSection.classList.remove("logos-visible");
            }
        },
        {
            threshold: 0.25
        }
    );

    observer.observe(logoSection);

    return () => observer.disconnect();
}, []);
    return (
        <section className="about-section">
            <div className="about-container">

                {/* Left Image */}
                <div className="about-image-wrapper">
                    <img
                        src="/images/about/about-1.jpg"
                        alt="Deepak Novochem Technologies Limited"
                        className="about-main-image"
                    />

                    <div className="about-image-overlay">
                        <span>Innovation</span>
                        <span className="overlay-dot"></span>
                        <span>Technology</span>
                    </div>

                    
                </div>

                {/* Right Content */}
                <div className="about-content">

                    <div className="about-subtitle">
                        <span className="about-line"></span>
                        ABOUT OUR COMPANY
                    </div>

                    <h2>
                        About <span>Deepak Novochem </span>
                        Technologies Limited
                    </h2>

                    <p className="about-description">
                        Deepak Novochem Technologies Limited continues to
                        derive strength from the experienced promoters with
                        an established position in the organic chemical
                        segment, a niche product portfolio within the vertical
                        of specialized chemicals and a diversified customer
                        base across more than twenty countries.
                    </p>

                    <p className="about-description">
                        Customer needs are always varied. DNTL was established
                        with the main objective of adding greater value to
                        customers' products and realising the potential of
                        innovation. DNTL focuses on in-house developed
                        technological products, products based on green
                        chemistry and alternate technologies, and focuses on
                        niche markets as a key intermediate supplier to
                        advanced materials and life sciences products.
                    </p>

                    {/* Features */}
                    <div className="about-features">
                        <div className="about-feature">
                            <div className="feature-icon">
                                <FlaskConical size={21} />
                            </div>
                            <div>
                                <h4>Innovation</h4>
                                <span>Advanced technologies</span>
                            </div>
                        </div>

                        <div className="about-feature">
                            <div className="feature-icon">
                                <Leaf size={21} />
                            </div>
                            <div>
                                <h4>Green Chemistry</h4>
                                <span>Sustainable solutions</span>
                            </div>
                        </div>

                        <div className="about-feature">
                            <div className="feature-icon">
                                <Globe2 size={21} />
                            </div>
                            <div>
                                <h4>Global Presence</h4>
                                <span>Customers in 20+ countries</span>
                            </div>
                        </div>
                    </div>

                    {/* Logos */}
                    <div className="about-logos">
                        

                        <div className="about-logo-list" ref={logoRef}>
                            <img
                                src="/images/about/logo02.jpg"
                                alt="Association Logo 1"
                            />

                            <img
                                src="/images/about/logo3.png"
                                alt="Association Logo 2"
                            />
                             <h3 style={{color:"green"}}>ZERO LIQUID DISCHARGE</h3>
                            {/* <img
                                src="/images/about/logo03.png"
                                alt="Association Logo 3"
                            /> */}
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
