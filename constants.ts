import { ExperienceItem, Project, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Joseph Ho",
  title: "Computer Science Student & Machine Learning Enthusiast",
  tagline: "Building intelligent solutions through machine learning and software engineering.",
  about: "I'm a Computer Science student passionate about machine learning and artificial intelligence. I love building intelligent systems that can learn from data and make meaningful predictions. Whether it's training neural networks, working with NLP models, or deploying ML solutions to production, I'm fascinated by how algorithms can transform raw data into actionable insights. When I'm not experimenting with models or exploring the latest research, I enjoy playing basketball and eating.",
  email: "jho29@wisc.edu",
  location: "Madison, WI"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ThayerMahan",
    position: "Machine Learning Engineer Intern",
    period: "May 2025 - Aug 2025",
    description: [
      "Created a comprehensive benchmark dataset of 50,000+ vessel tracklets from AIS data, enabling rigorous evaluation of tracking algorithms and establishing new performance baselines for maritime surveillance systems.",
      "Enhanced the motion model by incorporating acceleration dynamics, enabling the use of an Extended Kalman Filter (EKF) that improved vessel trajectory prediction accuracy by 15% on complex maritime paths with non-linear motion patterns.",
      "Developed interactive visualization tools for probability distributions of Kalman filtering predictions in DeepSORT, providing real-time uncertainty quantification that improved tracking accuracy by 12% and enabled better decision-making for maritime operations.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "DeepSORT", "AWS", "Kalman Filtering", "Computer Vision"]
  },
  {
    company: "University of Central Florida",
    position: "Computer Vision Research Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Led investigation into data memorization in diffusion models, analyzing how generative models reproduce training data and developing novel statistical detection methodologies that outperformed existing baselines by 20%.",
      "Designed and implemented a score-function diffusion methodology leveraging reverse diffusion processes to detect images from training data with 94% accuracy on ImageNet-1K, representing a significant advancement in memorization detection for generative AI systems.",
      "Built end-to-end PyTorch pipeline processing 1.3M+ images, implementing efficient batch processing and GPU acceleration that reduced inference time by 60% compared to naive implementations.",
      "Co-authored research paper on diffusion model memorization presented at the Undergraduate Research Symposium, contributing critical insights to understanding generative model behavior, privacy implications, and potential mitigation strategies for production AI systems."
    ],
    technologies: ["Python", "PyTorch", "Diffusion Models", "Research", "Computer Vision", "ImageNet", "Statistical Analysis"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Neural Style Transfer",
    description: "Implemented a deep learning system for artistic style transfer using convolutional neural networks. The model applies the visual style of one image to the content of another, creating visually striking artistic transformations. Built with PyTorch and optimized for real-time inference.",
    technologies: ["Python", "PyTorch", "CNN", "Deep Learning", "Computer Vision"],
    year: "2025",
    github: "https://github.com/josephho9/styletransfer"
  },
  {
    title: "COVID-19 Data Visualization Dashboard",
    description: "Developed an interactive data visualization dashboard for tracking and analyzing COVID-19 pandemic trends. Features real-time data updates, interactive charts, and comprehensive statistical analysis to help users understand the spread and impact of the virus across different regions.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Visualization", "Data Analysis"],
    year: "2023",
    github: "https://github.com/josephho9/COVID19Stats"
  },
  {
    title: "FCOS Object Detection",
    description: "Implemented Fully Convolutional One-Stage (FCOS) object detection model for real-time object detection tasks. Trained and fine-tuned the model on custom datasets, achieving competitive performance in detecting and localizing objects in images. Includes end-to-end training pipeline and inference optimization.",
    technologies: ["Python", "PyTorch", "FCOS", "Object Detection", "Computer Vision", "Deep Learning"],
    year: "2024",
    github: "https://github.com/josephho9/fcos"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/josephho9", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/hojoseph1", icon: "Linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/josephho__/", icon: "Instagram" },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];