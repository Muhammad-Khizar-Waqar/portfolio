import React from "react";
import logo from "/favicon.svg";

const Footer = () => {
  const socialLinks = [
    { icon: "ri-facebook-circle-fill", url: "http://facebook.com" },
    { icon: "ri-twitter-x-fill", url: "http://twitter.com" },
    { icon: "ri-linkedin-fill", url: "http://linkedin.com" },
    { icon: "ri-github-fill", url: "http://github.com" },
  ];

  const navLinks = [
    { name: "About me", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer>
      <div className="relative px-20">
        <div className="container mx-auto px-4 relative z-10 border-t pt-4 pb-2">
          <div className="text-center">
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center justify-center mb-3"
            >
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="text-xl ml-2">Khizar.dev</span>
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-600 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>

            {/* Navigation */}
            <nav className="flex items-center justify-center flex-wrap gap-4 my-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-green-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
