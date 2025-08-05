export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  current?: boolean;
  keyAchievements?: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}