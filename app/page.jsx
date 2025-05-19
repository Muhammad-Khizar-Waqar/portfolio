import Hero from "../components/sections/Hero";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Service from "../components/sections/Service";
import Skills from "../components/sections/Skills";
import Static from "../components/sections/Static";
import Layout from "../components/layout/Layout";
import Experience from "../components/sections/Experience";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero />
        <Static />
        <Service />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}
