import React from "react";
import css from "./styles/app.module.scss";
import Header from "./components/Headers/Header";
import Hero from "./components/hero/Hero";
import Expertise from "./components/experties/Expertise";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

const App = () => {
 return (
  <div className={`bg-primary ${css.container}`}>
   <Header />
   <Hero />
   <Expertise />
   <Works />
   <Portfolio />
   <Footer />
  </div>
 );
};

export default App;
