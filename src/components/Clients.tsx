import { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";

const clients = [
  { name: "CHARTR", logo: "./chartr_logo.jpg", link: "https://chartr.in" },
  { name: "PRADHI", logo: "./pradhilogo.jpg", link: "https://www.pradhi.ai" },
  { name: "CEEW", logo: "./ceewlogo.jpg", link: "https://www.ceew.in" },
  { name: "USAID", logo: "./usaid.png", link: "https://www.usaid.gov" },
  { name: "STARTECH365", logo: "./startechlogo.png", link: "https://startech365.net/" },
];

// Duplicate the array to ensure seamless looping
const scrollingClients = [...clients, ...clients];

const Clients = () => {
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  const startAnimation = () => {
    animationRef.current = animate(x, -1000, {
      type: "tween",
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  useEffect(() => {
    if (isHovered) {
      stopAnimation();
    } else {
      startAnimation();
    }

    return stopAnimation;
  }, [isHovered]);

  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">Trusted by organizations</h2>
          <p className="section-subtitle">
            We're proud to work with these innovative organizations to deliver exceptional results.
          </p>
        </div>

        <div
          className="relative overflow-hidden w-full whitespace-nowrap scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex space-x-8 md:space-x-16 lg:space-x-32"
            style={{ x }}
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
