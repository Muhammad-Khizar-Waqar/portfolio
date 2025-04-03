import React, { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  MenuIcon,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const socialLinks = React.useMemo(
    () => [
      { icon: <Facebook className="w-5 h-5" />, href: "http://facebook.com" },
      { icon: <Twitter className="w-5 h-5" />, href: "http://twitter.com" },
      { icon: <Linkedin className="w-5 h-5" />, href: "http://linkedin.com" },
      { icon: <Github className="w-5 h-5" />, href: "http://github.com" },
    ],
    []
  );

  const navLinks = React.useMemo(
    () => [
      { label: "About me", href: "#about" },
      { label: "Resume", href: "#resume" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <header className="absolute top-8 left-0 right-0 z-50 px-20">
      <nav className="container mx-auto bg-primary flex items-center justify-between relative z-50 border rounded-lg border-secondary">
        <button
          onClick={toggleOffCanvas}
          className="bg-[#6d6d6d0d] rounded-l-lg p-5"
        >
          <MenuIcon className="w-8 h-8" />
        </button>
        <div className="grow flex items-center justify-between py-3 px-4">
          <div className=" grow flex items-center justify-between">
            <div className="flex items-center">
              <img src="/favicon.svg" alt="logo" className="w-10 h-10 mr-2" />
              <span className="text-xl font-bold">Khizar.dev</span>
            </div>

            <div className="hidden lg:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            // onClick={toggleDarkMode}
            className="bg-[#6d6d6d0d] rounded-r-lg p-5"
          >
            {/* {isDarkMode ? (
              <Sun className="w-6 h-6" />
            ) : ( */}
            <Moon className="w-8 h-8" />
            {/* )} */}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  src="/assets/imgs/home-page-2/template/favicon.svg"
                  alt="logo"
                  className="w-10 h-10 mr-2"
                />
                <span className="text-xl font-bold">James.dev</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex space-x-4 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Off-Canvas Contact Info */}
      {isOffCanvasOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-80 bg-white dark:bg-gray-800 h-full absolute left-0 p-6">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="absolute top-4 left-4"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-600">Phone Number</span>
                <p>+1-234-567-8901</p>
              </div>
              <div>
                <span className="text-gray-600">Email</span>
                <p>contact@william.design</p>
              </div>
              <div>
                <span className="text-gray-600">Skype</span>
                <p>WilliamDesignUX</p>
              </div>
              <div>
                <span className="text-gray-600">Address</span>
                <p>0811 Erdman Prairie Road, Joaville, California 90210</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
