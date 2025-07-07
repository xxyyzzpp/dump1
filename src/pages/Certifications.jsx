import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { certifications } from "../data/certifications";
import { FaExternalLinkAlt, FaAward, FaCertificate, FaGraduationCap, FaRocket } from "react-icons/fa";

const Certifications = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gradient-to-br from-cyan-900 via-slate-950 to-gray-950 min-h-screen relative overflow-hidden">
            <Navbar />

            {/* Modern Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Abstract shapes */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-400/8 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-fuchsia-400/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }} />
                
                {/* Diamond pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-purple-950/40" />
            </div>

            <section className="relative z-10 pt-32 pb-20">
                <div className="container-custom">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full border border-primary-400/20 mb-6">
                            <FaCertificate className="w-4 h-4" />
                            <span className="text-sm font-semibold">Professional Development</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
                            My <span className="text-primary-400 font-mono">Certifications</span>
                        </h1>
                        
                        <p className="text-dark-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                            Professional certifications and achievements that validate my expertise in machine learning, 
                            artificial intelligence, and data science from world-renowned institutions.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-400 font-mono">{certifications.length}</div>
                                <div className="text-sm text-dark-400">Certifications</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-400 font-mono">2</div>
                                <div className="text-sm text-dark-400">Specializations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-400 font-mono">100%</div>
                                <div className="text-sm text-dark-400">Completion Rate</div>
                            </div>
                        </div>

                        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="group relative bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden hover:border-primary-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/10 hover:-translate-y-2 cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                onClick={() => window.open(cert.link, "_blank")}
                            >
                                {/* Certificate Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                                        <div className="flex items-center gap-2 px-6 py-3 bg-primary-400 text-dark-950 rounded-xl font-bold hover:bg-primary-300 transition-all duration-200 hover:scale-105 shadow-lg">
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                            View Certificate
                                        </div>
                                    </div>

                                    {/* Verification Badge */}
                                    <div className="absolute top-4 right-4 z-15">
                                        <div className="w-12 h-12 bg-green-500/10 backdrop-blur-sm text-green-400 rounded-xl flex items-center justify-center border border-green-400/20">
                                            <FaAward className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-6">
                                    {/* Header */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FaGraduationCap className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block px-3 py-1 bg-primary-400/10 text-primary-400 text-xs font-semibold rounded-full border border-primary-400/20 mb-3">
                                                Verified Certificate
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                                                {cert.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Issuer */}
                                    <div className="flex items-center gap-3 p-4 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl">
                                        <div className="w-8 h-8 bg-blue-400/10 text-blue-400 rounded-lg flex items-center justify-center">
                                            <FaCertificate className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-dark-400 text-xs font-medium">Issued by</p>
                                            <p className="text-white text-sm font-semibold">{cert.issued}</p>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <div className="flex items-center justify-between pt-4 border-t border-dark-700/50">
                                        <div className="text-primary-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                            View Credential
                                            <FaExternalLinkAlt className="w-3 h-3 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="text-dark-400 text-xs">
                                            Click to verify
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </div>
                        ))}
                    </div>

                    {/* Learning Philosophy */}
                    <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <div className="p-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary-400/10 text-primary-400 rounded-xl flex items-center justify-center">
                                    <FaRocket className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
                            </div>
                            <p className="text-dark-300 leading-relaxed text-lg">
                                I'm committed to staying current with the latest developments in AI and machine learning through ongoing education and certification. 
                                These credentials represent not just knowledge gained, but a dedication to excellence and professional growth in the rapidly evolving field of artificial intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;