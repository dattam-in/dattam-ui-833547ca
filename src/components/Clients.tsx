import React from "react";

const clients = [
  { name: "CHARTR", logo: "./chartr_logo.jpg", link: "https://chartr.in" },
  { name: "PRADHI", logo: "./pradhilogo.jpg", link: "https://www.pradhi.ai" },
  { name: "CEEW", logo: "./ceewlogo.jpg", link: "https://www.ceew.in" },
  { name: "STARTECH365", logo: "./startechlogo.png", link: "https://startech365.net/" },
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">Trusted by organizations</h2>
          <p className="section-subtitle">
            We're proud to work with these innovative organizations to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img src={client.logo} alt={`${client.name} logo`} className="max-h-18 w-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
