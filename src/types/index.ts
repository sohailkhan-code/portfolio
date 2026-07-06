export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github: string;
  liveDemo?: string;
  image: string;
  category: "ML" | "Web" | "NLP";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}
