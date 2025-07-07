import React, { useEffect } from "react";
import { FaGithub, FaTimes, FaExternalLinkAlt, FaCode, FaCalendar, FaTags, FaBrain } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-br from-dark-900 to-dark-800 border border-dark-600/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="relative">
          {/* Background Image */}
          <div className="h-64 overflow-hidden relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
            
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 bg-dark-900/80 backdrop-blur-sm text-white hover:text-primary-400 transition-all duration-300 hover:bg-dark-800/80 rounded-xl border border-dark-700/50 hover:border-primary-400/30 group"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                {project.name}
              </h2>
              <div className="flex items-center gap-4 text-dark-300">
                <div className="flex items-center gap-2">
                  <FaCode className="w-4 h-4" />
                  <span className="text-sm">{project.tags.length} Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span className="text-sm">Recent Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          {/* Tags Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTags className="w-4 h-4 text-primary-400" />
              <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-400/10 to-primary-300/10 text-primary-400 text-sm font-medium rounded-xl border border-primary-400/20 backdrop-blur-sm hover:border-primary-400/40 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-300 rounded-full" />
              Project Overview
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-dark-300 leading-relaxed text-base">
                {project.modals}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-300 rounded-full" />
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary-400/10 text-primary-400 rounded-lg flex items-center justify-center">
                    <FaBrain className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">AI-Powered</span>
                </div>
                <p className="text-dark-400 text-sm">Advanced machine learning algorithms</p>
              </div>
              
              <div className="p-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary-400/10 text-primary-400 rounded-lg flex items-center justify-center">
                    <FaCode className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">Modern Stack</span>
                </div>
                <p className="text-dark-400 text-sm">Built with latest technologies</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-dark-700/50">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 rounded-xl font-bold hover:from-primary-300 hover:to-primary-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/25 group"
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                View Source Code
                <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            )}
            
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-dark-700/50 text-white rounded-xl font-semibold hover:bg-dark-600/50 transition-all duration-300 border border-dark-600/50 hover:border-dark-500/50 backdrop-blur-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;