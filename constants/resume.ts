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
          "Led the development of multiple React-based web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
        highlights: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      },
      {
        role: "Teaching Assistant",
        company: " Indian Institute of Technology Bhubaneswar",
        period: "2020 - 2022",
        description:
          "Handling the lab classes of the students guiding and helping them in their assignments and projects.",
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
          "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
        achievements: ["7.6 GPA", "Research Publication", "Dean's List"],
      },
      {
        degree: "Bachelor of Computer Science",
        institution: "Bundeland University",
        period: "2014 - 2018",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
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
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["English (Native)", "Spanish (Intermediate)", "German (Basic)"],
  },
};
