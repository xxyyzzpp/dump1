import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin, FaGithub, FaInstagram,
  FaDownload, FaEnvelope, FaCode, FaBrain
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rheisanfrs",
      label: "Instagram",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20",
      hoverBorder: "hover:border-pink-400/40"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rheisanfrs",
      label: "LinkedIn",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      hoverBorder: "hover:border-blue-400/40"
    },
    {
      icon: FaGithub,
      href: "https://github.com/rheikun",
      label: "GitHub",
      color: "text-gray-300",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/20",
      hoverBorder: "hover:border-gray-400/40"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-950 to-neutral-950 h-screen overflow-hidden">
      <Navbar />

      {/* Modern Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 z-0 bg-primary-400 rounded-full blur-3xl opacity-5 animate-float" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 z-0 bg-primary-300 rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 z-0 bg-blue-500 rounded-full blur-3xl opacity-3 animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-emerald-950/40" />
      </div>

      {/* Hero Section - Full Height */}
      <section className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left order-2 lg:order-1 px-2" data-aos="fade-up">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-primary-400/30 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-gray-300">Available for opportunities</span>
              </div>

              {/* Main Heading - Compact */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                  Hello, I'm
                  <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent font-mono">
                    Rheisan Firnandatama
                  </span>
                </h1>
                
                {/* Typewriter Effect */}
                <div className="text-lg md:text-xl font-bold text-primary-300 font-mono mb-3">
                  <Typewriter
                    words={["ML Engineer", "Data Scientist", "AI Enthusiast"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </div>
              </div>

              {/* Description - Compact */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="200">
                I'm a Machine Learning Engineer based in Yogyakarta passionate about
                <span className="text-primary-400 font-semibold"> Artificial Intelligence</span> and
                <span className="text-primary-400 font-semibold"> Data Science</span>. I specialize in intelligent systems & ML workflows.
              </p>

              {/* Action Buttons - Compact */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-lg font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25 text-sm"
                >
                  <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Link>
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1ckouvnjbd1d0-ZPQzwi_7e1QP68w3E-L/view?usp=drive_link",
                      "_blank", "noopener,noreferrer"
                    )
                  }
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-400/30 hover:scale-105 text-sm"
                >
                  <FaDownload className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Download CV
                </button>
              </div>

              {/* Social Links - Compact */}
              <div className="flex justify-center lg:justify-start gap-3" data-aos="fade-up" data-aos-delay="500">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full border ${link.borderColor} ${link.bgColor} ${link.color} hover:scale-110 transition-transform ${link.hoverBorder}`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image - Compact */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
                
                {/* Profile Container - Smaller Size */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-primary-300 shadow-2xl shadow-primary-400/20 hover:shadow-primary-400/30 transition-all duration-700">
                    <img
                      src="portfolio.gif"
                      alt="Rheisan Firnandatama"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Icons - Smaller */}
                  <div className="absolute -top-3 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-300 rounded-lg flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                    <FaCode className="w-4 h-4 text-dark-950" />
                  </div>
                  <div className="absolute -bottom-3 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }}>
                    <FaBrain className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;