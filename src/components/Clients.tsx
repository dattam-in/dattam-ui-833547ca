import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const clients = [
  { name: "CHARTR", logo: "./chartr_logo.jpg", link: "https://chartr.in" },
  { name: "PRADHI", logo: "./pradhilogo.jpg", link: "https://www.pradhi.ai" },
  { name: "CEEW", logo: "./ceewlogo.jpg", link: "https://www.ceew.in" },
  { name: "USAID", logo: "./usaid.png", link: "https://www.usaid.gov" },
  { name: "STARTECH365", logo: "./startechlogo.png", link: "https://startech365.net/" },
];

// Duplicate the array to ensure seamless looping
const scrollingClients = [...clients, ...clients, ...clients, ...clients];

const Clients = () => {
  const controls = useAnimation();
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    } else {
      controls.stop();
    }
  }, [isHovered]);

  const startAutoScroll = () => {
    controls.start({ x: [0, -1000], transition: { repeat: Infinity, duration: 10, ease: "linear" } });
  };

  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          {/* <span className="inline-block px-3 py-1 text-sm font-medium text-primary/70 bg-muted rounded-full mb-4">
            Our Clients
          </span> */}
          <h2 className="section-title">Trusted by organizations</h2>
          <p className="section-subtitle">
            We're proud to work with these innovative organizations to deliver exceptional results.
          </p>
        </div>

        {/* Scrolling Client Logos */}
        <div ref={scrollRef}
          className="relative overflow-hidden w-full whitespace-nowrap scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className="flex space-x-8 md:space-x-16 lg:space-x-32"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {scrollingClients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-w-[200px]"
              >
                <img src={client.logo} alt={`${client.name} logo`} className="max-h-18 w-auto" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
