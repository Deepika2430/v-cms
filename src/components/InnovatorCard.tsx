import React from "react";

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface InnovatorCardProps {
  images: Image[];
  grades: string;
  title: string;
  description: string;
}

const InnovatorCard: React.FC<InnovatorCardProps> = ({
  images,
  grades,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-6 w-full h-full px-4 box-border">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map(({ src, alt, width, height }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt || ""}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="rounded shadow-md w-full h-auto object-contain max-h-48"
          />
        ))}
      </div>
      <div className="w-full border-t border-gray-300" />
      <p className="text-center text-gray-700 text-base font-medium">{grades}</p>
      <h4 className="text-center text-2xl font-semibold">{title}</h4>
      <p className="text-center text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default InnovatorCard;
