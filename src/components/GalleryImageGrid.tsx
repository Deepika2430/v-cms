import React from "react";
import HighlightedTitle from "./HighlightedTitle"; // Adjust path as needed

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageGridSectionProps {
  titleParts: [string, string, string]; // [part1, part2, part3]
  images: ImageItem[];
  gridColumns?: number;
  gap?: string;
  imageStyle?: React.CSSProperties;
  sectionStyle?: React.CSSProperties;
}

const ImageGridSection: React.FC<ImageGridSectionProps> = ({
  titleParts,
  images,
  gridColumns = 3,
  gap = "1rem",
  imageStyle = {},
  sectionStyle = {},
}) => {
  const [part1, part2, part3] = titleParts;

  return (
    <div className="px-6 py-8 text-center" style={sectionStyle}>
      <HighlightedTitle part1={part1} part2={part2} part3={part3} />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
          gap: gap,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt || `image-${idx}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.5rem",
              objectFit: "cover",
              ...imageStyle,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGridSection;
