import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/projects/Filters";
import ProjectCard from "../components/projects/Card";
import Modal from "../components/projects/Modal"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../data/projects";
import { FaRocket, FaCode, FaSearch, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      selectedTag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(selectedTag))
    );
  }, [selectedTag]);

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  const handleViewDetails = (project) => setSelectedProject(project);

  const socialLinks = [
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
    <div className="bg-gradient-to-br from-green-900 via-emerald-950 to-neutral-950 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Modern Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Organic shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/8 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Hexagonal pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-emerald-950/40" />
      </div>

      <section className="relative z-10 pt-32 pb-20">
        <div className="container-custom">
          {/* Enhanced Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20 mb-6">
              <FaRocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
              Featured <span className="text-primary-400 font-mono">Projects</span>
            </h1>
            
            <p className="text-dark-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              Explore my collection of AI-powered solutions, machine learning models, and data science projects. 
              Each project represents a unique challenge solved with innovative technology.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">{projects.length}</div>
                <div className="text-sm text-dark-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">3</div>
                <div className="text-sm text-dark-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">15+</div>
                <div className="text-sm text-dark-400">Technologies</div>
              </div>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
          </div>

          {/* Filter Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Filters selectedTag={selectedTag} onFilterChange={handleFilterChange} />
          </div>

          {/* Projects Grid */}
          <div className="relative">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="col-span-full text-center py-20" data-aos="fade-up">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaSearch className="w-8 h-8 text-dark-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                  <p className="text-dark-400 mb-6">
                    We couldn't find any projects matching your current filter. 
                    Try selecting a different category to explore more projects.
                  </p>
                  <button
                    onClick={() => setSelectedTag("All")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400 text-dark-950 rounded-xl font-semibold hover:bg-primary-300 transition-all duration-300 hover:scale-105"
                  >
                    <FaCode className="w-4 h-4" />
                    View All Projects
                  </button>
                </div>
              </div>
            )}
          </div>

            {/* Social Links Section */}
            <div className="text-center mt-20" data-aos="fade-up">
              <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
                <p className="text-dark-300 mb-6">
                  Follow my journey and stay updated with my latest projects and insights in AI and machine learning.
                </p>
                
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
              >
                <FaRocket className="w-5 h-5" />
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;