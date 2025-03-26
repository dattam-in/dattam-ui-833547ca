
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div 
        ref={sectionRef} 
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 appear-animation"
      >
        <div className="text-center space-y-6 py-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-foreground/70 bg-muted rounded-full">
            Technology & Innovation
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
            Welcome to Dattam Labs!
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-light">
            We transform data into insights and ideas into reality through innovative technology solutions.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-base font-medium text-background shadow-sm hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground transition-all duration-200"
            >
              Explore our services
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-muted px-6 py-3 text-base font-medium text-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted transition-all duration-200"
            >
              Learn about us
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors duration-300"
      >
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
