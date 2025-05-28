import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import Gallery from '@/components/Gallery';

import { Toaster } from '@/components/ui/toaster';
import WelcomeSection from './components/SmartAcedamy';
import SkillBadges from './components/Skillbadges';
import CourseLevelsSection from './components/FindYourCourse';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <WelcomeSection />
            <SkillBadges />
            <CourseLevelsSection />
            <About />
            <Offerings />
          </>
        );
      case 'about':
        return <About fullPage />;
      case 'offerings':
        return <Offerings fullPage />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <div className="container py-12">Contact page content</div>;
      case 'embedded':
        return <div className="container py-12">Embedded Systems Development content</div>;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;