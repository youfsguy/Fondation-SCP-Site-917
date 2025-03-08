
import React from 'react';
import { Shield, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="discord" className="bg-scp-darkgray py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-scp-red" />
            <div>
              <h3 className="text-xl font-bold">SITE-917</h3>
              <p className="text-xs text-scp-gray">Fondation SCP Site-917.fr • Centre de Confinement</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <a
              href="https://discord.gg/nc79EkhF2B"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 rounded-md transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-[#5865F2]" />
              <span className="text-sm font-medium">Rejoindre le Discord</span>
            </a>
            <p className="text-xs text-scp-gray mt-2">
              Communication sécurisée entre agents
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-scp-gray">
              <span className="text-scp-red">AVERTISSEMENT:</span> Divulgation d'informations
            </p>
            <p className="text-xs text-scp-gray">
              classifiées passible de mesures disciplinaires.
            </p>
          </div>
        </div>
        
        <div className="border-t border-scp-gray/20 mt-8 pt-8 text-center">
          <p className="text-xs text-scp-gray">
            &copy; {new Date().getFullYear()} Fondation SCP Site-917.fr • Tous droits réservés
          </p>
          <p className="text-xs text-scp-gray/60 mt-1">
            Niveau d'accréditation minimum requis: Niveau 3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
