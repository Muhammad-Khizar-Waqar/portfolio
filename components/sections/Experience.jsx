import { useState } from "react";

const experiences = [
    {
        company: "WPWizards LLP",
        period: "2024 - Present",
        icon: "ri-building-2-line",
        role: "MERN Stack Developer",
        highlights: [
            <>Developing and maintaining full-stack applications with <span className="text-secondary-2">MongoDB</span>, <span className="text-secondary-2">Express.js</span>, <span className="text-secondary-2">React</span> and <span className="text-secondary-2">Node.js</span>.</>,
            <>Building scalable microservices architecture and integrating RESTful APIs to deliver <span className="text-secondary-2">high-performance</span> results.</>,
            <>Leading front-end architecture and working with designers, backend engineers and QA to ship features on time.</>,
        ],
        stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
        company: "Prospiral",
        period: "2024 - Present",
        icon: "ri-rocket-2-line",
        role: "JavaScript Developer",
        highlights: [
            <>Developing and optimising frontend applications using <span className="text-secondary-2">JavaScript (ES6+)</span>, <span className="text-secondary-2">Vue.js</span> and <span className="text-secondary-2">React.js</span>.</>,
            <>Ensuring <span className="text-secondary-2">responsiveness</span> and performance across devices and screen sizes.</>,
            <>Collaborating with backend teams to integrate REST APIs and improve data flow across applications.</>,
        ],
        stack: ["JavaScript", "Vue.js", "React", "Pinia", "REST APIs"],
    },
    {
        company: "Technology Brainz",
        period: "2022 - 2024",
        icon: "ri-code-box-line",
        role: "Frontend Developer",
        highlights: [
            <>Built responsive, component-driven interfaces with <span className="text-secondary-2">React</span> and <span className="text-secondary-2">Redux</span> on a strong JavaScript foundation.</>,
            <>Integrated front-end features with <span className="text-secondary-2">RESTful APIs</span> and back-end services.</>,
            <>Delivered UI work with <span className="text-secondary-2">Bootstrap</span> and modern component libraries across client projects.</>,
        ],
        stack: ["JavaScript", "React", "Redux", "Bootstrap", "SCSS"],
    },
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = experiences[activeIndex];

    return (
        <>
            <section id="portfolio" className="section-experience">
                <div className="container">
                    <div className="rounded-3 border border-1 position-relative overflow-hidden">
                        <div className="box-linear-animation position-relative z-1">
                            <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                                <div className="d-flex align-items-center">
                                    <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                                        <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                                    </svg>
                                    <span className="text-linear-4 d-flex align-items-center"> Experience </span>
                                </div>
                                <h3>
                                    +4{" "}
                                    <span className="text-300">years of</span>{" "}
                                    passion{" "}
                                    <span className="text-300">
                                        for <br />
                                        building things that work
                                    </span>
                                </h3>
                                <div className="row mt-5">
                                    <div className="col-lg-4">
                                        <div className="d-flex flex-column gap-2" role="tablist" aria-label="Work experience">
                                            {experiences.map((item, index) => (
                                                <button
                                                    key={item.company}
                                                    type="button"
                                                    role="tab"
                                                    id={`experience-tab-${index}`}
                                                    aria-selected={index === activeIndex}
                                                    aria-controls="experience-panel"
                                                    onClick={() => setActiveIndex(index)}
                                                    className={`technology border border-1 rounded-3 p-3${index === activeIndex ? " active" : ""}`}
                                                >
                                                    <div className="d-flex align-items-center gap-2">
                                                        <i className={`${item.icon} text-primary-2 fs-28`} />
                                                        <div className="d-flex flex-column ms-2">
                                                            <h5 className="mb-1">{item.company}</h5>
                                                            <span className="text-300">{item.period}</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-8 ps-lg-5 mt-5 mt-lg-0"
                                        id="experience-panel"
                                        role="tabpanel"
                                        aria-labelledby={`experience-tab-${activeIndex}`}
                                    >
                                        <h6 className="text-linear-4">{active.role}</h6>
                                        <ul className="mt-4">
                                            {active.highlights.map((highlight, index) => (
                                                <li key={index} className="text-dark mb-3">{highlight}</li>
                                            ))}
                                        </ul>
                                        <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                            {active.stack.map((tech) => (
                                                <span key={tech} className="text-300 border border-1 px-3 py-1">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="khizar" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
