import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaEnvelope, FaRocket, FaCode, FaBrain, FaDatabase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [showCvOptions, setShowCvOptions] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rheisanfrs",
      label: "LinkedIn",
      color: "text-primary-400",
      bgColor: "bg-primary-400/10",
      borderColor: "border-primary-400/20",
      hoverBorder: "hover:border-primary-400/40"
    },
    {
      icon: FaGithub,
      href: "https://github.com/rheikun",
      label: "GitHub",
      color: "text-gray-300",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/20",
      hoverBorder: "hover:border-gray-400/40"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rheisanfrs",
      label: "Instagram",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20",
      hoverBorder: "hover:border-pink-400/40"
    }
  ];

  return (
    <section className="h-screen bg-dark-950 text-white relative overflow-hidden">
      {/* Unique Tech-Inspired Background */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        {/* Animated Hexagons */}
        <div className="absolute top-20 left-20 w-24 h-24 border-2 border-primary-400/30 transform rotate-12 animate-spin-slow">
          <div className="w-full h-full border border-emerald-400/20 transform rotate-45"></div>
        </div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-purple-400/20 transform -rotate-12 animate-pulse">
          <div className="w-full h-full border-2 border-primary-400/30 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-emerald-400/10 to-transparent rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-purple-400/30 transform rotate-45 animate-ping" style={{ animationDelay: '2s' }} />
        
        {/* Matrix-style Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-400/30 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/3 text-primary-400/30 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute bottom-1/3 right-1/4 text-emerald-400/30 text-4xl font-mono animate-float" style={{ animationDelay: '3s' }}>AI</div>
        <div className="absolute top-1/2 left-1/6 text-purple-400/30 text-3xl font-mono animate-float" style={{ animationDelay: '1.5s' }}>ML</div>
        <div className="absolute top-3/4 right-1/6 text-primary-400/20 text-2xl font-mono animate-float" style={{ animationDelay: '4s' }}>{'{ }'}</div>
      </div>

      <div className="relative z-10 container-custom h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 pt-20 lg:pt-0" data-aos="fade-up">
            {/* Status Indicator - Fixed positioning */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-primary-400/30 transition-all duration-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent font-mono">
                  Rheisan Firnandatama
                </span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-300 font-mono">
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

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              I'm a Machine Learning Engineer based in Yogyakarta with a passion for 
              <span className="text-primary-400 font-semibold"> Artificial Intelligence</span> and 
              <span className="text-primary-400 font-semibold"> Data Science</span>. 
              I specialize in developing intelligent systems, data-driven solutions, and end-to-end machine learning workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
              >
                <FaEnvelope className="w-4 lg:w-5 h-4 lg:h-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setShowCvOptions(!showCvOptions)}
                  className="group flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-400/30 hover:scale-105"
                >
                  <FaDownload className="w-4 lg:w-5 h-4 lg:h-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </button>

                {/* CV Options Dropdown */}
                {showCvOptions && (
                  <div className="absolute top-full mt-3 left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden z-20" data-aos="fade-up">
                    <a
                      href="https://drive.google.com/file/d/1f1fHKtctvOB08XRULSphumiOqxujuYYs/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-sm hover:bg-white/10 transition-colors border-b border-white/10"
                    >
                      <span className="text-lg">🇮🇩</span>
                      Indonesian CV
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1ckouvnjbd1d0-ZPQzwi_7e1QP68w3E-L/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-sm hover:bg-white/10 transition-colors"
                    >
                      <span className="text-lg">🇺🇸</span>
                      English CV
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links - Now properly visible */}
            <div className="flex justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="600">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-3 lg:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-primary-400/30 shadow-lg hover:shadow-primary-400/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 pt-20 lg:pt-0" data-aos="fade-up" data-aos-delay="300">
            <div className="relative">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-emerald-400 shadow-2xl shadow-primary-400/20 hover:shadow-primary-400/30 transition-all duration-700">
                  <img
                    src="portfolio.gif"
                    alt="Rheisan Firnandatama"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Tech Icons - Repositioned for better mobile view */}
                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary-400 to-primary-300 rounded-2xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                  <FaCode className="w-5 h-5 lg:w-6 lg:h-6 text-dark-950" />
                </div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }}>
                  <FaBrain className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 lg:-right-8 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '3s' }}>
                  <FaDatabase className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;