import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;