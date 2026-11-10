import { SkillGroup } from "@/types";
import { Database, MonitorSmartphone, Server, SquareTerminal } from "lucide-react";

export const skills: SkillGroup[] = [
  {
    icon: MonitorSmartphone,
    accent: 'primary',
    tag: "CLIENT",
    skill: "Frontend",
    description: "Responsive, accessible interfaces with React and Next.js.",
    stacks: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
    ],
  },
  {
    icon: Server,
    accent: 'secondary',
    tag: "SERVER",
    skill: "Backend",
    description: "REST APIs with authentication and request validation.",
    stacks: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "JWT Auth"],
  },
  {
    icon: Database,
    accent: 'tertiary',
    tag: "STORAGE",
    skill: "Database & Backend Services",
    description: "Relational schemas and queries with PostgreSQL and Prisma.",
    stacks: [
        "PostgreSQL",
        "Prisma ORM",
        "Appwrite BaaS",
        "MongoDB",
        "Mongoose",
    ],
  },
  {
    icon: SquareTerminal,
    accent: 'primary-fixed',
    tag: "TOOLING",
    skill: "Tooling & Deployment",
    description:
      "Version control, API testing, and deploying to Vercel or Render.",
    stacks: ["Git/GitHub", "Thunder Client", "Vercel", "Render"],
  },
];