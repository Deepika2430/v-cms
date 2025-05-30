import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningPathways from "@/components/LearningPathways";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Gallery from "@/components/Gallery";

import { Toaster } from "@/components/ui/toaster";
import WelcomeSection from "./components/SmartAcademy";
import SkillBadges from "./components/Skillbadges";
import CourseLevelsSection from "./components/FindYourCourse";
import InnovatorCarousel from "@/components/InnovatorCarousel";
import { InnovatorCardProps } from "@/components/InnovatorCard";
import ImageGrid from './components/ImageGrid';

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

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <WelcomeSection />
            <ImageGrid />
            <LearningPathways />
            <InnovatorCarousel cards={cards} />
            <SkillBadges />
            <CourseLevelsSection />
            {/* <About />
            <Offerings /> */}
          </>
        );
      case "about":
        return <About fullPage />;
      case "offerings":
        return <Offerings fullPage />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <div className="container py-12">Contact page content</div>;
      case "embedded":
        return (
          <div className="container py-12">
            Embedded Systems Development content
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow overflow-x-hidden">{renderPage()}</main>
        <Footer currentPage={currentPage} onNavigate={setCurrentPage} />

        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
