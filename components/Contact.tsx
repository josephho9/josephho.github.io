import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Github,
  Linkedin,
  Twitter,
};

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in border-t border-white/10 pt-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
          <p className="text-secondary">Always open to connecting and discussing interesting projects.
          </p>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-accent hover:underline mt-2 inline-block"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
        
        <div className="flex gap-4">
          {SOCIALS.map((social) => {
            const Icon = iconMap[social.icon] || Mail;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-secondary hover:text-white transition-all"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-secondary/50">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind & Gemini API.</p>
      </div>
    </div>
  );
};