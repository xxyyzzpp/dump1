import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-950 to-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;