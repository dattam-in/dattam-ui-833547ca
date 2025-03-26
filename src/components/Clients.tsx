
import React, { useEffect, useRef } from 'react';

const clients = [
  {
    name: 'CHARTR',
    logo: 'https://via.placeholder.com/200x100/f2f2f2/333333?text=CHARTR',
  },
  {
    name: 'PRADHI',
    logo: 'https://via.placeholder.com/200x100/f2f2f2/333333?text=PRADHI',
  },
  {
    name: 'CEEW',
    logo: 'https://via.placeholder.com/200x100/f2f2f2/333333?text=CEEW',
  },
  {
    name: 'USAID',
    logo: 'https://via.placeholder.com/200x100/f2f2f2/333333?text=USAID',
  },
];

const Clients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="clients" className="section-padding bg-background">
      <div 
        ref={sectionRef} 
        className="container max-w-7xl mx-auto appear-animation"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary/70 bg-muted rounded-full mb-4">
            Our Clients
          </span>
          <h2 className="section-title">Trusted by organizations</h2>
          <p className="section-subtitle">
            We're proud to work with these innovative organizations to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            We are always looking for new opportunities to collaborate with like-minded individuals and organizations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-muted px-6 py-3 text-base font-medium text-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted transition-all duration-200"
          >
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
