
import React, { useEffect, useRef } from 'react';
import { BarChart3, Database, Code, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Database className="h-10 w-10" />,
    name: 'Public Data Analysis',
    description: 'We help organizations collect, analyze, and visualize public data to gain insights and make informed decisions. Our data analysis services include data collection, cleaning, transformation, and visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    name: 'AI/ML powered knowledge systems',
    description: 'We build AI/ML powered knowledge systems that help organizations make sense of various types of data including unstructured data, leveraging the capabilities of LLMs and Information retrieval systems to provide easy-to-use interfaces for users to interact with the data.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    icon: <Server className="h-10 w-10" />,
    name: 'DevOps Services',
    description: 'Transform your development process by setting up automated pipelines, continuous integration, and continuous deployment. Optimize cloud architecture to be performant, resilient, and cost-effective.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    icon: <Code className="h-10 w-10" />,
    name: 'Application Development',
    description: 'We specialize in building robust web applications. Our team of experienced developers utilize the latest technologies to create scalable, secure, and high-performance cloud native solutions that require little to no maintenance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500'
  },
];

const Services = () => {
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
    <section id="services" className="section-padding bg-white">
      <div 
        ref={sectionRef} 
        className="container max-w-7xl mx-auto appear-animation"
      >
        <div className="text-center mb-16">
          {/* <span className="inline-block px-3 py-1 text-sm font-medium text-primary/70 bg-muted rounded-full mb-4">
            Services
          </span> */}
          <h2 className="section-title">Where we can help</h2>
          <p className="section-subtitle">
            Our services are designed to deliver exceptional value across the entire data and application lifecycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div> */}
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div className="rounded-full bg-primary/5 p-2 text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
