
import React, { useEffect, useRef } from 'react';
import BlurredCard from './BlurredCard';
import { Building, Building2, Lock, MapPin, Shield, Radiation } from 'lucide-react';

interface FacilityAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FacilityArea: React.FC<FacilityAreaProps> = ({ title, description, icon, className }) => {
  return (
    <BlurredCard className={`mb-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-scp-red/20 rounded-md">
          {icon}
        </div>
        <div>
          <h3 className="text-md font-bold mb-2">{title}</h3>
          <p className="text-sm text-scp-gray">{description}</p>
        </div>
      </div>
    </BlurredCard>
  );
};

const FacilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="facility" 
      className="min-h-screen relative py-24 px-6"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-scp-dark/90 via-scp-dark/80 to-scp-dark z-0"></div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16 animate-on-scroll transition-all duration-700 opacity-0 translate-y-10">
          <h2 className="text-3xl font-bold mb-4">INSTALLATION DU SITE-917</h2>
          <p className="text-sm text-scp-gray max-w-2xl mx-auto">
            Le Site-917 est composé de plusieurs zones sécurisées conçues pour le confinement, 
            l'étude et l'administration des anomalies sous la juridiction de la Fondation SCP.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-on-scroll transition-all duration-700 delay-100 opacity-0 translate-y-10">
            <FacilityArea
              title="Zone d'Entrée"
              description="Point d'accès principal au complexe souterrain avec protocoles d'identification biométrique et scanner de sécurité avancé. Rénovée en 2007."
              icon={<Building className="h-6 w-6 text-scp-red" />}
            />
            
            <FacilityArea
              title="Zone de Confinement Sûr"
              description="Dédiée aux entités de classe Safe et certaines entités Euclide non-hostiles. Comprend 42 cellules de confinement standard."
              icon={<Lock className="h-6 w-6 text-scp-light" />}
              className="delay-200"
            />
            
            <FacilityArea
              title="Zone de Confinement Lourde"
              description="Réservée aux entités Euclide hostiles et certaines entités Keter stables. Comprend des systèmes de neutralisation automatiques."
              icon={<Shield className="h-6 w-6 text-amber-500" />}
              className="delay-300"
            />
          </div>
          
          <div className="animate-on-scroll transition-all duration-700 delay-200 opacity-0 translate-y-10">
            <FacilityArea
              title="Zone de Confinement Extrême"
              description="Dédiée exclusivement aux entités Keter. Isolée du reste du complexe avec alimentation électrique indépendante et systèmes redondants."
              icon={<Radiation className="h-6 w-6 text-scp-red" />}
            />
            
            <FacilityArea
              title="Zone Classe-D"
              description="Hébergement et gestion des sujets d'expérimentation. Comprend le bloc carcéral et les installations de conditionnement."
              icon={<Building2 className="h-6 w-6 text-orange-400" />}
              className="delay-200"
            />
            
            <FacilityArea
              title="Installations de Surface"
              description="Deux hangars de véhicules, générateurs électriques principaux et secondaires, et dépôts de matériel. Camouflés en installation d'enfouissement."
              icon={<MapPin className="h-6 w-6 text-blue-400" />}
              className="delay-300"
            />
          </div>
        </div>
        
        <div className="mt-16 animate-on-scroll transition-all duration-700 delay-300 opacity-0 translate-y-10">
          <BlurredCard>
            <h3 className="text-xl font-bold mb-4 text-center">Carte Schématique des Niveaux</h3>
            <div className="relative h-[300px] border border-scp-gray/30 rounded-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-scp-red/30 mx-auto mb-4" />
                  <p className="text-scp-red font-mono text-sm">ACCÈS REFUSÉ</p>
                  <p className="text-xs text-scp-gray mt-2">Niveau d'accréditation insuffisant</p>
                </div>
              </div>
            </div>
          </BlurredCard>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
