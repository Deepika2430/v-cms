import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100); // Show after 100px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="wpfront-scroll-top-container"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        opacity: isVisible ? 0.9 : 0,
        display: isVisible ? "block" : "none",
        cursor: "pointer",
        zIndex: 1000,
        transition: "opacity 0.3s ease-in-out",
      }}
      onClick={scrollToTop}
    >
      <img
        src="https://vismayee.com/wp-content/uploads/2023/11/Scroll-Up@2x.png"
        alt="Scroll Up"
        title="Scroll Up"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default ScrollToTopButton;
