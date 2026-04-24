// index.js
export const servicesData = [
  {
    title: "Full Stack Engineering",
    description:
      "I design and build scalable, production-grade applications with a strong focus on system design, performance, and maintainability.",
    items: [
      {
        title: "Backend Systems",
        description: "(Node.js, NestJS, REST/GraphQL APIs, Microservices)",
      },
      {
        title: "Frontend Architecture",
        description: "(React.js, Next.js, TypeScript, Scalable UI Systems)",
      },
      {
        title: "Data Layer",
        description: "(MongoDB, PostgreSQL, Redis, Query Optimization)",
      },
    ],
  },
  {
    title: "System Design & Architecture",
    description:
      "I architect scalable and fault-tolerant systems using modern design patterns and distributed architecture principles.",
    items: [
      {
        title: "Microservices Architecture",
        description: "(Service Communication, API Gateway, Isolation)",
      },
      {
        title: "Event-Driven Systems",
        description: "(Kafka, RabbitMQ, Async Processing)",
      },
      {
        title: "Scalability & Reliability",
        description: "(Caching, Load Balancing, Horizontal Scaling)",
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "I streamline development and deployment with automation, containerization, and cloud-ready infrastructure.",
    items: [
      {
        title: "Containerization",
        description: "(Docker, Kubernetes Basics)",
      },
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Automated Deployments)",
      },
      {
        title: "Cloud & Servers",
        description: "(AWS Basics, Linux, Nginx)",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "I optimize applications for speed, scalability, and efficiency to ensure smooth user experience under high load.",
    items: [
      {
        title: "Performance Tuning",
        description: "(Caching, Lazy Loading, Code Splitting)",
      },
      {
        title: "System Monitoring",
        description: "(Logging, Debugging, Error Tracking)",
      },
      {
        title: "Code Quality",
        description: "(Refactoring, Clean Architecture)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "ADTS – Automated Driving Test System",
    description:
      "A government-grade backend system developed for Gujarat RTO to automate driving tests, manage configurations, and ensure real-time data processing with high reliability.",
    href: "",
    // image: "/assets/projects/adts.jpg",
    // bgImage: "/assets/backgrounds/system.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Prisma" },
      { id: 4, name: "Express.js" },
    ],
  },
  {
    id: 2,
    name: "AI Voice Bot System",
    description:
      "An intelligent voice bot system capable of handling user interactions, automating responses, and integrating with backend APIs for real-time communication.",
    href: "",
    image: "/assets/projects/ai-voice-bot.jpg",
    bgImage: "/assets/backgrounds/ai.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "AI APIs" },
      { id: 3, name: "WebSockets" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 3,
    name: "CRM System",
    description:
      "A scalable customer relationship management system for handling leads, user data, and workflows with secure authentication and role-based access control.",
    href: "",
    image: "/assets/projects/crm.jpg",
    bgImage: "/assets/backgrounds/dashboard.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Redux" },
    ],
  },
  {
    id: 4,
    name: "MLM Software",
    description:
      "A multi-level marketing platform with user hierarchy management, commission tracking, and real-time analytics for network growth and performance.",
    href: "",
    image: "/assets/projects/mlm.jpg",
    bgImage: "/assets/backgrounds/network.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "React" },
      { id: 4, name: "Chart.js" },
    ],
  },
  {
    id: 5,
    name: "AI-Powered Analytics Platform",
    description:
      "A data-driven platform leveraging AI to analyze user behavior, generate insights, and improve decision-making through intelligent automation.",
    href: "",
    image: "/assets/projects/ai-analytics.jpg",
    bgImage: "/assets/backgrounds/data.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Python" },
      { id: 3, name: "TensorFlow" },
      { id: 4, name: "Canvas" },
      { id: 4, name: "FFM Peg" },


    ],
  },
  {
    id: 6,
    name: "AI-Driven Microservices Platform (Blog & Real-Time Chat)",
    description:
      "Engineered a distributed microservices platform supporting real-time chat and scalable blogging. Designed event-driven architecture using Kafka and RabbitMQ for asynchronous communication, Redis for caching, and polyglot persistence with PostgreSQL and MongoDB. Integrated Python-based AI services for intelligent chat responses and content processing.",
    href: "",
    image: "/assets/projects/microservices-ai.jpg",
    bgImage: "/assets/backgrounds/microservices.jpg",
    frameworks: [
      { id: 1, name: "NestJS" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Kafka" },
      { id: 4, name: "RabbitMQ" },
      { id: 5, name: "Redis" },
      { id: 6, name: "PostgreSQL" },
      { id: 7, name: "MongoDB" },
      { id: 8, name: "Python" },
      { id: 9, name: "AI Integration" },
    ],
  }
];
export const socials = [
  // { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  // {
  //   name: "Youtube",
  //   href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  // },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/satyam-pandey-89b158298/" },
  { name: "GitHub", href: "https://github.com/SatyamPandey810" },
];
