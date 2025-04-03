import React from "react";

const Corporation = () => {
  const gitJournals = [
    { date: "15 Jul", project: "Muzzilla-streaming-API-services-for-Python" },
    { date: "30 Jun", project: "ChatHub-Chat-application-VueJs-Mongodb" },
    { date: "26 May", project: "DineEasy-coffee-tea-reservation-system" },
    { date: "17 Apr", project: "FinanceBuddy-Personal-finance-tracker" },
    { date: "05 Mar", project: "TuneStream-Music-streaming-service-API" },
  ];

  return (
    <section className="py-16 px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="border rounded-lg relative overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center">
                    Cooperation
                  </span>
                </div>

                <h3 className="text-2xl font-medium">
                  More than +168 <span className="font-light">companies</span>
                  <br />
                  trusted <span className="font-light">worldwide_</span>
                </h3>

                {/* Contact Information */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gray-100 relative">
                      <img
                        src="/assets/imgs/coporation/avatar.png"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a href="#" className="flex items-center gap-2">
                      <i className="ri-skype-fill text-gray-600"></i>
                      <span className="text-gray-500">
                        [skype] <span className="text-gray-700">james.dev</span>
                      </span>
                    </a>
                    <a href="#" className="flex items-center gap-2">
                      <i className="ri-phone-fill text-gray-600"></i>
                      <span className="text-gray-500">
                        [phone]{" "}
                        <span className="text-gray-700">+1-234-567-8901</span>
                      </span>
                    </a>
                    <a href="#" className="flex items-center gap-2">
                      <i className="ri-mail-fill text-gray-600"></i>
                      <span className="text-gray-500">
                        [email]{" "}
                        <span className="text-gray-700">contact@james.dev</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
            <div className="bg-gray-50 border rounded-lg p-6 relative h-full">
              <div className="flex items-center mb-6">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2"></div>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Git Journaling
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                <ul className="space-y-6">
                  {gitJournals.map((item, index) => (
                    <li key={index} className="relative pl-6">
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 whitespace-nowrap">
                          {item.date}:
                        </p>
                        <span className="text-gray-800">{item.project}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporation;
