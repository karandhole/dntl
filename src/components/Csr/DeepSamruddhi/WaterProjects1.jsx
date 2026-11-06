
import React, { useRef, useState } from "react";
import "./WaterProjects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
    {
        title: "Installation of Water Pipelines",
        subtitle: "Infrastructure Facilities",
        images: [
            "/images/csr/deepsamruddhi/waterpipeline1.jpg",
            "/images/csr/deepsamruddhi/waterpipeline2.jpg",
            "/images/csr/deepsamruddhi/waterpipeline3.jpg",
        ],
    },
    {
        title: "Installation of HP Water Pumps",
        subtitle: "Infrastructure Facilities",
        images: [
            "/images/csr/deepsamruddhi/hpwaterpump1.jpg",
            "/images/csr/deepsamruddhi/hpwaterpump2.jpg",
            "/images/csr/deepsamruddhi/hpwaterpump3.jpg",
        ],
    },
    {
        title: "Installation of Solar Street Lights",
        subtitle: "Infrastructure Facilities",
        images: [
            "/images/csr/deepsamruddhi/solarstreetlight1.jpg",
            "/images/csr/deepsamruddhi/solarstreetlight2.jpg",
            "/images/csr/deepsamruddhi/solarstreetlight3.jpg",
        ],
    },
    {
        title: "Creating Concrete Pathways",
        subtitle: "Infrastructure Facilities",
        images: [
            "/images/csr/deepsamruddhi/concretepathway1.jpg",
            "/images/csr/deepsamruddhi/concretepathway2.jpg",
            "/images/csr/deepsamruddhi/concretepathway3.jpg",
        ],
    },
];

// Individual image with circular loader
const ProjectImage = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
        <div className="water-image-wrapper">
            {loading && !error && (
                <div className="water-image-loader">
                    <div className="water-loader-spinner"></div>
                </div>
            )}

            {!error ? (
                <img
                    src={src}
                    alt={alt}
                    className={`water-slider-image ${loading ? "is-loading" : "is-loaded"
                        }`}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                        setLoading(false);
                        setError(true);
                    }}
                />
            ) : (
                <div className="water-image-error">
                    <span>!</span>
                </div>
            )}
        </div>
    );
};

const WaterProjects1 = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const swiperRef = useRef(null);

    const currentProject = projects[activeProject];

    const changeProject = (index) => {
        setActiveProject(index);
        setActiveImage(0);
        swiperRef.current = null;
    };

    const handleSlideChange = (swiper) => {
        setActiveImage(swiper.realIndex);
    };

    const goToSlide = (index) => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <section className="water-projects-section">
            <div className="water-projects-container">

                <div className="water-projects-content">

                    {/* LEFT SIDEBAR */}

                    <div className="water-projects-sidebar">
                        <div className="water-sidebar-heading">
                            <span className="water-sidebar-label">
                                EXPLORE OUR WORK
                            </span>

                            <h3>Our Projects</h3>

                            <p>
                                Discover our infrastructure developments.
                            </p>
                        </div>

                        <div className="water-project-list">
                            {projects.map((project, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`water-project-tab ${activeProject === index ? "active" : ""
                                        }`}
                                    onClick={() => changeProject(index)}
                                    aria-pressed={activeProject === index}
                                >
                                    <span className="water-tab-number">
                                        {String(index + 6).padStart(2, "0")}
                                    </span>

                                    <span className="water-tab-title">
                                        {project.title}
                                    </span>

                                    <span className="water-tab-arrow">
                                        →
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="water-sidebar-footer">
                            <span className="water-sidebar-footer-line"></span>
                            <span>BUILDING A BETTER TOMORROW</span>
                        </div>
                    </div>

                    {/* RIGHT GALLERY */}

                    <div className="water-projects-gallery">

                        <div className="water-gallery-header">
                            <div>
                                <span className="water-gallery-subtitle">
                                    {currentProject.subtitle}
                                </span>

                                <h3>{currentProject.title}</h3>
                            </div>

                            <div className="water-image-count">
                                <span>
                                    {String(activeImage + 1).padStart(2, "0")}
                                </span>

                                <span className="water-count-divider">/</span>

                                <span>
                                    {String(currentProject.images.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>

                        {/* SWIPER SLIDER */}

                        <div className="water-slider">
                            <Swiper
                                key={activeProject}
                                modules={[Autoplay]}
                                loop={currentProject.images.length > 1}
                                speed={850}
                                slidesPerView={1}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={handleSlideChange}
                                className="water-swiper"
                            >
                                {currentProject.images.map((image, index) => (
                                    <SwiperSlide key={`${activeProject}-${index}`}>
                                        <ProjectImage
                                            src={image}
                                            alt={`${currentProject.title} - Image ${index + 1}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* PREVIOUS */}

                            <button
                                type="button"
                                className="water-slider-arrow water-prev"
                                onClick={() => swiperRef.current?.slidePrev()}
                                aria-label="Previous image"
                            >
                                &#10094;
                            </button>

                            {/* NEXT */}

                            <button
                                type="button"
                                className="water-slider-arrow water-next"
                                onClick={() => swiperRef.current?.slideNext()}
                                aria-label="Next image"
                            >
                                &#10095;
                            </button>
                        </div>

                        {/* SLIDER FOOTER */}

                        <div className="water-slider-footer">
                            <div className="water-slider-dots">
                                {currentProject.images.map((image, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`water-dot ${activeImage === index ? "active" : ""
                                            }`}
                                        onClick={() => goToSlide(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                        aria-current={
                                            activeImage === index ? "true" : undefined
                                        }
                                    />
                                ))}
                            </div>

                            <span className="water-slider-caption">
                                {currentProject.title}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterProjects1;
