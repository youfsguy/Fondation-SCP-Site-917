
import React, { useEffect, useRef } from 'react';
import BlurredCard from './BlurredCard';
import { Shield, User, Users, Syringe, Shield as ShieldIcon, Lock } from 'lucide-react';
import RedactedText from './RedactedText';

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon, className }) => {
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

const RolesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('opacity-100');
            target.classList.remove('opacity-0', 'translate-y-10');
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
      id="roles" 
      className="min-h-screen relative py-24 px-6"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-scp-dark/90 via-scp-dark/80 to-scp-dark z-0"></div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16 animate-on-scroll transition-all duration-700 opacity-0 translate-y-10">
          <h2 className="text-3xl font-bold mb-4">RÔLES SITE-917</h2>
          <p className="text-sm text-scp-gray max-w-2xl mx-auto">
            La structure hiérarchique du Site-917 comprend des postes clés essentiels 
            à la gestion des anomalies et à la sécurité du personnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6 animate-on-scroll transition-all duration-700 delay-100 opacity-0 translate-y-10">
            <RoleCard
              title="O5"
              description="Le Conseil O5 est l'organe dirigeant suprême de la Fondation SCP, responsable de prendre des décisions finales sur les politiques, la gestion des ressources et le confinement des anomalies, tout en gardant une discrétion absolue sur leur identité et leurs actions."
              icon={<Shield className="h-6 w-6 text-scp-red" />}
            />
            
            <RoleCard
              title="Directeur Général du Comité d'Ethique"
              description="Le Directeur Général du Comité d'éthique dirige le Comité d'éthique dans son ensemble."
              icon={<Users className="h-6 w-6 text-scp-light" />}
            />
            
            <RoleCard
              title="Directeur Général Médical"
              description="Le directeur général médical supervise l'ensemble des services médicaux d'une organisation, assurant la gestion des soins de santé, la conformité aux normes médicales, et la coordination des traitements pour garantir le bien-être des patients."
              icon={<Syringe className="h-6 w-6 text-blue-400" />}
            />
          </div>
          
          <div className="space-y-6 animate-on-scroll transition-all duration-700 delay-200 opacity-0 translate-y-10">
            <RoleCard
              title="Directeur Général de la Force d'Intervention Mobile"
              description="Le Directeur Général de la Force d'Intervention Mobile supervise les directeurs FIM qui eux même vont coordonner les divisions FIM pour opérer sur le terrain."
              icon={<ShieldIcon className="h-6 w-6 text-amber-500" />}
            />
            
            <RoleCard
              title="Directeur Général de la Sécurité Interne"
              description="Aussi appelé DDLS (Directeur De La Sécurité), il est membre du personnel interne le plus haut gradés de la branche sécuritaire. Il coordonne les équipes de la branche sécuritaire ainsi que les états de crise présent sur le site."
              icon={<Lock className="h-6 w-6 text-orange-400" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
