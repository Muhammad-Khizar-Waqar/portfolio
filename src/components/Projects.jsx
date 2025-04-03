import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Bg from "../assets/bgpro.png";

const ProjectCard = ({
  image,
  title,
  description,
  client,
  completionTime,
  technologies,
}) => (
  <div className="p-3 md:p-8 border border-secondary mt-5 px-20">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="lg:col-span-7">
        <h4 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-2xl font-medium">
          {title}
        </h4>
        <p className="mt-4 text-gray-600">{description}</p>

        <ul className="mt-8 space-y-3">
          <li className="text-gray-800 border-b pb-3">Project Info</li>
          <li className="border-b pb-3">
            <div className="flex justify-between">
              <p className="text-gray-800">Client</p>
              <p className="text-gray-600">{client}</p>
            </div>
          </li>
          <li className="border-b pb-3">
            <div className="flex justify-between">
              <p className="text-gray-800">Completion Time</p>
              <p className="text-gray-600">{completionTime}</p>
            </div>
          </li>
          <li className="border-b pb-3">
            <div className="flex justify-between">
              <p className="text-gray-800">Technologies</p>
              <p className="text-gray-600">{technologies}</p>
            </div>
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-6 mt-8">
          <a
            href="#"
            className="text-gray-500 border-b px-2 pb-2 hover:text-green-400 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="currentColor"
            >
              <path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" />
            </svg>
            Live Demo
          </a>
          <a
            href="#"
            className="text-gray-500 border-b px-2 pb-2 hover:text-green-400 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" />
            </svg>
            View on Github
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: "assets/imgs/home-page-2/projects/img-1.png",
      title: "Integrate AI into the ecommerce system",
      description:
        "Developed an online learning platform with course management, quizzes, and progress tracking.",
      client: "Conceptual JSC",
      completionTime: "6 months",
      technologies: "Node.js, React, MongoDB, Stripe",
    },
    {
      image: "assets/imgs/home-page-2/projects/img-1.png",
      title: "Integrate AI into the ecommerce system",
      description:
        "Developed an online learning platform with course management, quizzes, and progress tracking.",
      client: "Conceptual JSC",
      completionTime: "6 months",
      technologies: "Node.js, React, MongoDB, Stripe",
    },
    {
      image: "assets/imgs/home-page-2/projects/img-1.png",
      title: "Integrate AI into the ecommerce system",
      description:
        "Developed an online learning platform with course management, quizzes, and progress tracking.",
      client: "Conceptual JSC",
      completionTime: "6 months",
      technologies: "Node.js, React, MongoDB, Stripe",
    },
    // Add more projects here
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-20">
        <div
          className="border rounded-lg overflow-hidden relative z-10
         [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.secondary/.48)_80%,_theme(colors.tertiary)_86%,_theme(colors.textColor)_90%,_theme(colors.tertiary)_94%,_theme(colors.secondary/.48))_border-box]  border-transparent animate-border"
        >
          <div className="bg-primary bg-opacity-90 relative z-10">
            <div className="p-8">
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2" />
                <span className="bg-gradient-to-r from-green-400 to-textColor bg-clip-text text-transparent">
                  Projects
                </span>
              </div>
              <h3 className="text-3xl font-medium mt-4">My Recent Works</h3>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerView={1}
                className="mt-8"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <ProjectCard {...project} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="hidden md:flex gap-4 absolute bottom-8 right-8">
                <button className="swiper-button-prev bg-white p-3 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="swiper-button-next bg-white p-3 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="#A8FF53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <img
            className="absolute top-0 left-0 w-full h-full z-10"
            src={Bg}
            alt="background pattern"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
