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
    <div
      className="w-full h-full shadow-emerald-50 bg-white rounded-3xl shadow-md flex flex-col items-start hover:shadow-[0_4px_15px_rgba(59,130,246,0.6)] font-questrial"
    >
      <div className="pb-0">
        {images.map(({ src, alt, width, height }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt || ""}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover rounded-t"
          />
        ))}
      </div>

      {/* Orange line fits image width exactly */}
      <div className="w-full border-t-2 border-orange-500 px-5" />
      <div className="px-4">
        <p className="text-left italic font-poppins text-gray-700 font-medium pt-2 ">{grades}</p>
        <h4 className="text-left text-[#761587] text-2xl font-semibold py-2">{title}</h4>
        <p className="text-left text-gray-600 text-sm py-0">{description}</p>
      </div>
    </div>
  );
};

export default InnovatorCard;
