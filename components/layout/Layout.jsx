import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import ImageHoverEffects from "../elements/ImageHoverEffects";
import MobileMenu from "./MobileMenu";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { WOW } from "wowjs";

export default function Layout({ children }) {
  const [scroll, setScroll] = useState(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  // Search
  // Removed unused isSearch and handleSearch

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  useEffect(() => {
    window.wow = new WOW({
      live: false,
    });

    // Initialize WOW.js
    window.wow.init();

    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <div id='top' />
      <AddClassBody />
      <DataBg />
      <ImageHoverEffects />

      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isOffCanvas={isOffCanvas}
        handleOffCanvas={handleOffCanvas}
      />

      {/* Only render MobileMenu if you want it as a controlled menu */}
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main className='main'>{children}</main>

      <Footer />

      <BackToTop target='#top' />
    </>
  );
}
