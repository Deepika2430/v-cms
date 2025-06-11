import React from "react";

interface HighlightedTitleProps {
  part1: string;
  part2: string;
  part3: string;
}

const HighlightedTitle: React.FC<HighlightedTitleProps> = ({
  part1,
  part2,
  part3,
}) => {
  return (
    <div className="text-center px-4 py-6">
      <h3 className="inline-block text-2xl md:text-4xl text-[#761587] font-pacifico italic">
        <span className="font-pacifico text-[#761587]">{part1} </span>

        <span className="relative inline-block mx-2 font-nunito font-bold text-[#761587]">
          <span className="relative z-10">{part2}</span>

          {/* Underline SVG behind text */}
          <svg
            className="absolute left-0 bottom-0 w-full h-6 z-0"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"
              fill="none"
              stroke="#7ee8a4"
              strokeWidth="6"
            />
            <path
              d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"
              fill="none"
              stroke="#7ee8a4"
              strokeWidth="6"
            />
          </svg>
        </span>

        <span className="font-pacifico text-[#761587]"> {part3}</span>
      </h3>
    </div>
  );
};

export default HighlightedTitle;
