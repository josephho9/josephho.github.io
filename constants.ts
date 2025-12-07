import { ExperienceItem, Project, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "Computer Science Student & Full Stack Developer",
  tagline: "I build accessible, pixel-perfect, and performant web experiences.",
  about: "I'm a senior Computer Science student with a passion for building software that solves real-world problems. My main focus these days is exploring the intersection of AI and web technologies. When I'm not at the computer, I'm usually reading, hiking, or brewing coffee.",
  email: "alex.dev@example.com",
  location: "San Francisco, CA"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "TechCorp Inc.",
    position: "Software Engineer Intern",
    period: "June 2024 - Present",
    description: [
      "Developed a real-time analytics dashboard using React and D3.js, improving data visibility for 50+ enterprise clients.",
      "Optimized backend API response times by 40% through efficient caching strategies in Node.js.",
      "Collaborated with design and product teams to implement new feature sets in an agile environment."
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    company: "University Lab",
    position: "Research Assistant",
    period: "Jan 2023 - May 2024",
    description: [
      "Assisted in research regarding Natural Language Processing and sentiment analysis on social media data.",
      "Built Python scripts to scrape and preprocess over 1TB of text data for model training.",
      "Co-authored a paper presented at the Undergraduate Research Symposium."
    ],
    technologies: ["Python", "PyTorch", "Pandas", "scikit-learn"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack",
    description: "A mobile-first web application that helps users track their carbon footprint based on daily activities and purchases. Features gamification elements to encourage eco-friendly habits.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Recharts"],
    year: "2024",
    link: "https://example.com/ecotrack",
    github: "https://github.com/alexdev/ecotrack"
  },
  {
    title: "AlgoVisualizer",
    description: "An interactive visualization tool for common sorting and pathfinding algorithms. Designed to help fellow students understand complex algorithmic concepts through animation.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    year: "2023",
    link: "https://example.com/algoviz",
    github: "https://github.com/alexdev/algoviz"
  },
  {
    title: "NeuralStyle",
    description: "A deep learning project implementing neural style transfer to apply artistic styles to ordinary photos. Includes a simple Flask web interface.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
    year: "2022",
    github: "https://github.com/alexdev/neuralstyle"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];