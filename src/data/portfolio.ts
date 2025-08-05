import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'SolveList',
    description: 'Angular-based portfolio for an Odoo services company. Built with SSR, Lazy Loading, and REST APIs for optimal performance.',
    stack: ['Angular', 'TypeScript', 'SSR', 'REST APIs'],
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/mostafa/solvelist',
    demo: 'https://solvelist-demo.com'
  },
  {
    id: '2',
    title: 'Exclusive',
    description: 'Dynamic E-commerce platform with secure authentication, payment integration, and advanced cart management using NgRx.',
    stack: ['Angular', 'NgRx', 'Authentication', 'Payment Gateway'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/mostafa/exclusive',
    demo: 'https://exclusive-demo.com'
  },
  {
    id: '3',
    title: 'FreshCart',
    description: 'Modern e-commerce store built with React.js and Redux. Features real API integration, wishlist, and cart management.',
    stack: ['React.js', 'Redux', 'API Integration', 'Responsive Design'],
    image: 'https://images.pexels.com/photos/34577/pexels-photo-34577.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/mostafa/freshcart',
    demo: 'https://freshcart-demo.com'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Do-Pave',
    position: 'Angular Developer',
    period: 'Aug 2024 – Present',
    description: 'Built scalable Angular applications with integrated APIs and optimized performance. Focused on creating responsive user interfaces and implementing modern web development practices.',
    current: true
  },
  {
    id: '2',
    company: 'Depi',
    position: 'Front-end Developer (Training)',
    period: 'Oct 2024 – Present',
    description: 'Built applications with React.js and Bootstrap. Developed UI/UX components and participated in communication training to enhance collaboration skills.',
    current: true
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 85 },
  { name: 'C++', category: 'Languages', level: 80 },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 90 },
  { name: 'TypeScript', category: 'Languages', level: 85 },
  
  // Frameworks & Tech
  { name: 'Angular', category: 'Frameworks & Tech', level: 90 },
  { name: 'React.js', category: 'Frameworks & Tech', level: 85 },
  { name: 'Firebase', category: 'Frameworks & Tech', level: 80 },
  
  // Styling
  { name: 'HTML5', category: 'Styling', level: 95 },
  { name: 'CSS3', category: 'Styling', level: 90 },
  { name: 'Bootstrap', category: 'Styling', level: 85 },
  { name: 'SCSS', category: 'Styling', level: 80 },
  { name: 'Tailwind CSS', category: 'Styling', level: 90 },
  
  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 85 },
  
  // Concepts
  { name: 'SPA', category: 'Concepts', level: 90 },
  { name: 'SSR', category: 'Concepts', level: 80 },
  { name: 'Responsive Design', category: 'Concepts', level: 95 },
  
  // State Management
  { name: 'Redux', category: 'State Management', level: 85 },
  { name: 'NgRx', category: 'State Management', level: 80 }
];