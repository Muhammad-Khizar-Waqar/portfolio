import React from "react";

const TechnologyCard = ({ logo, company, period }) => (
  <a
    href="#"
    className="block border rounded-lg p-3 hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center gap-2">
      <img src={logo} alt={company} />
      <div className="flex flex-col ml-2">
        <h5 className="mb-1 font-medium">{company}</h5>
        <span className="text-gray-500">{period}</span>
      </div>
    </div>
  </a>
);

const SkillTag = ({ skill }) => (
  <a
    href="#"
    className="text-gray-500 border px-3 py-1 rounded hover:bg-gray-50"
  >
    {skill}
  </a>
);

const Experience = () => {
  const companies = [
    {
      logo: "/assets/imgs/home-page-2/experience/google.svg",
      company: "Google",
      period: "2018 - Present",
    },
    {
      logo: "/assets/imgs/home-page-2/experience/twitter.svg",
      company: "Twitter (X)",
      period: "2012 - 2015",
    },
    {
      logo: "/assets/imgs/home-page-2/experience/amazon.svg",
      company: "Amazon",
      period: "2018 - Present",
    },
    {
      logo: "/assets/imgs/home-page-2/experience/payPal.svg",
      company: "PayPal",
      period: "2010 - 2012",
    },
  ];

  const skills = ["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"];

  return (
    <section id="portfolio" className="py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="border rounded-lg relative overflow-hidden">
          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2"></div>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </div>

            <h3 className="text-4xl font-medium mt-4">
              +12<span className="font-light">years of </span>passion
              <span className="font-light">
                for <br />
                programming techniques
              </span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
              {/* Left Column */}
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-4">
                  {companies.map((company, index) => (
                    <TechnologyCard
                      key={index}
                      logo={company.logo}
                      company={company.company}
                      period={company.period}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 lg:pl-8">
                <h6 className="text-xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Senior Software Engineer
                </h6>

                <ul className="mt-6 space-y-4">
                  <li className="text-gray-800">
                    Led development of scalable web applications,
                    <span className="text-blue-600">improving performance</span>
                    and user experience for millions of users.
                  </li>
                  <li className="text-gray-800">
                    Implemented machine learning algorithms to enhance search
                    functionality.
                  </li>
                  <li className="text-gray-800">
                    Collaborated with cross-functional teams to integrate new
                    features seamlessly.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute top-0 left-0 z-0"
            src="/assets/imgs/home-page-2/services/bg.png"
            alt="background pattern"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
