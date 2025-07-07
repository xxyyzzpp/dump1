import React, { useEffect } from "react";
import {
  FaLinkedin, FaGithub, FaInstagram,
  FaDownload, FaEnvelope, FaCode, FaBrain
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-950 to-neutral-950 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <LeftSection />
            
            {/* Right Section */}
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

// Background Elements Component
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-400 rounded-full blur-3xl opacity-5 animate-float" />
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-300 rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-3 animate-float" style={{ animationDelay: '4s' }} />
  </div>
);

// Left Section Component
const LeftSection = () => (
  <div className="space-y-6 text-center lg:text-left" data-aos="fade-up">
    <StatusBadge />
    <MainHeading />
    <TypewriterSection />
    <Description />
    <ActionButtons />
    <SocialLinks />
  </div>
);

// Status Badge Component
const StatusBadge = () => (
  <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-primary-400/30 transition-all duration-300">
    <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
    <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
  </div>
);

// Main Heading Component
const MainHeading = () => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
    Hello, I'm
    <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent font-mono">
      Rheisan Firnandatama
    </span>
  </h1>
);

// Typewriter Section Component
const TypewriterSection = () => (
  <div className="text-xl md:text-2xl font-bold text-primary-300 font-mono">
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
);

// Description Component
const Description = () => (
  <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="200">
    I'm a Machine Learning Engineer based in Yogyakarta passionate about
    <span className="text-primary-400 font-semibold"> Artificial Intelligence</span> and
    <span className="text-primary-400 font-semibold"> Data Science</span>. I specialize in intelligent systems & ML workflows.
  </p>
);

// Action Buttons Component
const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
    <Link
      to="/contact"
      className="group flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-lg font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
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
      className="group flex items-center justify-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-400/30 hover:scale-105"
    >
      <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
      Download CV
    </button>
  </div>
);

// Social Links Component
const SocialLinks = () => {
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
    <div className="flex justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full border ${link.borderColor} ${link.bgColor} ${link.color} hover:scale-110 transition-transform ${link.hoverBorder}`}
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

// Right Section Component
const RightSection = () => (
  <div className="flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="300">
    <ProfileImage />
  </div>
);

// Profile Image Component
const ProfileImage = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
    <div className="relative w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-primary-300 shadow-2xl shadow-primary-400/20 hover:shadow-primary-400/30 transition-all duration-700">
        <img
          src="portfolio.gif"
          alt="Rheisan Firnandatama"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <FloatingIcons />
    </div>
  </div>
);

// Floating Icons Component
const FloatingIcons = () => (
  <>
    <div className="absolute -top-4 -right-6 w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-300 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
      <FaCode className="w-5 h-5 text-dark-950" />
    </div>
    <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }}>
      <FaBrain className="w-5 h-5 text-white" />
    </div>
  </>
);

export default Hero;