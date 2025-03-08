
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FacilitySection from '@/components/FacilitySection';
import RolesSection from '@/components/RolesSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "SCP Foundation - Site-917";
    
    // Add smooth scrolling behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="bg-scp-dark text-scp-light min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FacilitySection />
        <RolesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
