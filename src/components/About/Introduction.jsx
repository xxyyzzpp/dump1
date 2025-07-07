import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaRocket, FaCode, FaBrain, FaChartLine } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center lg:text-left" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20 mb-6">
          <FaRocket className="w-4 h-4" />
          <span className="text-sm font-semibold">About Me</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
          Hello, I'm <span className="text-primary-400 font-mono">Rheisan</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto lg:mx-0 rounded-full" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Academic Background</h3>
                <p className="text-dark-400 text-sm">Current Education & Focus</p>
              </div>
            </div>
            <p className="text-lg text-dark-300 leading-relaxed">
              Hi, my name is <span className="text-primary-400 font-semibold">Rheisan Firnandatama Rizky Satria</span>. 
              I am currently an undergraduate student in my 7th semester, majoring in 
              <span className="text-white font-medium"> Information Technology</span> at 
              <span className="text-white font-medium"> Universitas Negeri Yogyakarta</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaBrain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Technical Expertise</h3>
                <p className="text-dark-400 text-sm">Areas of Specialization</p>
              </div>
            </div>
            <p className="text-lg text-dark-300 leading-relaxed">
              I have extensive experience working on various projects in the fields of 
              <span className="text-primary-400 font-semibold"> Artificial Intelligence</span>, 
              <span className="text-primary-400 font-semibold"> Data Analysis</span>, and 
              <span className="text-primary-400 font-semibold"> Machine Learning</span>. 
              During my free time, I enjoy exploring new technologies and staying updated with the latest 
              advancements in the machine learning ecosystem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-400/10 text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaRocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Vision & Goals</h3>
                <p className="text-dark-400 text-sm">Future Aspirations</p>
              </div>
            </div>
            <p className="text-lg text-dark-300 leading-relaxed">
              My goal is to <span className="text-primary-400 font-semibold">advance AI and machine learning applications</span> 
              to address real-world challenges effectively, creating innovative solutions that can make a 
              significant impact on society and drive technological progress forward.
            </p>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 text-center hover:border-primary-400/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-primary-400/10 text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaGraduationCap className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-primary-400 font-mono mb-2">7th</div>
            <div className="text-sm text-dark-400 uppercase tracking-wide font-medium">Semester</div>
          </div>

          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 text-center hover:border-primary-400/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-blue-400/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaCode className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-primary-400 font-mono mb-2">IT</div>
            <div className="text-sm text-dark-400 uppercase tracking-wide font-medium">Major</div>
          </div>

          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 text-center hover:border-primary-400/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-emerald-400/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-primary-400 font-mono mb-2">UNY</div>
            <div className="text-sm text-dark-400 uppercase tracking-wide font-medium">University</div>
          </div>

          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 text-center hover:border-primary-400/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-purple-400/10 text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaBrain className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-primary-400 font-mono mb-2">AI/ML</div>
            <div className="text-sm text-dark-400 uppercase tracking-wide font-medium">Focus</div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
        <div className="p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
              <FaRocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Mission Statement</h3>
          </div>
          <p className="text-dark-300 leading-relaxed text-lg">
            "To leverage cutting-edge artificial intelligence and machine learning technologies 
            to solve complex real-world problems, while continuously learning and contributing 
            to the advancement of the AI community."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;