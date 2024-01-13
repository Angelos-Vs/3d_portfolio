import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    docker,
    healthsum,
    redpill,
    jobit,
    threejs,
    testtube,
    vercel
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "vercel",
      icon: vercel,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Junior Web Developer",
      company_name: "M.A. RedPill Technologies LTD",
      icon: redpill,
      iconBg: "#383E56",
      date: "November 2023 - Today",
      points: [
        "Developing and maintaining web medical applications using React.js, tailwindcss and typescript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser and mobile compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TestTube Page",
      description:
        "A youtube webpage clone project that resembles a similar UI layout of the youtube page, with mock data.The reason of creation was to experiment and develop expertise and familiarity with the included technologies and frameworks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient"
        },
      ],
      image: testtube,
      source_code_link: "https://github.com/Angelos-Vs/clone-project-TestTube",
    },
    {
      name: "Healthsum Web App",
      description:
        "Web medical application, that provides to the hospitals, caregivers and patients , an online platform to simplify and manage the demanding services of the medical field.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Next.Js",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
      ],
      image: healthsum,
      source_code_link: "https://healthsum.net/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };