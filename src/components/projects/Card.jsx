import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group relative bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden hover:border-primary-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/10">
      {/* Featured Badge */}
      {project.isFeatured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 text-xs font-bold rounded-full shadow-lg">
            <FaStar className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Project Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 z-20">
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-400 text-dark-950 rounded-lg font-semibold hover:bg-primary-300 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            View Details
          </button>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 shadow-lg border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
        </div>

        {/* Tech Stack Indicator */}
        <div className="absolute bottom-4 left-4 right-4 z-15">
          <div className="flex items-center gap-2 text-white/80">
            <FaCode className="w-4 h-4" />
            <span className="text-sm font-medium">{project.tags.length} Technologies</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight line-clamp-2">
          {project.name}
        </h3>

        {/* Description Preview */}
        <p className="text-dark-300 text-sm leading-relaxed line-clamp-3">
          {project.modals.substring(0, 120)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-400/10 text-primary-400 text-xs font-medium rounded-full border border-primary-400/20 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="px-3 py-1 bg-dark-700/50 text-dark-400 text-xs font-medium rounded-full border border-dark-600/50">
              +{project.tags.length - 2} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-dark-700/50">
          <button
            onClick={() => onViewDetails(project)}
            className="text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors duration-200 flex items-center gap-1 group/btn"
          >
            Learn More
            <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </button>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-white transition-colors duration-200 hover:bg-dark-700/50 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;