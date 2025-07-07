import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaClock, 
  FaRocket,
  FaUser,
  FaComment
} from "react-icons/fa";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "portfolio_rhei",
        "template_sqjsj0q",
        e.target,
        "T6qeNo3A_1C5IiecM"
      )
      .then(
        () => {
          setIsSnackbarVisible(true);
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
          e.target.reset();

          setTimeout(() => {
            setIsSnackbarVisible(false);
          }, 5000);
        },
        () => {
          setIsSubmitting(false);
        }
      );
  };

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:rheisanfrs@gmail.com",
      label: "Email",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20",
      hoverBorder: "hover:border-red-400/40"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/rheisanfrs",
      label: "Instagram",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20",
      hoverBorder: "hover:border-pink-400/40"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/rheisanfrs",
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
    <div className="bg-gradient-to-br from-emerald-800 via-gray-900 to-gray-950 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Modern Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Flowing shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-400/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/8 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-red-400/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Circular pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-rose-950/40" />
      </div>

      <section className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-6xl">
          {/* Enhanced Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20 mb-6">
              <FaRocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
              Get In <span className="text-primary-400 font-mono">Touch</span>
            </h1>
            
            <p className="text-dark-300 max-w-3xl mx-auto text-lg leading-relaxed">
              I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
              or just want to discuss the latest in AI and machine learning.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
                    <FaComment className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Collaborate</h3>
                </div>
                <p className="text-dark-300 mb-8 leading-relaxed text-lg">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and AI innovations.
                </p>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3 p-4 bg-gradient-to-br from-dark-800/50 to-dark-700/30 backdrop-blur-sm border ${social.borderColor} ${social.hoverBorder} rounded-xl transition-all duration-300 hover:scale-105`}
                    >
                      <div className={`w-10 h-10 ${social.bgColor} ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white text-sm font-semibold block">{social.label}</span>
                        <span className="text-dark-400 text-xs">Connect with me</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Quick Info</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-lg">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                    <div>
                      <span className="text-dark-400 text-sm">Location:</span>
                      <span className="text-white text-sm font-medium ml-2">Yogyakarta, Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-lg">
                    <FaClock className="w-4 h-4 text-primary-400" />
                    <div>
                      <span className="text-dark-400 text-sm">Response Time:</span>
                      <span className="text-white text-sm font-medium ml-2">Within 24 hours</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-lg">
                    <FaRocket className="w-4 h-4 text-primary-400" />
                    <div>
                      <span className="text-dark-400 text-sm">Availability:</span>
                      <span className="text-primary-400 text-sm font-medium ml-2">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-primary-400/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
                    <FaPaperPlane className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                      <FaUser className="w-4 h-4 text-primary-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-400/50 transition-all duration-300 hover:border-dark-600/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                      <FaEnvelope className="w-4 h-4 text-primary-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-400/50 transition-all duration-300 hover:border-dark-600/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                      <FaComment className="w-4 h-4 text-primary-400" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full px-4 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-400/50 transition-all duration-300 resize-none hover:border-dark-600/50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      isSubmitting
                        ? "bg-dark-700/50 text-dark-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-primary-400 to-primary-300 text-dark-950 hover:from-primary-300 hover:to-primary-200 hover:scale-105 shadow-lg hover:shadow-primary-400/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Snackbar */}
      {isSnackbarVisible && (
        <div className="fixed bottom-6 right-6 z-50" data-aos="fade-up">
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm">
            <FaCheckCircle className="w-5 h-5" />
            <span className="font-semibold">Message sent successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;