
import React from "react";
import ImageSlider from "../ImageSliderCsr/ImageSlider";

const educationImages = [
  {
    src: "/images/csr/deepkanya/d1.png",
    alt: "Girl education support"
  },
  {
    src: "/images/csr/deepkanya/d2.png",
    alt: "Financial support for students"
  },
  {
    src: "/images/csr/deepkanya/d3.jpg",
    alt: "Scholarship distribution"
  },
  {
    src: "/images/csr/deepkanya/d4.jpg",
    alt: "Girl education program"
  },
  {
    src: "/images/csr/deepkanya/d5.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepkanya/d6.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepkanya/d7.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepkanya/d8.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepkanya/d9.png",
    alt: "Student award ceremony"
  },
  
];

const laptopImages = [
  {
    src: "/images/csr/deepkanya/d14.jpg",
    alt: "Laptop distribution"
  },
  {
     src: "/images/csr/deepkanya/d11.jpg",
    alt: "Students receiving laptops"
  },
  {
     src: "/images/csr/deepkanya/d12.jpg",
    alt: "Laptop donation program"
  },
  {
    src: "/images/csr/deepkanya/d13.jpg",
    alt: "Laptop distribution event"
  },
 
];

function DeepKanya2() {
  return (
    <div>

      {/* First Slider */}
      <ImageSlider
        title="Promote And Encourage Girl Education & Financial Support For Higher Education"
        images={educationImages}
      />

      {/* Second Slider */}
      <ImageSlider
        title="Distribution Of Laptops."
        images={laptopImages}
      />

    </div>
  );
}

export default DeepKanya2;
