import { the_spark_foundation, nbyula, zscaler } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  encryption,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Nbyula",
    icon: nbyula,
    // iconBg: "#accbe1",
    iconBg: "#cfc6fb",
    date: "Aug 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js,  Nest.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assoicate Software Engineer",
    company_name: "Zscaler",
    icon: zscaler,
    // iconBg: "#fbc3bc",
    iconBg: "#a2d2ff",
    date: "Jan 2021 - Aug 2022",
    points: [
      "Played a crucial role as a Quality Assurance Engineer at Zscaler, contributing to the testing and quality assurance processes.",
      "Conducted test case design, execution, and documentation, ensuring the reliability and performance of Zscaler products.",
      "Played a key part in regression testing and automation efforts to improve testing efficiency.",
      "Ensured adherence to best practices in quality assurance and testing.",
    ],
  },
  {
    title: "Data Science & Analytics Intern",
    company_name: "The Sparks Foundation",
    icon: the_spark_foundation,
    iconBg: "#b7e4c7",
    date: "Jan 2023 - Present",
    points: [
      "Engaged in the collection, analysis, and interpretation of data to derive meaningful insights.",
      "Applied statistical methods and machine learning techniques to analyze and interpret data sets effectively.",
      "Worked closely with cross-functional teams to address business challenges and support the development of data-driven strategies.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Yogi0804",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/yogendra007",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Invisibility Cloak",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/Yogi0804/invisibility-cloak",
  },
  {
    iconUrl: encryption,
    theme: "btn-back-black",
    name: "Shamir Secret Sharing",
    description:
      "Successfully integrated the Shamir's Secret Sharing algorithm into images. This implementation allows for the secure distribution of sensitive information within image data.",
    link: "https://github.com/Yogi0804/Shamir-Secret-Sharing",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
