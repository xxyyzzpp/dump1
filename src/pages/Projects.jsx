import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/projects/Filters";
import ProjectCard from "../components/projects/Card";
import Modal from "../components/projects/Modal"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../data/projects";
import { FaRocket, FaCode, FaSearch } from "react-icons/fa";

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

  return (
    <div className="bg-dark-950 min-h-screen relative">
      <Navbar />

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-3 animate-float" style={{ animationDelay: '6s' }} />
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

          {/* Call to Action */}
          <div className="text-center mt-20" data-aos="fade-up">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
              <p className="text-dark-300 mb-6">
                I'm always excited to work on innovative projects and explore new technologies. 
                Let's create something amazing together!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
              >
                <FaRocket className="w-5 h-5" />
                Let's Connect
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