
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ImageSlider.css";

const ImageSlider = ({ title, images, sliderId }) => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);

  // FIX CUSTOM NAVIGATION
  useEffect(() => {

    if (
      !swiperInstance ||
      swiperInstance.destroyed ||
      !prevRef.current ||
      !nextRef.current
    ) {
      return;
    }

    // Assign custom arrow buttons
    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;

    // Reinitialize navigation
    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();

    return () => {
      if (!swiperInstance.destroyed) {
        swiperInstance.navigation.destroy();
      }
    };

  }, [swiperInstance]);

  return (
    <section className="gallery-section">

      <h2 className="gallery-heading">
        {title}
      </h2>

      <div className="gallery-slider-wrapper">

        {/* LEFT ARROW */}
        <button
          ref={prevRef}
          className="custom-arrow prev-arrow"
          aria-label="Previous slide"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* SWIPER SLIDER */}
        <Swiper

          modules={[Navigation, Pagination, Autoplay]}

          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}

          navigation={{
            prevEl: null,
            nextEl: null,
          }}

          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          loop={images.length > 3}

          spaceBetween={40}
          slidesPerView={3}

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}

          className={`deep-kanya-swiper ${sliderId}`}

        >

          {images.map((image, index) => (
            <SwiperSlide key={index}>

              <div className="gallery-image">

                <img
                  src={image.src}
                  alt={
                    image.alt ||
                    `Gallery image ${index + 1}`
                  }
                  loading="lazy"
                />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* RIGHT ARROW */}
        <button
          ref={nextRef}
          className="custom-arrow next-arrow"
          aria-label="Next slide"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

      </div>

    </section>
  );
};

export default ImageSlider;
