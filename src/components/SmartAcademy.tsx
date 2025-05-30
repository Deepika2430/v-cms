import React from "react";

const cards = [
  {
    img: "https://vismayee.com/wp-content/uploads/2023/11/Tech-Integration.svg",
    alt: "Technology Integration",
    title: "Technology Integration",
    description:
      "Integrating technology with academics enhances learning by providing interactive and personalized educational experiences, preparing students for a tech-driven future.",
  },
  {
    img: "https://vismayee.com/wp-content/uploads/2023/11/Awesome-Teachers.svg",
    alt: "Awesome Teachers",
    title: "Awesome Teachers",
    description:
      "Our trainers inspire and empower learners, fostering growth, skill development, and confidence in their educational journeys.",
  },
  {
    img: "https://vismayee.com/wp-content/uploads/2023/11/degree.svg",
    alt: "Nano Degree",
    title: "Nano Degree",
    description:
      "A nanodegree is a short, focused credential offered by us and exclusively designed to provide specific, job-relevant skills and knowledge in a practical way.",
  },
  {
    img: "https://vismayee.com/wp-content/uploads/2023/11/Competitions.svg",
    alt: "Competitions",
    title: "International Competitions",
    description:
      "Our academic and skill-based competitions boost confidence, ignite creativity, and encourage excellence through fun, engaging challenges.",
  },
];

const WelcomeSection = () => {
  return (
    <section className="py-16 px-17 md:px-14 bg-white font-[Poppins,sans-serif]">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Welcome to the
        </h1>
        <h2 className="text-4xl md:text-5xl font-[Poppins,sans-serif] text-[#006D9B] mt-2 tracking-tight">
          SMART ACADEMY
        </h2>

        <div className="mt-9 max-w-5xl mx-auto text-gray-600 text-lg leading-relaxed">
          <p>
            We encourage educators to embrace innovation and adapt their
            teaching methods to the needs of today’s students, providing them
            with the tools and experiences necessary to succeed in the future.
            Also we emphasize on forward-thinking, creativity, and a commitment
            to preparing students for a rapidly evolving world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ img, alt, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left
                       hover:shadow-2xl hover:shadow-[0_4px_15px_rgba(59,130,246,0.6)]
                       max-h-87 overflow-hidden"
            >
              <img src={img} alt={alt} className="w-24 h-24 mb-4 animate-zoom-in" />
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
