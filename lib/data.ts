export const profile = {
  name: "Miguel Avilés Jenkins",
  title: "Senior Software Engineer & iOS Developer",
  email: "mavilesj@gmail.com",
  github: "https://github.com/miguelavilesjenkins",
  linkedin: "https://linkedin.com/in/miguelavilesjenkins",
  location: "Atenas, Alajuela",
  summary:
    "10+ years at HPE — Aruba Networks, leading QA teams and building Python automation for enterprise networking products. I work deep in L2/L3 stacks, design test strategies, and push code through Gerrit and CI. Lately I've been putting that same precision into iOS — SwiftUI apps with CoreML, HealthKit, and Firebase.",
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "iOS Development",
    items: ["Swift", "SwiftUI", "UIKit", "CoreML", "HealthKit", "Firebase"],
  },
  {
    category: "Automation & Testing",
    items: ["Python", "Selenium", "Test Automation", "QA", "ISTQB", "CI/CD"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "VLAN", "OSPF", "BGP", "DHCP", "IPv6", "RADIUS", "TACACS"],
  },
  {
    category: "Programming",
    items: ["Python", "Swift", "JavaScript", "C++", "Java", "PHP", "C#"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Jira", "HP ALM", "Gerrit", "Linux", "macOS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "Oracle"],
  },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}[] = [
  {
    company: "Hewlett Packard Enterprise — Aruba Networks",
    role: "Senior Software Engineer / Tech Lead",
    period: "Aug 2014 – Present",
    bullets: [
      "Led a team of QA engineers responsible for software validation of enterprise networking products.",
      "Developed automation frameworks in Python, significantly reducing manual testing effort.",
      "Designed and executed test strategies for complex networking systems (L2/L3, security, multicast).",
      "Performed deep troubleshooting across OS, network stack, and hardware environments.",
      "Contributed to code reviews and technical decision-making as a Tech Lead.",
      "Collaborated in Agile environments using Jira, Git, and CI/CD practices.",
    ],
  },
  {
    company: "Componentes El Orbe",
    role: "Technical Support Engineer",
    period: "Feb 2014 – Apr 2014",
    bullets: [
      "Installed and configured computer systems and enterprise networks.",
      "Diagnosed and resolved hardware/software issues.",
      "Managed Windows Server environments and VMware ESXi setups.",
    ],
  },
];

export const projects: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}[] = [
  
  {
    title: "Meditation App",
    description:
      "iOS meditation app developed with SwiftUI and a Firebase backend. Implements audio playback and dynamic content loading.",
    tags: ["Swift", "SwiftUI", "Firebase", "iOS"],
  },
  {
    title: "Steps Tracking App",
    description:
      "iOS step tracker integrated with HealthKit for accurate metrics. Minimal UI with daily stats and trend visualization.",
    tags: ["Swift", "SwiftUI", "HealthKit", "iOS"],
  },
];

export const education: {
  degree: string;
  institution: string;
  year: string;
}[] = [
  {
    degree: "Executive MBA — Digital Transformation",
    institution: "Formato Educativo Business School",
    year: "2022",
  },
  {
    degree: "Licenciatura in Computer Science — Web Systems",
    institution: "Universidad Nacional de Costa Rica",
    year: "2022",
  },
  {
    degree: "Bachelor's Degree in Information Systems Engineering",
    institution: "Universidad Nacional de Costa Rica",
    year: "2014",
  },
];

export const certifications = [
  "ISTQB Certified Tester",
  "Scrum Master Certified",
  "Microsoft Azure Fundamentals",
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Portuguese", level: "Intermediate" },
];
