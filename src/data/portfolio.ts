import { Project, Experience, Skill } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "SolveList",
    description:
      "Angular-based portfolio for an Odoo services company. Built with SSR, Lazy Loading, and REST APIs for optimal performance.",
    stack: ["Angular", "TypeScript", "SSR", "REST APIs"],
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/mostafa/solvelist",
    demo: "https://solvelist-demo.com",
  },
  {
    id: "2",
    title: "Exclusive",
    description:
      "Dynamic E-commerce platform with secure authentication, payment integration, and advanced cart management using NgRx.",
    stack: ["Angular", "NgRx", "Authentication", "Payment Gateway"],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/mostafa/exclusive",
    demo: "https://exclusive-demo.com",
  },
  {
    id: "3",
    title: "FreshCart",
    description:
      "Modern e-commerce store built with React.js and Redux. Features real API integration, wishlist, and cart management.",
    stack: ["React.js", "Redux", "API Integration", "Responsive Design"],
    image:
      "https://images.pexels.com/photos/34577/pexels-photo-34577.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/mostafa/freshcart",
    demo: "https://freshcart-demo.com",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Do-Pave",
    position: "Angular Developer",
    period: "Aug 2024 – Present",
    description:
      "Built scalable Angular applications with integrated APIs and optimized performance. Focused on creating responsive user interfaces and implementing modern web development practices.",
    current: true,
    keyAchievements: [
      "Developed a high-performance Angular application with SSR for SEO optimization.",
      "Implemented lazy loading and code splitting to enhance application speed.",
      "Collaborated with designers to create a responsive and user-friendly interface.",
      "Completed 15+ client projects",
      "Mastered responsive design",
      "Learned Angular17+",
    ],
  },
  {
    id: "2",
    company: "Depi",
    position: "Front-end Developer (Training)",
    period: "Nov 2024 – May 2025",
    description:
      "Built applications with React.js and Bootstrap. Developed UI/UX components and participated in communication training to enhance collaboration skills.",
    current: false,
    keyAchievements: [
      "Developed multiple responsive components using React.js and Bootstrap.",
      "Built reusable UI components based on Figma designs.",
      "Integrated APIs using Axios and handled dynamic data rendering.",
      "Practiced version control and collaboration using Git and GitHub.",
      "Participated in team code reviews and implemented feedback for improvement.",
      "Completed training tasks ahead of schedule, demonstrating strong learning ability.",
    ],
  },
  {
    id: "3",
    company: "Route Academy",
    position: "React.js Trainee",
    period: "Oct 2023 – Mar 2024",
    description:
      "Completed hands-on training in React.js fundamentals, component architecture, props/state management, and routing. Built small projects to strengthen real-world coding skills.",
    current: false,
    keyAchievements: [
      "Built and deployed multiple small-scale React.js applications.",
      "Practiced JSX, component-based architecture, and props/state management.",
      "Used React Router for multi-page navigation.",
      "Applied hooks such as useState and useEffect in real-world scenarios.",
      "Enhanced debugging skills using browser dev tools and React Developer Tools.",
      "Collaborated with peers to review code and improve quality.",
      "Completed course projects with a focus on clean code and best practices.",
    ],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", level: 85 },
  { name: "C++", category: "Languages", level: 80 },
  { name: "JavaScript (ES6+)", category: "Languages", level: 90 },
  { name: "TypeScript", category: "Languages", level: 85 },

  // Frameworks & Tech
  { name: "Angular", category: "Frameworks & Tech", level: 90 },
  { name: "React.js", category: "Frameworks & Tech", level: 85 },
  { name: "Firebase", category: "Frameworks & Tech", level: 80 },

  // Styling
  { name: "HTML5", category: "Styling", level: 95 },
  { name: "CSS3", category: "Styling", level: 90 },
  { name: "Bootstrap", category: "Styling", level: 85 },
  { name: "SCSS", category: "Styling", level: 80 },
  { name: "Tailwind CSS", category: "Styling", level: 90 },
  { name: "Material UI", category: "Styling", level: 85 },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 85 },
  { name: "npm/pnpm/yarn", category: "Tools", level: 90 },
  { name: "VS Code", category: "Tools", level: 90 },
  { name: "Figma", category: "Tools", level: 90 },
  { name: "Postman", category: "Tools", level: 90 },

  // Concepts
  { name: "SPA", category: "Concepts", level: 90 },
  { name: "SSR", category: "Concepts", level: 80 },
  { name: "Responsive Design", category: "Concepts", level: 95 },

  // State Management
  { name: "Redux", category: "State Management", level: 85 },
  { name: "NgRx", category: "State Management", level: 80 },
];
