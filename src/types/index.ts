import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  icon: LucideIcon;
  tag: string;
  skill: string;
  description: string;
  stacks: string[];
}