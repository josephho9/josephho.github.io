import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-12 justify-center min-h-[60vh] animate-slide-up">
      {PERSONAL_INFO.photo && (
        <div className="mb-8 md:mb-0 flex-shrink-0">
          <img 
            src={import.meta.env.BASE_URL + PERSONAL_INFO.photo.replace(/^\//, '')}
            alt={PERSONAL_INFO.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>
      )}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white leading-tight">
          {PERSONAL_INFO.tagline}
        </h1>
      <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-10">
        {PERSONAL_INFO.about}
      </p>
      
      <div className="flex flex-wrap gap-4">
        <a 
          href="#projects" 
          className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
        >
          View Work
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#contact" 
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
        >
          Contact Me
        </a>
      </div>
      </div>
    </div>
  );
};