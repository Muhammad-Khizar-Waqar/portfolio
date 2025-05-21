import Hero from "../components/sections/Hero";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Service from "../components/sections/Service";
import Skills from "../components/sections/Skills";
import Static from "../components/sections/Static";
import Layout from "../components/layout/Layout";
import Experience from "../components/sections/Experience";
import "/public/assets/css/main.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/bootstrap.rtl.min.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/fonts/remixicon/remixicon.css";



export default function App() {
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


