import { Project, Experience, Skill } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Parq | Seamless Valet Parking at TZUM",
    description:
      "Developed and maintained a full-featured web platform and multiple dashboards for Parq, a smart valet parking service with mobile apps available on iOS and Android, currently operating in Bulgaria. The system includes dedicated dashboards for admins, providers, and valets, as well as a public-facing marketing website. The platform was built using Angular 18 inside an Nx Monorepo, and integrated with a scalable microservices backend to ensure high performance and modularity.",
    stack: [
      "Angular 18",
      "Nx Monorepo",
      "TypeScript",
      "RxJS",
      "SCSS",
      "SSR",
      "REST APIs",
    ],
    image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800",
    // github: "https://github.com/mostafa/solvelist",
    demo: "https://tryparq.co/",
  },
  {
    id: "2",
    title: "Communal | Co-working Space Management",
    description:
      "Built a responsive, mobile-first landing page for Communal, a coworking space platform based in Bulgaria and powered by Nexudus. The project involved direct integration with backend APIs to display real-time workspace availability, dynamic pricing, and booking options across all devices. Developed using Angular 18 and Bootstrap 5, with Angular SSR for SEO and performance. Integrated reusable UI components with tools like SwiperJS, Ngx-Select, Toastr, and handled cookie management and session handling for a seamless user experience.",
    stack: [
      "Angular 18",
      "NgRx",
      "Nexudus Platform",
      "REST APIs",
      "Angular SSR",
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    // github: "https://github.com/mostafa/exclusive",
    demo: "https://thecommunal.co/",
  },
  {
    id: "3",
    title: "Management System",
    description:
      "As part of a collaborative and passionate team at the DEPI initiative, I contributed to the development of a real-time Task Management System that empowers individuals and teams to organize tasks, collaborate efficiently, and track progress dynamically. The full-stack application features a clean, modern UI with responsive layouts and powerful real-time collaboration features — making it easy to manage both personal and team-based projects from a single dashboard.",
    stack: [
      "React.js",
      "Redux",
      "Socket.IO",
      "react-beautiful-dnd",
      "Zustand (for state management)",
      "React Query (for data fetching)",
      "Luxon (for date handling)",
      "API Integration",
      "Responsive Design",
    ],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
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
