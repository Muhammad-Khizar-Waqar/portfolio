import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';

const ICON_BASE = "assets/imgs/home-page-2/hero-1";

// Top ticker scrolls right, bottom ticker scrolls left.
const skillLogosTop = [
    { name: "Node.js", icon: "icon-4.svg" },
    { name: "Next.js", icon: "icon-1.svg" },
    { name: "React", icon: "icon-6.svg" },
];

const skillLogosBottom = [
    { name: "Vue.js", icon: "icon-7.svg" },
    { name: "MongoDB", icon: "icon-3.svg" },
    { name: "Tailwind", icon: "icon-5.svg" },
];

const skillGroups = [
    { label: "AI & Automation:", items: "AI Agents, LLM & Chatbot Integration, Document Q&A, Workflow Automation, Prompt Engineering" },
    { label: "Front-End:", items: "JavaScript (ES6+), React, Next.js, Vue.js, Tailwind, Bootstrap, Material UI" },
    { label: "Back-End:", items: "Node.js, Express, RESTful APIs" },
    { label: "Databases:", items: "MongoDB, PostgreSQL" },
    { label: "Tools:", items: "Redux, Pinia, Git, Docker, Stripe" },
];

function SkillTicker({ logos, direction }) {
    return (
        <Marquee className={`carouselTicker carouselTicker-${direction} position-relative z-1`} direction={direction === "right" ? "right" : "left"}>
            <ul className="carouselTicker__list m-0">
                {logos.map((logo) => (
                    <li key={logo.name} className="carouselTicker__item mt-6">
                        <Link to="#" className="brand-logo icon_80 icon-shape rounded-3">
                            <img src={`${ICON_BASE}/${logo.icon}`} alt={logo.name} />
                        </Link>
                        <span className="tool-tip">{logo.name}</span>
                    </li>
                ))}
            </ul>
        </Marquee>
    );
}

export default function Skills() {
    return (
        <>

            <section id="skills" className="section-skills-2">
                <div className="container">
                    <div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
                        <div className="position-relative z-1 py-60">
                            <div className="position-relative z-1">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                                            <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                                        </svg>
                                        <span className="text-linear-4 d-flex align-items-center"> Skills </span>
                                    </div>
                                    <h3>My Skills</h3>
                                </div>
                                <div className="container mt-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
                                                    {/* Carausel Scroll */}
                                                    <SkillTicker logos={skillLogosTop} direction="right" />
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
                                                    {/* Carausel Scroll */}
                                                    <SkillTicker logos={skillLogosBottom} direction="left" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 border-start-md mt-lg-0 mt-5">
                                            <div className="row">
                                                <div className="col-md-10 mx-auto">
                                                    <div className="h-100 position-relative">
                                                        <ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
                                                            {skillGroups.map((group) => (
                                                                <li key={group.label} className="skill-group mb-3">
                                                                    <div className="d-flex flex-column flex-md-row gap-2">
                                                                        <p className="text-dark text-nowrap mb-0">{group.label}</p>
                                                                        <span className="text-300">{group.items}</span>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute d-none d-md-block decorate">
                            <div className="rotateme">
                                <div className="circle-1-1" />
                                <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                                    <svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                                    </svg>
                                </div>
                                <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                                    <svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
