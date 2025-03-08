
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, AlertTriangle, Lock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-scp-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/49cfabbb-720e-47a4-84e6-77b49e92ca8a.png" 
            alt="SCP Site-917 Logo" 
            className="h-8 w-8" 
          />
          <span className="text-xl font-bold tracking-tight">
            SCP SITE-917
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#introduction" className="text-sm hover:text-scp-red transition-colors duration-200">
            INTRODUCTION
          </a>
          <a href="#facility" className="text-sm hover:text-scp-red transition-colors duration-200">
            FACILITY
          </a>
          <a href="#roles" className="text-sm hover:text-scp-red transition-colors duration-200">
            ROLES
          </a>
          <a href="#discord" className="text-sm hover:text-scp-red transition-colors duration-200">
            DISCORD
          </a>
          <div className="flex items-center space-x-1 text-scp-red">
            <Lock size={14} />
            <span className="text-xs">LEVEL 3 CLEARANCE</span>
          </div>
        </nav>
        
        <button 
          className="md:hidden text-scp-light hover:text-scp-red transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-scp-dark/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#introduction" 
              className="text-sm hover:text-scp-red transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INTRODUCTION
            </a>
            <a 
              href="#facility" 
              className="text-sm hover:text-scp-red transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FACILITY
            </a>
            <a 
              href="#roles" 
              className="text-sm hover:text-scp-red transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ROLES
            </a>
            <a 
              href="#discord" 
              className="text-sm hover:text-scp-red transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DISCORD
            </a>
            <div className="flex items-center space-x-1 text-scp-red pt-4 border-t border-scp-gray/20">
              <Lock size={14} />
              <span className="text-xs">LEVEL 3 CLEARANCE</span>
            </div>
            <div className="flex items-center space-x-1 text-scp-red/80">
              <AlertTriangle size={14} />
              <span className="text-xs">INFORMATION HIGHLY CLASSIFIED</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
