import React from "react";
import {
  FaLinkedin, FaGithub, FaInstagram,
  FaDownload, FaEnvelope, FaCode, FaBrain, FaRocket
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
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
    <div className="space-y-16">
      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left" data-aos="fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
              Hello, I'm
              <span className="block text-primary-400 font-mono">
                Rheisan Firnandatama
              </span>
            </h1>
            
            {/* Typewriter Effect */}
            <div className="text-xl md:text-2xl font-bold text-primary-300 font-mono mb-6">
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
          <p className="text-lg text-dark-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I'm a Machine Learning Engineer based in Yogyakarta passionate about
            <span className="text-primary-400 font-semibold"> Artificial Intelligence</span> and
            <span className="text-primary-400 font-semibold"> Data Science</span>. I specialize in intelligent systems & ML workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
            >
              <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ckouvnjbd1d0-ZPQzwi_7e1QP68w3E-L/view?usp=drive_link",
                  "_blank", "noopener,noreferrer"
                )
              }
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-dark-800/50 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-dark-700/50 transition-all duration-300 border border-dark-700/50 hover:border-primary-400/30 hover:scale-105"
            >
              <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border ${link.borderColor} ${link.bgColor} ${link.color} hover:scale-110 transition-all duration-300 ${link.hoverBorder} backdrop-blur-sm`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="300">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
            
            {/* Profile Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-primary-300 shadow-2xl shadow-primary-400/20 hover:shadow-primary-400/30 transition-all duration-700">
                <img
                  src="portfolio.gif"
                  alt="Rheisan Firnandatama"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-6 -right-8 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-300 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                <FaCode className="w-6 h-6 text-dark-950" />
              </div>
              <div className="absolute -bottom-6 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }}>
                <FaBrain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="600">
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300 group">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">7th</div>
          <div className="text-sm text-dark-400 font-medium">Semester</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300 group">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
          <div className="text-sm text-dark-400 font-medium">Projects</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300 group">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">AI/ML</div>
          <div className="text-sm text-dark-400 font-medium">Focus</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300 group">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
          <div className="text-sm text-dark-400 font-medium">Learning</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="800">
        <div className="p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
              <FaRocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Ready to Collaborate?</h3>
          </div>
          <p className="text-dark-300 leading-relaxed text-lg mb-6">
            I'm always excited to work on innovative AI projects and explore new opportunities in machine learning and data science.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400/10 text-primary-400 rounded-xl font-semibold hover:bg-primary-400/20 transition-all duration-300 border border-primary-400/20 hover:border-primary-400/40"
          >
            View My Work
            <FaCode className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;