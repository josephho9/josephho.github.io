import React from 'react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-8 md:mb-12">
        Experience
      </h2>
      
      <div className="space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="group md:grid md:grid-cols-[1fr_3fr] gap-6 transition-all hover:opacity-100">
            <div className="text-sm text-secondary font-medium uppercase tracking-wide mb-2 md:mb-0 pt-1">
              {job.period}
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                {job.position} 
                <span className="text-secondary font-normal">@ {job.company}</span>
              </h3>
              
              <ul className="flex flex-col gap-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-secondary leading-relaxed">
                    • {desc}
                  </li>
                ))}
              </ul>

              {job.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-secondary border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};