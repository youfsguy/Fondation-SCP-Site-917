
import React, { useEffect, useState } from 'react';
import RedactedText from './RedactedText';
import { AlertTriangle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="introduction" 
      className="min-h-screen relative flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-scp-dark/90 z-0"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2080')] bg-cover bg-center opacity-30 z-[-1]"
        style={{ filter: 'grayscale(60%)' }}
      ></div>
      
      <div className={`max-w-4xl mx-auto z-10 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/lovable-uploads/49cfabbb-720e-47a4-84e6-77b49e92ca8a.png" 
            alt="SCP Site-917 Logo" 
            className="h-16 w-16 mb-4" 
          />
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-scp-red" />
            <span className="text-xs text-scp-red tracking-widest">TOP SECRET - LEVEL 3 CLEARANCE REQUIRED</span>
            <AlertTriangle className="h-4 w-4 text-scp-red" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            SITE-917
          </h1>
          <p className="text-sm text-scp-gray mb-8 text-center italic">
            Établissement de Confinement de Classe-A
          </p>
        </div>
        
        <div className="glass-card p-8 mb-8 animate-blur-in space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4 border-b border-scp-gray/30 pb-2">
            Introduction au Site 917
          </h2>
          
          <p className="text-sm leading-relaxed mb-4">
            Bienvenue dans le Site-917 situé en <RedactedText />, dans une région montagneuse Française. 
            Après la destruction de nombreux sites de confinements importants de la Fondation et les baisses 
            de contributions financières des <RedactedText width="60px" />, le conseil O5 décide la création d'un site 
            centralisant le confinement de nombreuses entités, la mise en place d'expériences avec des sujets 
            prisonniers ainsi que l'administration de la Fondation.
          </p>
          
          <p className="text-sm leading-relaxed mb-4">
            Le Site-917, construit entre 1987 et 1991, d'une superficie de 4.7 km², comprend <RedactedText width="22px" /> entités 
            ainsi qu'un bloc carcéral. Le complexe comprend une zone souterraine avec deux accès au site par des ascenseurs.
          </p>
          
          <p className="text-sm leading-relaxed mb-4">
            Le complexe souterrain a subi des travaux de rénovation de la zone d'entrée et la zone de confinement sûr en 2007 
            suite à une <RedactedText width="90px" />. La zone souterraine comprend 6 secteurs : la zone d'entrée, la zone de 
            confinement sûr, la zone de confinement lourde, la zone de confinement extrême, la zone classe-d ainsi que la zone de sécurité.
          </p>
          
          <p className="text-sm leading-relaxed mb-4">
            Au Nord du complexe, à la surface, se situe 2 hangars avec des véhicules militaires adaptés au terrain montagneux 
            de la région, le boîtier électrique général du site ainsi que le stockage du matériel nécessaire au bon 
            fonctionnement du complexe entier.
          </p>
          
          <p className="text-sm leading-relaxed">
            À 2.8 km du site, vers l'Ouest, se situe le village de <RedactedText width="45px" />, 532 habitants, ce village 
            est sous surveillance discrète par la fondation en raison de sa proximité avec le complexe. Aux yeux du monde, 
            le complexe est un centre d'enfouissement de déchets nucléaires avec interdiction formelle d'accès au public. 
            Le site fait souvent l'objet d'attaques de la part de groupes terroristes, ennemis à la fondation. La sécurité a dû 
            être renforcée il y a quelques années suite à une intrusion. Deux SCP Euclide s'étaient échappés, causant la mort 
            de 4 habitants du village voisin et nécessitant une injection d'amnésiques auprès de la population.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#facility" 
            className="text-sm text-scp-gray hover:text-scp-light transition-colors animate-pulse-slow"
          >
            Défiler pour voir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
