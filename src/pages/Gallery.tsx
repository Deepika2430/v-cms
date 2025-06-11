import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ImageGridSection from "../components/GalleryImageGrid"

const summerCampImages = [
    { src: "https://vismayee.com/wp-content/uploads/2024/09/IMG_1354-e1726644881877.png", alt: "Group activity" },
    { src: "https://vismayee.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-1.11.33-PM-e1726642459599.jpeg", alt: "Kid building" },
    {src: "https://vismayee.com/wp-content/uploads/2024/09/IMG_1353-e1726644630299.png", alt: "Kids working together" },
    { src: "https://vismayee.com/wp-content/uploads/2024/09/IMG_1354-e1726644881877.png", alt: "Group activity" },
    { src: "https://vismayee.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-1.11.33-PM-e1726642459599.jpeg", alt: "Kid building" },
    {src: "https://vismayee.com/wp-content/uploads/2024/09/IMG_1353-e1726644630299.png", alt: "Kids working together" },
    // Add more...
  ];

const Gallery = () => {
  return (
    <>
    <PageHeader title="Gallery" />
    <ImageGridSection
        titleParts={["Some Candids from", "Expo At Sanskriti International,", "Kondapur, Hyderabad."]}
        images={summerCampImages}
      />
    </>
  );
};

export default Gallery;
