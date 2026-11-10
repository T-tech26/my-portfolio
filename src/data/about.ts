import { AboutCard } from "@/types";
import { Braces, Bug, Hammer } from "lucide-react";

export const aboutCards: AboutCard[] = [
  {
    icon: Hammer,
    accent: "primary",
    title: "Learning by building",
    description:
      "I learn by building projects and fixing what breaks, not just following courses.",
  },
  {
    icon: Bug,
    accent: "secondary",
    title: "Debugging",
    description:
      "When something fails, I find the root cause before changing code, and I can explain the fix.",
  },
  {
    icon: Braces,
    accent: "tertiary",
    title: "TypeScript",
    description:
      "I use TypeScript with React and Next.js for typed components, props, and data.",
  },
];