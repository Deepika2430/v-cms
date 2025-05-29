import React from "react";
import { motion } from "framer-motion";

// Type for individual course level
type CourseLevelProps = {
  level: string;
  title: string;
  duration: string;
  highlights: string[];
};

// Variants for staggering
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const CourseLevel: React.FC<CourseLevelProps> = ({
  level,
  title,
  duration,
  highlights,
}) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl shadow-md  border-l-8 border-[#ff6a1d] flex flex-col justify-center"
     style={{
    width: "550px",
    height: "144px",
    margin: "30px",
    padding: "0 20px",
    borderStyle: "solid",
    borderWidth: "0 0 0 8px",
    borderColor: "#F37335",
    boxShadow: "0 0 10px 0 rgba(21, 87, 153, 0.1)",
  }}
  >
    <h4 className="text-2xl text-[#820585] italic">{level}</h4>
    <h4 className="text-[#820585] text-2xl font-bold">{title}</h4>
    <div className="flex justify-between items-start text-sm text-gray-600 my-1">
      <p className="italic">{duration}</p>
      <p className="italic text-right">{highlights.join(", ")}</p>
    </div>
  </motion.div>
);

// Course levels data
const courseLevels: CourseLevelProps[] = [
  {
    level: "Level One",
    title: "Certification Course",
    duration: "Duration: 3 Months / 39 Sessions",
    highlights: ["Real Life Applications"],
  },
  {
    level: "Level Two",
    title: "Nano Diploma",
    duration: "Duration: 6 Months / 78 Sessions",
    highlights: ["Capstone Project"],
  },
  {
    level: "Level Three",
    title: "Professional Diploma",
    duration: "Duration: 12 Months / 150 Sessions",
    highlights: ["Research Paper/Patent"],
  },
];

const CourseLevelsSection: React.FC = () => {
  return (
    <section className="py-12 px-1 ml-[105px] mr-[105px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Intro & Image */}
        <div className="space-y-6">
          <h1 className="text-4xl text-[#820585] font-bold text-gray-800">Find Your Course</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Embark on the journey now to pioneer and lead the future. Expand
            your horizons, skills, and impact. The path to innovation begins
            with a single step — start now.
          </p>

          {/* Contact Info */}
          <div className="p-1 space-y-6">
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <img
                src="https://vismayee.com/wp-content/uploads/2023/11/phone.png"
                alt="Phone"
                className="w-6 h-6"
              />
              <span>
                <span className="text-orange-500">Call:</span>{" "}
                <span className="text-blue-600">+91 79939 15888</span>
              </span>
            </div>

            <div className="relative w-fit p-6">
              <img
                src="https://vismayee.com/wp-content/uploads/2023/11/elements.png"
                alt="Decorative background"
                className="absolute top-[50px] left-[35px] w-50 h-50 -z-5"
              />


              <div className="flex gap-4 relative z-10 items-start">
                <img
                  src="https://vismayee.com/wp-content/uploads/elementor/thumbs/front-view-boy-playing-indoors-scaled-qfn9qb2eo4hdlh8svo850uyre2dpyjfs8zlohxfw58.jpg"
                  alt="Kid playing"
                  style={{ width: "256px", height: "378.56px" }}
                  className="rounded-2xl object-cover shadow-md"
                />

                <img
                  src="https://vismayee.com/wp-content/uploads/2023/11/curious-little-boys-standing-laboratory-observing-apparatus-while-listening-smart-teacher-1365x2048.jpg"
                  alt="Kids with 3D printer"
                  style={{ width: "252.44px", height: "378.73px" }}
                  className="rounded-2xl object-cover shadow-md mt-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Course Levels with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 mt-8"
        >
          {courseLevels.map((item, index) => (
            <CourseLevel key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseLevelsSection;
