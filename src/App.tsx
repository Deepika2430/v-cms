import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PageLoader from "@/components/PageLoader";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Offerings from "@/components/Offerings";
import Contact from "@/pages/Contact";
import Embedsys from "@/pages/Embedsys";
import Gallery from "@/pages/Gallery";

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
  const [loading, setLoading] = useState(false);

  const currentPath = location.pathname;
  const currentPage = currentPath === "/" ? "home" : currentPath.slice(1);

  const handleNavigate = (page: string) => {
    const path = page === "home" ? "/" : `/${page}`;
    navigate(path);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Show loader for 500ms
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {loading && <PageLoader />} {/* ✅ Show loader during route change */}

      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About fullPage />} />
          <Route path="/offerings" element={<Offerings fullPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/embedsys" element={<Embedsys />} />
        </Routes>
      </main>

      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
      <Toaster />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
