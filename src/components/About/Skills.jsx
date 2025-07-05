import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBrain, 
  FaChartLine, 
  FaCode, 
  FaGlobe, 
  FaPalette,
  FaDatabase,
  FaRobot,
  FaChartBar,
  FaLaptopCode,
  FaDesktop,
  FaImage
} from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techStackData = [
    {
      category: "Machine Learning",
      icon: FaBrain,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      hoverBorder: "hover:border-blue-400/40",
      tools: [
        { 
          name: "TensorFlow", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", 
          link: "https://www.tensorflow.org/" 
        },
        { 
          name: "PyTorch", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", 
          link: "https://pytorch.org/" 
        },
        { 
          name: "Scikit-Learn", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", 
          link: "https://scikit-learn.org/" 
        },
        { 
          name: "Keras", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", 
          link: "https://keras.io/" 
        },
        { 
          name: "Streamlit", 
          logo: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg", 
          link: "https://streamlit.io/" 
        },
        { 
          name: "Hugging Face", 
          logo: "https://huggingface.co/front/assets/huggingface_logo.svg", 
          link: "https://huggingface.co/" 
        },
      ],
    },
    {
      category: "Data Analysis",
      icon: FaChartLine,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20",
      hoverBorder: "hover:border-emerald-400/40",
      tools: [
        { 
          name: "Pandas", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg", 
          link: "https://pandas.pydata.org/" 
        },
        { 
          name: "NumPy", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", 
          link: "https://numpy.org/" 
        },
        { 
          name: "Matplotlib", 
          logo: "https://matplotlib.org/_static/images/logo2.svg", 
          link: "https://matplotlib.org/" 
        },
        { 
          name: "Seaborn", 
          logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", 
          link: "https://seaborn.pydata.org/" 
        },
        { 
          name: "SQL", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", 
          link: "https://www.w3schools.com/sql/" 
        },
      ],
    },
    {
      category: "Programming Languages",
      icon: FaCode,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
      hoverBorder: "hover:border-amber-400/40",
      tools: [
        { 
          name: "Python", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", 
          link: "https://www.python.org/" 
        },
        { 
          name: "Java", 
          logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", 
          link: "https://www.java.com/" 
        },
      ],
    },
    {
      category: "Web Development",
      icon: FaGlobe,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
      hoverBorder: "hover:border-cyan-400/40",
      tools: [
        { 
          name: "HTML", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", 
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
        },
        { 
          name: "PHP", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", 
          link: "https://www.php.net/" 
        },
        { 
          name: "CSS", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", 
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
        },
      ],
    },
    {
      category: "Multimedia",
      icon: FaPalette,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      hoverBorder: "hover:border-purple-400/40",
      tools: [
        { 
          name: "Figma", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", 
          link: "https://www.figma.com/" 
        },
        { 
          name: "Photoshop", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", 
          link: "https://www.adobe.com/products/photoshop.html" 
        },
        { 
          name: "Premiere Pro", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", 
          link: "https://www.adobe.com/products/premiere.html" 
        },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20 mb-6">
          <FaRobot className="w-4 h-4" />
          <span className="text-sm font-semibold">Technical Expertise</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
          Tech <span className="text-primary-400 font-mono">Stack</span>
        </h2>
        
        <p className="text-dark-300 max-w-3xl mx-auto text-lg leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I use to build intelligent solutions and data-driven applications.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto mt-8 rounded-full" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStackData.map((category, catIndex) => (
          <div
            key={catIndex}
            className={`group relative bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border ${category.borderColor} ${category.hoverBorder} rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/5 hover:-translate-y-2`}
            data-aos="fade-up"
            data-aos-delay={catIndex * 100}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 ${category.bgColor} ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border ${category.borderColor}`}>
                <category.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold text-white group-hover:${category.color} transition-colors duration-300`}>
                  {category.category}
                </h3>
                <p className="text-dark-400 text-sm">{category.tools.length} tools</p>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 gap-4">
              {category.tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/tool flex flex-col items-center p-4 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl hover:bg-dark-700/50 transition-all duration-300 hover:scale-105 hover:border-primary-400/30"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg group-hover/tool:scale-110 transition-transform duration-300 border border-white/10">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-dark-300 group-hover/tool:text-white transition-colors duration-300 font-medium leading-tight">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`} />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2">15+</div>
          <div className="text-sm text-dark-400 font-medium">Technologies</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2">5</div>
          <div className="text-sm text-dark-400 font-medium">Categories</div>
        </div>
        {/* <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2">3+</div>
          <div className="text-sm text-dark-400 font-medium">Years Experience</div>
        </div> */}
        <div className="text-center p-6 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-primary-400/30 transition-all duration-300">
          <div className="text-3xl font-bold text-primary-400 font-mono mb-2">∞</div>
          <div className="text-sm text-dark-400 font-medium">Learning</div>
        </div>
      </div>

      {/* Learning Philosophy */}
      <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
        <div className="p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
              <FaRobot className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Continuous Innovation</h3>
          </div>
          <p className="text-dark-300 leading-relaxed text-lg">
            I believe in staying at the forefront of technology. My approach combines proven methodologies with cutting-edge innovations, 
            ensuring that every solution I build leverages the best tools available while maintaining reliability and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;