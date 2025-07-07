import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;