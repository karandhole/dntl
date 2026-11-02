import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, FlaskConical } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Products.css";

const products = [
    { name: "Acetonitrile", cas: "75-05-8", slug: "acetonitrile" },
    { name: "2,6 Xylidine", cas: "87-62-7", slug: "2-6-xylidine" },
    { name: "Ortho Cresol", cas: "95-48-7", slug: "ortho-cresol" },
    { name: "2,6 Xylenol", cas: "576-26-1", slug: "2-6-xylenol" },
    { name: "Valeronitrile", cas: "110-59-8", slug: "valeronitrile" },
    { name: "Methoxy Acetic Acid", cas: "625-45-6", slug: "methoxy-acetic-acid" },
    { name: "4 Methyl Cyclohexanone", cas: "589-92-4", slug: "4-methyl-cyclohexanone" },
    { name: "Trans-4 Methyl Cyclohexylamine Hydrochloride", cas: "33483-65-7", slug: "trans-4-methyl-cyclohexylamine-hydrochloride" },
    { name: "Tetra Methyl Bisphenol F", cas: "5384-21-4", slug: "tetra-methyl-bisphenol-f" },
    { name: "Tetra Methyl Bisphenol A", cas: "5613-46-7", slug: "tetra-methyl-bisphenol-a" },
    { name: "Tetra Methyl Bisaniline F", cas: "4073-98-7", slug: "tetra-methyl-bisaniline-f" },
    { name: "Tetra Methyl Bisphenol S", cas: "13288-70-5", slug: "tetra-methyl-bisphenol-s" },
    { name: "Tetra Methyl Biphenol", cas: "2417-04-1", slug: "tetra-methyl-biphenol" },
    { name: "Bisphenol E", cas: "2081-08-5", slug: "bisphenol-e" },
    { name: "Bisphenol Z", cas: "843-55-0", slug: "bisphenol-z" },
    { name: "Bisphenol TMC", cas: "129188-99-4", slug: "bisphenol-tmc" },
    { name: "Dimethyl Bisphenol A", cas: "79-97-0", slug: "dimethyl-bisphenol-a" },
    { name: "Dimethyl Bisphenol C", cas: "2362-14-3", slug: "dimethyl-bisphenol-c" },
    { name: "Ortho Cumyl Octylphenol", cas: "73936-80-8", slug: "ortho-cumyl-octylphenol" },
    { name: "Bisphenol AP", cas: "1571-75-1", slug: "bisphenol-ap" },
];

const ProductSection = () => {
    return (
        <section className="products-section">
            <div className="products-container">

                <div className="products-header">
                    <div>
                        <span className="products-subtitle">OUR PRODUCTS</span>
                        <h2>
                            Specialty Chemicals.
                            <span> Exceptional Quality.</span>
                        </h2>
                        <p>
                            Explore our range of high-performance specialty chemicals
                            engineered for diverse industrial applications.
                        </p>
                    </div>

                    <Link to="/products" className="products-view-all">
                        View All Products <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="products-carousel-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".products-prev",
                            nextEl: ".products-next",
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={800}
                        spaceBetween={22}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.15,
                                spaceBetween: 14,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 22,
                            },
                        }}
                        className="products-swiper"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={product.slug}>
                                <div className="product-card">
                                    <div className="product-card-top">
                                        <span className="product-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div className="product-icon">
                                            <FlaskConical size={25} />
                                        </div>
                                    </div>

                                    <div className="product-card-content">
                                        <span className="product-label">SPECIALTY CHEMICAL</span>
                                        <h3>{product.name}</h3>

                                        <div className="product-cas">
                                            <span>CAS Number</span>
                                            <strong>{product.cas}</strong>
                                        </div>

                                        <Link
                                            to={`/products/${product.slug}`}
                                            className="product-link"
                                        >
                                            Explore Product <ArrowUpRight size={17} />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="products-navigation">
                        <button className="products-prev" aria-label="Previous products">
                            <ArrowLeft size={20} />
                        </button>

                        <button className="products-next" aria-label="Next products">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductSection;
