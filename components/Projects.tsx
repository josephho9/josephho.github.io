import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-8 md:mb-12">
        Projects
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group relative p-6 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="text-xs text-secondary/80 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};