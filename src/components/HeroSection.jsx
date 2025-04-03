import React from "react";
import { Download } from "lucide-react";
import PersonImage from "../assets/people1.png";
import IconDecorate from "../assets/icon.svg";
import BackgroundLight from "../assets/bg.png";
import BackgroundDark from "../assets/bg-dark.png";
import FireBase from "../assets/firebase.svg";
import Next from "../assets/next.svg";
import Node from "../assets/node.svg";
import Mogobd from "../assets/mogobd.svg";

const brandIcons = [FireBase, Next, Node, Mogobd];

const HeroSection = () => {
  return (
    <section id="about" className="relative pt-32 pb-3 bg-primary px-20">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* <img
          src={BackgroundLight}
          alt="Background"
          className="w-full h-full object-cover"
        /> */}
        <img
          src={BackgroundDark}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto">
        <div
          className="border rounded-lg overflow-hidden relative z-10
         [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.secondary/.48)_80%,_theme(colors.tertiary)_86%,_theme(colors.textColor)_90%,_theme(colors.tertiary)_94%,_theme(colors.secondary/.48))_border-box]  border-transparent animate-border"
        >
          <div className="bg-primary bg-opacity-90">
            <div className="grid lg:grid-cols-2 items-end py-16 px-4">
              <div className="lg:text-left text-center relative mb-8 lg:mb-0">
                <div className="inline-block relative">
                  <img
                    src={PersonImage}
                    alt="khizar"
                    className="max-w-full h-auto"
                  />
                  <div className="flex items-center justify-center -mt-8">
                    <img
                      src={IconDecorate}
                      alt="Decorative Icon"
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:px-8">
                <div className="flex items-center mb-3">
                  <div className="typewriter">
                    <h1 className="text-lg font-medium ml-2">
                      <span>{`<span>`}</span>
                      Hey, I'm Muhammad Khizar Waqar
                      <span className="animate-pulse">_</span>
                      <span>{`</span>`}</span>
                    </h1>
                  </div>
                </div>

                <h2 className="text-5xl font-bold my-4">
                  Senior{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-textColor">
                    {`{Frontend Developer} `}
                  </span>
                  Web Technologies
                  {/* Web &amp; Technologies */}
                  <span className="animate-pulse">_</span>
                </h2>

                <p className="text-gray-300 mb-6">
                  &lt;p&gt;
                  <span className="text-white">
                    With expertise in cutting-edge technologies such as
                  </span>
                  <span className="text-textColor mx-1">HTML</span>,
                  <span className="text-textColor mx-1">CSS</span>,
                  <span className="text-textColor mx-1">React</span>,
                  <span className="text-textColor mx-1">Next.js</span>, and
                  <span className="text-textColor mx-1">WordPress</span>
                  <span className="text-white ">
                    ... I deliver web solutions that are both innovative and
                    robust.
                  </span>
                  &lt;/p&gt;
                </p>

                {/* Brand Marquee */}
                <div className="flex items-center">
                  <div className="w-4/12 overflow-hidden">
                    <div className="flex animate-marquee">
                      {brandIcons.map((icon, index) => (
                        <div key={index} className="flex-shrink-0 mx-2">
                          <img
                            src={icon}
                            alt={`Brand ${index + 1}`}
                            className="w-10 h-10 rounded-lg border border-gray-200 p-2"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless looping */}
                      {brandIcons.map((icon, index) => (
                        <div
                          key={`duplicate-${index}`}
                          className="flex-shrink-0 mx-2"
                        >
                          <img
                            src={icon}
                            alt={`Brand ${index + 1}`}
                            className="w-10 h-10 rounded-lg border border-gray-200 p-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-2/12 text-right">
                    <span className="text-sm text-gray-500">...and more</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center mt-6 text-white font-semibold hover:text-textColor transition-colors opacity-75"
                >
                  <Download className="mr-2" />[ Download my CV ]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
