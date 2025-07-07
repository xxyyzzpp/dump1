import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const closeMenuOnOutsideClick = (e) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    // Ensure scroll to top on navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <nav
className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  isScrolled 
    ? "bg-black/30 backdrop-blur-md border-b border-white/10 py-4" 
    : "bg-black/10 backdrop-blur-md border-b border-white/5 py-6"
}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-primary-400">{"<"}</span>
            Rheisan
            <span className="text-primary-400">{"/>"}</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary-400 ${
                    location.pathname === item.path 
                      ? "text-primary-400" 
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 ${
                    location.pathname === item.path 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-primary-400 transition-colors duration-300 focus:outline-none relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <FiMenu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <FiX 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="absolute top-full left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-b border-dark-700/50 shadow-2xl">
            <ul className="container-custom py-6 space-y-4">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-300 delay-${index * 100} ${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-primary-400 bg-primary-400/10 border border-primary-400/20"
                        : "text-white hover:text-primary-400 hover:bg-dark-800/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;