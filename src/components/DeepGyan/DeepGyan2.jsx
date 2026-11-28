
import React from "react";
import ImageSlider from "../ImageSliderCsr/ImageSlider";

const LabImages = [
  {
    src: "/images/csr/deepgyan/g1.jpg",
    alt: " education support"
  },
  {
    src: "/images/csr/deepgyan/g2.jpg",
    alt: "Financial support for students"
  },
  {
    src: "/images/csr/deepgyan/g3.jpg",
    alt: "Scholarship distribution"
  },
  {
    src: "/images/csr/deepgyan/g4.jpg",
    alt: " education program"
  },
  {
    src: "/images/csr/deepgyan/g5.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepgyan/g6.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepgyan/g7.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepgyan/g8.jpg",
    alt: "Student award ceremony"
  },
  {
    src: "/images/csr/deepgyan/g9.jpg",
    alt: "Student award ceremony"
  },
  
];

const laptopImages = [
  {
    src: "/images/csr/deepgyan/g11.jpg",
    alt: "Laptop distribution"
  },
  {
     src: "/images/csr/deepgyan/g12.jpg",
    alt: "Students receiving laptops"
  },
  {
    src: "/images/csr/deepgyan/g13.jpg",
    alt: "Laptop donation program"
  },
  {
   src: "/images/csr/deepgyan/g14.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g15.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g16.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g17.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g18.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g19.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g20.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g21.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g22.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g23.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g24.png",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g25.png",
    alt: "Laptop distribution event"
  },
   {
   src: "/images/csr/deepgyan/g26.png",
    alt: "Laptop distribution event"
  },

    {
   src: "/images/csr/deepgyan/g27.jpg",
    alt: "Laptop distribution event"
  },
    {
   src: "/images/csr/deepgyan/g28.jpg",
    alt: "Laptop distribution event"
  },
    {
   src: "/images/csr/deepgyan/g29.jpg",
    alt: "Laptop distribution event"
  },
    {
   src: "/images/csr/deepgyan/g30.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g31.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g32.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g33.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g34.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g35.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g36.jpg",
    alt: "Laptop distribution event"
  },
  {
   src: "/images/csr/deepgyan/g37.jpg",
    alt: "Laptop distribution event"
  },
 
];

function DeepGyan2() {
  return (
    <div>

      {/* First Slider */}
      <ImageSlider
        title="Provision of Computer Labs"
        images={LabImages}
      />

      {/* Second Slider */}
      <ImageSlider
        title="Provision & Inauguration of Interactive Digital classroom."
        images={laptopImages}
      />

    </div>
  );
}

export default DeepGyan2;
