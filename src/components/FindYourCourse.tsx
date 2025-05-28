import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

// Type for individual course level
type CourseLevelProps = {
  level: string;
  title: string;
  duration: string;
  highlights: string[];
};

const CourseLevel: React.FC<CourseLevelProps> = ({
  level,
  title,
  duration,
  highlights,
}) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-cyan-500"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h4 className="text-xl font-bold text-gray-800">{level}</h4>
    <h4 className="text-cyan-500 text-lg font-semibold">{title}</h4>
    <p className="text-sm text-gray-600 my-1">{duration}</p>
    <ul className="list-disc pl-5 text-sm text-gray-600">
      {highlights.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
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
    highlights: ["Industry Mentorship", "Final Project", "Job Readiness"],
  },
];

const CourseLevelsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Intro & Image */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Find Your Course</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Embark on the journey now to pioneer and lead the future. Expand
            your horizons, skills, and impact. The path to innovation begins
            with a single step — start now.
          </p>

          {/* Contact Info */}
          <div className="flex items-center space-x-3 mt-4">
            <img
              src="https://vismayee.com/wp-content/uploads/2023/11/phone.png"
              alt="Phone icon"
              className="w-6 h-6"
            />
            <span className="text-lg font-medium text-gray-800">
              Call: +91 79939 15888
            </span>
          </div>

          {/* Image */}
          <div className="pt-6">
            <img
              src="https://vismayee.com/wp-content/uploads/elementor/thumbs/front-view-boy-playing-indoors-scaled-qfn9qb2eo4hdlh8svo850uyre2dpyjfs8zlohxfw58.jpg"
              alt="Boy playing indoors"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Right Column: Course Levels */}
        <div className="space-y-6">
          {courseLevels.map((item, index) => (
            <CourseLevel key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseLevelsSection;