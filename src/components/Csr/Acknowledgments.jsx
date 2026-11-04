
import React from "react";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Acknowledgments.css";

const acknowledgmentImages = Array.from(
  { length: 17 },
  (_, index) => ({
    id: index + 1,
    image: `/images/csr/ac${index + 1}.png`,
  })
);

const Acknowledgments = () => {
  return (
    <section className="acknowledgments-section">
      <div className="acknowledgments-container">

        {/* Section Heading */}
        <div className="acknowledgments-heading">
          <div className="acknowledgments-heading-content">
            <span className="acknowledgments-eyebrow">
              <span />
              RECOGNITION & APPRECIATION
            </span>

            <h2>
              Acknowledg<span>ments.</span>
            </h2>

            <p>
              A collection of recognitions, appreciation and
              acknowledgments that reflect our commitment
              and contributions.
            </p>
          </div>

          <div className="acknowledgments-count">
            <Award size={22} />
            <div>
              <strong>17</strong>
              <span>ACKNOWLEDGMENTS</span>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="acknowledgments-slider-wrapper">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={22}
            slidesPerView={3}
            loop={true}
            speed={750}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".acknowledgments-prev",
              nextEl: ".acknowledgments-next",
            }}
            pagination={{
              clickable: true,
              el: ".acknowledgments-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            className="acknowledgments-swiper"
          >
            {acknowledgmentImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="acknowledgment-image-card">
                  <div className="acknowledgment-image">
                    <img
                      src={item.image}
                      alt={`DNTL acknowledgment ${item.id}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="acknowledgment-image-footer">
                    <span>
                      ACKNOWLEDGMENT
                    </span>
                    <strong>
                      {String(item.id).padStart(2, "0")}
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Controls */}
          <div className="acknowledgments-controls">
            <button
              className="acknowledgments-prev"
              aria-label="Previous acknowledgment"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="acknowledgments-pagination" />

            <button
              className="acknowledgments-next"
              aria-label="Next acknowledgment"
            >
              <ArrowRight size={19} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Acknowledgments;
