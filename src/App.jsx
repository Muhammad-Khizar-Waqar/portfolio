import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import Corporation from "./components/Corporation";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Cantact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary text-white">
      <Header />
      <HeroSection />
      <AchievementsSection />
      {/* <Corporation /> */}
      <Services />
      {/* <Projects /> */}

      {/* <Experience />
      <Skills />
      <Projects />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
