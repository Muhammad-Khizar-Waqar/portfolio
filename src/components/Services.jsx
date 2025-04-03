import React from "react";

const ServiceCard = React.memo(({ icon, title, description }) => (
  <div className="px-6 py-20 border border-secondary rounded-lg h-full transition-transform hover:translate-y-[-10px] hover:text-green-500">
    {icon}
    <h6 className="my-3 font-medium text-white">{title}</h6>
    <p className="text-sm text-textColor">{description}</p>
  </div>
));

const Services = () => {
  const services = React.useMemo(
    () => [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"
              fill="currentColor"
            />
          </svg>
        ),
        title: "Web Development",
        description: (
          <>
            Crafting visually appealing and user-friendly interfaces using{" "}
            <span className="text-green-500">HTML</span>,{" "}
            <span className="text-green-500">CSS</span>,{" "}
            <span className="text-green-500">JavaScript</span>, and modern
            frameworks like React and Next.
          </>
        ),
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z"
              fill="currentColor"
            ></path>
          </svg>
        ),
        title: "API Development",
        description: (
          <>
            Integrating RESTful and GraphQL{" "}
            <span className="text-green-500">APIs</span>, involves connecting
            applications, enabling data exchange, and enhancing functionalities
            for improved user experiences.
          </>
        ),
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13.3336L2.77735 19.482C2.54759 19.6352 2.23715 19.5731 2.08397 19.3434C2.02922 19.2612 2 19.1647 2 19.066V4.93457C2 4.65842 2.22386 4.43457 2.5 4.43457C2.59871 4.43457 2.69522 4.46379 2.77735 4.51854L12 10.6669V4.93457C12 4.65842 12.2239 4.43457 12.5 4.43457C12.5987 4.43457 12.6952 4.46379 12.7774 4.51854L23.376 11.5842C23.6057 11.7374 23.6678 12.0479 23.5146 12.2776C23.478 12.3325 23.4309 12.3797 23.376 12.4163L12.7774 19.482C12.5476 19.6352 12.2372 19.5731 12.084 19.3434C12.0292 19.2612 12 19.1647 12 19.066V13.3336ZM10.3944 12.0003L4 7.73734V16.2632L10.3944 12.0003ZM14 7.73734V16.2632L20.3944 12.0003L14 7.73734Z"
              fill="currentColor"
            ></path>
          </svg>
        ),
        title: "Performance Optimization",
        description: (
          <>
            Improving the speed and performance of web applications to provide a
            better user experience.
          </>
        ),
      },
    ],
    []
  );

  return (
    <section id="services" className="py-3 px-20">
      <div className="container mx-auto">
        <div
          className="border rounded-lg overflow-hidden relative z-10
         [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.secondary/.48)_80%,_theme(colors.tertiary)_86%,_theme(colors.textColor)_90%,_theme(colors.tertiary)_94%,_theme(colors.secondary/.48))_border-box]  border-transparent animate-border"
        >
          <div className=" bg-primary bg-opacity-90 relative z-10 p-8 lg:p-12">
            <div className="relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-secondary rounded-full mr-2"></div>
                  <span className="bg-gradient-to-r from-green-400 to-textColor bg-clip-text text-transparent">
                    Cooperation
                  </span>
                </div>
                <h3 className="text-3xl font-medium mt-4 bg-gradient-to-r from-green-400 to-textColor bg-clip-text text-transparent">
                  Designing solutions customized
                </h3>
                <span className="text-3xl font-light">
                  to meet your requirements
                </span>
              </div>

              <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-white">
                  Excited to take on{" "}
                  <span className="text-white">new projects</span> and
                  collaborate. <br />
                  Let's chat about your ideas.{" "}
                  <a href="#" className="text-green-400 hover:underline">
                    Reach out!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
