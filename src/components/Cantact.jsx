import React from "react";

const ContactInfo = ({ icon, label, value, link }) => (
  <div className="relative inline-flex items-center mb-6">
    <div className="inline-block">
      <div className="border rounded-lg p-4 bg-gray-50 group hover:bg-green-50 transition-colors">
        <i className={`ri-${icon} text-green-400 text-2xl`}></i>
      </div>
    </div>
    <div className="pl-3">
      <span className="text-gray-500 text-sm">{label}</span>
      <h6 className="mb-0 font-medium">{value}</h6>
    </div>
    <a href={link} className="absolute inset-0" aria-label={label}></a>
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: "phone-fill",
      label: "Phone Number",
      value: "+1-234-567-8901",
      link: "tel:+1-234-567-8901",
    },
    {
      icon: "mail-fill",
      label: "Email",
      value: "contact@william.design",
      link: "mailto:contact@william.design",
    },
    {
      icon: "skype-fill",
      label: "Skype",
      value: "WilliamDesignUX",
      link: "skype:WilliamDesignUX?add",
    },
    {
      icon: "map-2-fill",
      label: "Address",
      value: "0811 Erdman Prairie, Joaville CA",
      link: "https://maps.google.com/maps?q=0811+Erdman+Prairie+Joaville+CA",
    },
  ];

  return (
    <section id="contact" className="relative pb-16 px-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="relative z-20">
                <h3 className="text-green-400 mb-6">Let's connect</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="bg-gray-50 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Your name"
                      name="name"
                    />
                    <input
                      type="tel"
                      className="bg-gray-50 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Phone"
                      name="phone"
                    />
                    <input
                      type="email"
                      className="bg-gray-50 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Email"
                      name="email"
                    />
                    <input
                      type="text"
                      className="bg-gray-50 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Subject"
                      name="subject"
                    />
                    <textarea
                      className="col-span-2 bg-gray-50 border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                    <button
                      type="submit"
                      className="col-span-2 bg-green-400 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
                    >
                      Send Message
                      <i className="ri-arrow-right-up-line"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-5 rounded-lg transform translate-x-2 translate-y-2"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
