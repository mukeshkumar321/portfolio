import { GraduationCap, Briefcase, Code2, User } from "lucide-react";

export const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

export const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Frontend Developer",
        company: "Sapiens India",
        period: "2022 - Present",
        description:
          "Led the development of multiple React-based web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality. Collaborated closely with cross-functional teams to deliver scalable and maintainable solutions, and contributed to architectural decisions for new projects.",
        highlights: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      },
      {
        role: "Teaching Assistant",
        company: " Indian Institute of Technology Bhubaneswar",
        period: "2020 - 2022",
        description:
          "Handled lab classes, guiding students through assignments and projects. Provided one-on-one mentorship, clarified complex concepts, and assisted in curriculum development to enhance student learning outcomes.",
        highlights: ["C/C++ Language", "Data Structures", "Algorithms"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Master of Computer Science",
        institution: "Indian Institute of Technology Bhubaneswar",
        period: "2020 - 2022",
        description:
          "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors, focusing on advanced algorithms, distributed systems, and machine learning. Completed a thesis on scalable web architectures.",
        achievements: ["7.6 GPA", "Research Publication", "Dean's List"],
      },
      {
        degree: "Bachelor of Computer Science",
        institution: "Bundeland University",
        period: "2014 - 2018",
        description:
          "Built a strong foundation in computer science principles, data structures, and algorithms. Participated in coding competitions and led the university's programming club.",
        achievements: ["Academic Excellence Award", "Programming Club Lead"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Experienced in building responsive, accessible, and high-performance user interfaces using modern frameworks and libraries. Adept at translating design mockups into pixel-perfect web applications and optimizing for user experience.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Proficient in designing and implementing RESTful APIs, server-side logic, and database schemas. Skilled in building scalable backend systems and integrating third-party services.",
        skills: ["Node.js", "Express", "Python", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Familiar with a wide range of development tools and methodologies, including version control, containerization, cloud deployment, and agile practices. Committed to continuous integration and delivery for efficient development workflows.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 3+ years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "Web Development",
      "Machine Learning",
    ],
    languages: ["Hindi (Native)", "English (Intermediate)"],
  },
};
