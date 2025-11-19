import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "projects", "contact"];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-400">
            Bineth<span className="text-white">Ellepola</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={`hover:text-blue-400 transition ${activeSection === "home" ? "text-blue-400" : ""}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`hover:text-blue-400 transition ${activeSection === "about" ? "text-blue-400" : ""}`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className={`hover:text-blue-400 transition ${activeSection === "projects" ? "text-blue-400" : ""}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={`hover:text-blue-400 transition ${activeSection === "contact" ? "text-blue-400" : ""}`}
            >
              Contact
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="block hover:text-blue-400">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="block hover:text-blue-400">
            About
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="block hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="block hover:text-blue-400">
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
