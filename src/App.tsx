import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Offerings from "@/components/Offerings";
import Contact from "@/pages/Contact";
import Gallery from "@/components/Gallery";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the current page from the URL
  const currentPath = location.pathname;
  const currentPage = currentPath === "/" ? "home" : currentPath.slice(1); // e.g., "/about" -> "about"

  // Handle navigation based on page key
  const handleNavigate = (page: string) => {
    const path = page === "home" ? "/" : `/${page}`;
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About fullPage />} />
          <Route path="/offerings" element={<Offerings fullPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<div className="container py-12">Contact page content</div>} />
          <Route path="/embedded" element={<div className="container py-12">Embedded Systems Development content</div>} />
        </Routes>
      </main>

      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}

export default App;
