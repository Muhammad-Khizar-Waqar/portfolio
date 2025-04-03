import React from "react";

const SkillIcon = ({ src, name }) => (
  <li className="mt-6">
    <a
      href="#"
      className="block w-20 h-20 bg-white rounded-lg hover:shadow-lg transition-shadow"
    >
      <img src={src} alt={name} className="w-full h-full p-4" />
    </a>
    <span className="tooltip">{name}</span>
  </li>
);

const SkillCategory = ({ category, skills }) => (
  <li className="mb-3">
    <div className="flex flex-col md:flex-row gap-2">
      <p className="text-gray-900 whitespace-nowrap mb-0">{category}:</p>
      <span className="text-gray-600">{skills}</span>
    </div>
  </li>
);

const Skills = () => {
  const topRowIcons = [
    { src: "assets/imgs/home-page-2/hero-1/icon-4.svg", name: "NodeJS" },
    { src: "assets/imgs/home-page-2/hero-1/icon-1.svg", name: "NextJS" },
    { src: "assets/imgs/home-page-2/hero-1/icon-2.svg", name: "Firebase" },
    { src: "assets/imgs/home-page-2/hero-1/icon-3.svg", name: "MongoDB" },
    { src: "assets/imgs/home-page-2/hero-1/icon-6.svg", name: "React" },
  ];

  const bottomRowIcons = [
    { src: "assets/imgs/home-page-2/hero-1/icon-7.svg", name: "VueJS" },
    { src: "assets/imgs/home-page-2/hero-1/icon-8.svg", name: "Angular" },
    { src: "assets/imgs/home-page-2/hero-1/icon-9.svg", name: "Laravel" },
    { src: "assets/imgs/home-page-2/hero-1/icon-5.svg", name: "Tailwind" },
  ];

  const skillCategories = [
    { category: "Front-End", skills: "HTML, CSS, JavaScript, React, Angular" },
    { category: "Back-End", skills: "Node.js, Express, Python, Django" },
    { category: "Databases", skills: "MySQL, PostgreSQL, MongoDB" },
    { category: "Tools & Platforms", skills: "Git, Docker, AWS, Heroku" },
    {
      category: "Others",
      skills: "RESTful APIs, GraphQL, Agile Methodologies",
    },
  ];

  return (
    <section id="skills" className="py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-lg border relative overflow-hidden">
          <div className="relative z-10 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2" />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </div>
              <h3 className="text-3xl font-medium mt-4">My Skills</h3>
            </div>

            <div className="container mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Animated Icons */}
                <div className="space-y-8">
                  <div className="overflow-hidden">
                    <div className="animate-marquee-reverse">
                      <ul className="flex space-x-6">
                        {topRowIcons.map((icon, index) => (
                          <SkillIcon key={index} {...icon} />
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="animate-marquee">
                      <ul className="flex space-x-6">
                        {bottomRowIcons.map((icon, index) => (
                          <SkillIcon key={index} {...icon} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Skill Categories */}
                <div className="lg:border-l lg:pl-8">
                  <div className="max-w-lg mx-auto">
                    <ul className="space-y-6">
                      {skillCategories.map((item, index) => (
                        <SkillCategory key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
