import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Clients', href: '#clients' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-morphism py-2' : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-display font-bold tracking-tight">
              Dattam<span className="text-primary/70">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="relative flex items-center font-medium text-sm text-foreground/80 hover:text-foreground transition-colors duration-200 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-foreground before:origin-right before:scale-x-0 before:transition-transform hover:before:origin-left hover:before:scale-x-100"
              >
                {link.title}
              </a>
            ))}
            {/* <Button className="rounded-full px-6" size="sm">
              Get in touch <ChevronRight className="ml-1 h-4 w-4" />
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col space-y-1.5 items-center justify-center w-10 h-10"
            aria-label="Toggle Menu"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-all duration-300',
                isMobileMenuOpen && 'transform rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-all duration-300',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-all duration-300',
                isMobileMenuOpen && 'transform -rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 glass-morphism overflow-hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
        )}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="font-medium text-center text-foreground/80 hover:text-foreground transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          {/* <Button className="rounded-full px-6 w-full" size="sm">
            Get in touch <ChevronRight className="ml-1 h-4 w-4" />
          </Button> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
