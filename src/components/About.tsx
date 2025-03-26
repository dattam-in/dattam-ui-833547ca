
import React, { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="section-padding bg-muted/30">
      <div 
        ref={sectionRef} 
        className="container max-w-7xl mx-auto appear-animation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Dattam Labs Team" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Dattam Labs Office" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary/70 bg-background rounded-full">
              About Us
            </span>
            <h2 className="section-title text-left mb-4">
              Transforming ideas into innovative solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Dattam Labs, we are a team of dedicated professionals passionate about technology and innovation. We specialize in providing top-notch services in the area of Open data, Web application development and DevOps services.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is to empower organizations to achieve their goals through advanced technology and seamless integration.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the concept of bartering (the oldest form of commerce) where everyone involved has something to gain. We are committed to providing the best services to our clients and partners, ensuring that they achieve their desired outcomes.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-base font-medium text-background shadow-sm hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
