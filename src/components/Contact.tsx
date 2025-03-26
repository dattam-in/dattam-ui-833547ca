
import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
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
    <section id="contact" className="section-padding bg-white">
      <div 
        ref={sectionRef} 
        className="container max-w-7xl mx-auto appear-animation"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary/70 bg-muted rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-muted/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Our Location</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 mr-4 text-primary/70" />
                <div>
                  <p className="font-semibold">Dattam Labs, Awfis, Prestige Skytech</p>
                  <p className="text-muted-foreground">ISB Rd, behind Continental Hospital, Financial District</p>
                  <p className="text-muted-foreground">Nanakramguda, Telangana 500032</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-primary/70" />
                <a href="mailto:contact@dattam.in" className="text-foreground hover:text-primary/70 transition-colors">
                  contact@dattam.in
                </a>
              </div>
              
              <div className="pt-4 flex space-x-4">
                <a 
                  href="https://github.com/dattamlabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/dattamlabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:ring-primary transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:ring-primary transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background shadow-sm hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground transition-all duration-200 sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
