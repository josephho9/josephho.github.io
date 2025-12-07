export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  year: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}