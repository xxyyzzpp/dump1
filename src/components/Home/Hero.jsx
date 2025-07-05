import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaEnvelope, FaRocket, FaCode } from "react-icons/fa";
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
    <section className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-3 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 container-custom min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1" data-aos="fade-up">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-primary-400/30 transition-all duration-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent font-mono">
                  Rheisan Firnandatama
                </span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="text-2xl md:text-3xl font-bold text-primary-300 font-mono">
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
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              I'm a Machine Learning Engineer based in Yogyakarta with a passion for 
              <span className="text-primary-400 font-semibold"> Artificial Intelligence</span> and 
              <span className="text-primary-400 font-semibold"> Data Science</span>. 
              I specialize in developing intelligent systems, data-driven solutions, and end-to-end machine learning workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
              >
                <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setShowCvOptions(!showCvOptions)}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-400/30 hover:scale-105"
                >
                  <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
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

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="600">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-primary-400/30`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-up" data-aos-delay="300">
            <div className="relative">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-primary-300 shadow-2xl shadow-primary-400/20 hover:shadow-primary-400/30 transition-all duration-700">
                  <img
                    src="portfolio.gif"
                    alt="Rheisan Firnandatama"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-300 rounded-2xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                  <FaCode className="w-6 h-6 text-dark-950" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }}>
                  <FaRocket className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;