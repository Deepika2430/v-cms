import React from "react";

const ImageMasonry = () => {
  const columns = [
    {
      columnClass: "flex flex-col gap-4 pt-[150px]",
      images: [
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/successful-girl-casualwear-eyeglasses-holding-robot-constructed-lesson-scaled.jpg",
          alt: "Girl with robot",
          className: "w-[204px] h-[306px]",
        },
      ],
    },
    {
      columnClass: "flex flex-col gap-10",
      images: [
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/little-child-architect-using-3d-printer-schoolgirl-technologies-study-concept-scaled.jpg",
          alt: "Child with 3D printer",
          className: "w-[208px] h-[312px]",
        },
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/happy-child-class-against-green-chalkboard-1536x1536.jpg",
          alt: "Child with idea",
          className: "w-[208px] h-[208px]",
        },
      ],
    },
    {
      columnClass: "flex flex-col gap-12",
      images: [
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/3d-rendering-humanoid-robot-thinking-office-background-scaled.jpg",
          alt: "Humanoid robot",
          className: "w-[208px] h-[156px]",
        },
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/portrait-young-child-pretend-be-businessman-kid-playing-home-imagination.jpg",
          alt: "Child as businessman",
          className: "w-[208px] h-[312px]",
        },
      ],
    },
    {
      columnClass: "flex flex-col gap-4 pt-[50px]",
      images: [
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/sign-ok-little-boy-child-jeans-shirt-with-virtual-reality-headset-glasses-isolated-blue-studio-background-concept-cutting-edge-technology-video-games-innovation-1-1365x2048.jpg",
          alt: "Kids as pilots",
          className: "w-[208px] h-[311px]",
        },
      ],
    },
    {
      columnClass: "flex flex-col gap-8",
      images: [
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/happy-child-class-against-green-chalkboard-scaled.jpg",
          alt: "Happy child",
          className: "w-[208px] h-[312px]",
        },
        {
          src: "https://vismayee.com/wp-content/uploads/2023/11/kids-education-concept-small-indian-boy-girl-posing-front-green-chalk-board-pilot-fancy-dress-doctor-costume-with-stethoscope-standing-green-chalkboard-background-scaled.jpg",
          alt: "Boy playing with crane",
          className: "w-[208px] h-[159px]",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="flex justify-center gap-6 max-w-7xl mx-auto">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={column.columnClass}>
            {column.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image.src}
                alt={image.alt}
                className={`${image.className} object-cover rounded-3xl shadow-md hover:animate-hang-sink transition-all duration-500 ease-in-out`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageMasonry;
