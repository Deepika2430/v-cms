import Hero from "@/components/Hero";
import WelcomeSection from "@/components/SmartAcademy";
import ImageGrid from "@/components/ImageGrid";
import LearningPathways from "@/components/LearningPathways";
import SkillBadges from "@/components/Skillbadges";
import CourseLevelsSection from "@/components/FindYourCourse";
import InnovatorCarousel from "@/components/InnovatorCarousel";
import { InnovatorCardProps } from "@/components/InnovatorCard";

const cards: InnovatorCardProps[] = [
  {
    images: [
      {
        src: "https://vismayee.com/wp-content/uploads/2023/11/rocket-boy-idea@2x-768x512.png",
        alt: "Rocket boy idea",
      },
    ],
    grades: "Grades: III - XII",
    title: "Innovator",
    description:
      "STEAM Activities, Design Thinking, Product Development, Research Papers, Intellectual Property Rights (Trademarks, Patents, Copyrights)",
  },
  {
    images: [
      {
        src: "https://vismayee.com/wp-content/uploads/2023/11/aero-space@2x-768x512.png",
        alt: "Fourth Card Image",
      },
    ],
    grades: "Grades: III - XII",
    title: "Aerospace ",
    description:
      "Space and Astronomy, Unmanned Aerial Vehicles (Drones and RC Planes), Rovers, Telescope and Binoculars",
  },
  {
    images: [
      {
        src: "https://vismayee.com/wp-content/uploads/2023/11/painting-school-768x512.jpg",
        alt: "Second Card Image",
      },
    ],
    grades: "Grades: III - XII",
    title: "Creative Arts & Animation",
    description:
      "Graphic Design, Clay Sculpting, Sketching and Painting, Interior Designing, Animation, Photography,  and VFX",
  },
  {
    images: [
      {
        src: "https://vismayee.com/wp-content/uploads/2023/11/robo-girl-laptop@2x-768x512.png",
        alt: "Second Card Image",
      },
    ],
    grades: "Grades: III - XII",
    title: "Robotics ",
    description:
      "Circuits and Simulation, Wheeled Robots, Humanoid Robots, AI Robots, Programming and Product Development",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ImageGrid />
      <LearningPathways />
      <InnovatorCarousel cards={cards} />
      <SkillBadges />
      <CourseLevelsSection />
    </>
  );
}
