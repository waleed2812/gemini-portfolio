import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

// --- TYPES ---
export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  website?: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

// --- DATA ---

export const CONTACT_INFO = {
  name: "Waleed Butt",
  title: "Node.js Developer | Full Stack Expertise | Cloud Integration",
  email: "waleed3072@gmail.com",
  phone: "+966553974300",
  location: "Riyadh, Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/waleedb2812/",
  github: "https://github.com/waleed2812",
  summary: "Full Stack Developer with over 3.5 years of experience in front-end and back-end development, expert in Node.js and TypeScript. Key achievements include leading the creation of AI-based document scanners utilizing AWS services and engineering a healthcare platform for AI-driven medical imaging. Seeking a Node.js Developer position to apply development and cloud integration skills."
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "NestJS", "OpenAPI", "Swagger", "Microservices", "RESTful API", "GraphQL", "Python"]
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "NextJS", "TypeScript", "JavaScript", "Redux", "Zustand", "Tailwind CSS", "Material UI", "HTML/CSS"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, API Gateway, S3, DynamoDB, EC2)", "GCP (App Engine, Cloud Run, Pub/Sub)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "CloudWatch"]
  },
  {
    title: "Mobile",
    skills: ["React Native", "Android", "iOS"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "Firebase", "Redis", "NoSQL", "SQL"]
  },
  {
    title: "Tools & Testing",
    skills: ["Git", "Postman", "Jest", "Figma", "Webpack", "Babel"]
  }
];

export const EXPERIENCE: Job[] = [
  {
    role: "Lead Full Stack Developer",
    company: "Aeyron Technologies",
    period: "02/2022 - Present",
    location: "Islamabad, Pakistan",
    website: "https://www.aeyron.com/",
    description: [
      "Architected and deployed responsive web applications using Google Cloud and AWS Services, utilizing Docker.",
      "Managed cross-functional teams, mentoring junior developers and ensuring effective sprint delivery.",
      "Implemented CI/CD pipelines using GitHub Actions to automate testing and delivery.",
      "Optimized system performance using CloudWatch & Logs Explorer, ensuring high service uptime.",
      "Developed Next.js web portals and React Native apps integrated with Node.js microservices."
    ]
  },
  {
    role: "Mobile Application Developer",
    company: "PrograminStudio",
    period: "01/2022 - 02/2022",
    location: "Rawalpindi, Pakistan",
    description: [
      "Delivered multiple cross-platform mobile applications utilizing React Native for Android and iOS.",
      "Increased user engagement by 30% through optimized mobile experiences.",
      "Collaborated with Ecommerce stores like HADAFY in Kuwait to boost sales by 15%."
    ]
  }
];

// Extracted specific projects mentioned in the resume text
export const PROJECTS: Project[] = [
  {
    title: "Reven-AI",
    description: "An AI-based document scanner leveraging AWS Services like Lambda, API Gateway, and DynamoDB for efficient processing and document management. Used AWS SQS for smooth processing.",
    tech: ["AWS Lambda", "DynamoDB", "SQS", "Node.js"]
  },
  {
    title: "NeuraVue",
    description: "A threat detection system using IP cameras and AI servers, delivering real-time alerts to admins via React Native and MERN stack.",
    tech: ["React Native", "MERN Stack", "AI", "Real-time"]
  },
  {
    title: "Bikia Healthcare",
    description: "AI-driven medical imaging and diagnosis platform facilitating remote patient-doctor interactions through a Next.js portal and React Native apps.",
    tech: ["Next.js", "React Native", "AI Integration", "Healthcare"]
  },
  {
    title: "SmoothPay",
    description: "Loyalty reward program with a Next.js portal app for seamless customer transactions, deployed via Google Cloud Run.",
    tech: ["Next.js", "Google Cloud Run", "Payment Systems"]
  },
  {
    title: "Tayse Rugs WMS",
    description: "Warehouse Management System for a Turkish/American warehouse. Next.js dashboards supported by RDS & AWS EC2.",
    tech: ["Next.js", "AWS RDS", "AWS EC2", "Warehouse Management"]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor's in Science, Computer Science",
    school: "COMSATS University Islamabad",
    period: "02/2018 - 09/2022",
    location: "Islamabad, Pakistan"
  }
];

export const LANGUAGES = [
  { name: "English", level: "Proficient" },
  { name: "Urdu", level: "Native" }
];

export const RESUME_CONTEXT = `
You are an AI assistant for Waleed Butt's portfolio website. Answer questions based STRICTLY on the following resume data.
Name: ${CONTACT_INFO.name}
Title: ${CONTACT_INFO.title}
Summary: ${CONTACT_INFO.summary}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Education: ${JSON.stringify(EDUCATION)}
Contact: Email: ${CONTACT_INFO.email}, Phone: ${CONTACT_INFO.phone}, Location: ${CONTACT_INFO.location}

If a user asks something not in this data, politely say you don't have that information but they can contact Waleed directly.
Keep answers concise and professional.
`;
