import jobster from "./assets/jobster-react.png";
import comfy from "./assets/comfy-store-react.png";
import github from "./assets/github-search-username-react.png";

import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaDatabase,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
//for the menu nav links section
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];
//for the skills section
export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3 className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in CSS, enabling the creation of visually stunning and responsive web designs, ensuring a seamless and engaging user experience.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Redux & Redux Toolkit",
    icon: <BiLogoRedux className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in Redux, with a focus on state management, and proficient in Redux Toolkit, simplifying complex data handling within web applications.",
  },
  {
    id: nanoid(),
    title: "Node.js & npm",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, leveraging the power of JavaScript on the server-side, and adeptly managing dependencies with npm to streamline development workflows.",
  },
  {
    id: nanoid(),
    title: "SQL & NoSQL Databases",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in both SQL and NoSQL databases like MySQL and MongoDB, facilitating efficient data storage, retrieval, and management for diverse application needs.",
  },
  {
    id: nanoid(),
    title: "BootStrap & Tailwind & Sass",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Bootstrap, Tailwind CSS, and Sass, enabling the development of stylish and responsive web interfaces while maintaining clean and maintainable code.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Python, with a focus on versatile and efficient programming, suitable for a wide range of applications, from web development to data analysis and beyond.",
  },
];

//for the last section of the website page
export const projects = [
  {
    id: nanoid(),
    img: jobster,
    url: "https://jobster-react-nodejs.netlify.app/",
    github:
      "https://github.com/samandeveloper/react-projects/tree/main/jobster",
    title: "Jobster Project",
    text: "Frontend:React and Redux Toolkit, Backend:Node.js, DB: MonogoDB, and JSON Web Token is used for authentication",
  },
  {
    id: nanoid(),
    img: comfy,
    url: "https://comfy-store-app-react.netlify.app/",
    github:
      "https://github.com/samandeveloper/react-projects/tree/main/comfy-store",
    title: "comfy store project",
    text: "Frontend: React, Stripe account, API, and Auth0 are used",
  },
  {
    id: nanoid(),
    img: github,
    url: "https://github-search-username-react.netlify.app",
    github:
      "https://github.com/samandeveloper/react-projects/tree/main/github-search-username",
    title: "github search project",
    text: "Frontend: React, Github API, and Auth0 are used",
  },
];
