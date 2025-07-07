import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-950 to-neutral-950 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Modern Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/8 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-emerald-950/40" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container-custom">
          <Hero />
        </div>
      </section>
    </div>
  );
};

export default Home;