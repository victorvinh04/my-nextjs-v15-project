"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes you to the top of the page
  //  Behovior: When the user scrolls down 300px from the top of the document, show the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
        onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 text-white transition ease-in-out rounded-md shadow-md cursor-pointer bg-primary duration-80 hover:bg-opacity-80 hover:shadow-sign-up"
          aria-label="Scroll to top"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
}
