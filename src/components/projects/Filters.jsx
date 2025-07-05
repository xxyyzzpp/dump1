import React from "react";
import { FaFilter, FaCode, FaBrain, FaRobot, FaChartBar } from "react-icons/fa";

const filterConfig = [
  { 
    name: "All", 
    icon: FaFilter, 
    count: 6,
    gradient: "from-primary-400 to-primary-300"
  },
  { 
    name: "Convolutional Neural Networks", 
    icon: FaBrain, 
    count: 1,
    gradient: "from-blue-500 to-blue-400"
  },
  { 
    name: "Natural Language Processing", 
    icon: FaRobot, 
    count: 3,
    gradient: "from-green-500 to-green-400"
  },
  { 
    name: "Others", 
    icon: FaChartBar, 
    count: 2,
    gradient: "from-purple-500 to-purple-400"
  }
];

const ProjectFilters = ({ selectedTag, onFilterChange }) => {
  return (
    <div className="mb-16">
      {/* Filter Header */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">Filter by Category</h3>
        <p className="text-dark-400 text-sm">Explore projects by technology and domain</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {filterConfig.map((filter) => {
          const isSelected = selectedTag === filter.name;
          const Icon = filter.icon;
          
          return (
            <button
              key={filter.name}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 border backdrop-blur-sm ${
                isSelected
                  ? `bg-gradient-to-r ${filter.gradient} text-dark-950 border-transparent shadow-lg shadow-primary-400/25 scale-105`
                  : "bg-dark-800/50 text-dark-300 border-dark-600/50 hover:border-primary-400/30 hover:text-white hover:bg-dark-700/50 hover:scale-105"
              }`}
              onClick={() => onFilterChange(filter.name)}
            >
              {/* Icon */}
              <Icon className={`w-4 h-4 transition-transform duration-300 ${
                isSelected ? "scale-110" : "group-hover:scale-110"
              }`} />
              
              {/* Text */}
              <span className="text-sm font-semibold">
                {filter.name === "All" ? "All Projects" : filter.name}
              </span>
              
              {/* Count Badge */}
              <span className={`px-2 py-0.5 text-xs font-bold rounded-full transition-colors duration-300 ${
                isSelected 
                  ? "bg-dark-950/20 text-dark-950" 
                  : "bg-primary-400/10 text-primary-400 group-hover:bg-primary-400/20"
              }`}>
                {filter.count}
              </span>

              {/* Glow Effect */}
              {isSelected && (
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${filter.gradient} opacity-20 blur-xl -z-10`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Filter Indicator */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-full">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-sm text-dark-300">
            Showing <span className="text-primary-400 font-semibold">{selectedTag}</span> projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;