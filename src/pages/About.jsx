import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/About/Introduction";
import Skills from "../components/About/Skills";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-dark-950 min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-3 animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* About Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-32">
            <Introduction />
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <Skills />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;