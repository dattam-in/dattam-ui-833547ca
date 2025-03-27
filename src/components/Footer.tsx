import React from 'react';
import { ChevronUp, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold tracking-tight">
                Dattam<span className="text-primary/70">Labs</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              We transform data into insights and ideas into reality through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Location</h3>
            <ul className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 md:h-10 md:w-10 lg:h-8 lg:w-8 mt-1 mr-4 text-primary/70" />
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
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dattam Labs. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
