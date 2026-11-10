import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export interface SkillGroup {
  icon: LucideIcon;
  accent: AccentColor;
  tag: string;
  skill: string;
  description: string;
  stacks: string[];
}

export type ProjectStatus = "planned" | "in-progress" | "live";

type ProjectPreview = {
  src: StaticImageData | string;
  alt: string;
  kind: 'design' | 'screenshot';
}

export interface Project {
  status: ProjectStatus;
  title: string;
  purpose: string;
  description: string;
  plannedFeatures: string[];
  stacks: string[];
  liveUrl?: string;
  sourceUrl?: string;
  preview?: ProjectPreview;
}

export type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'primary-fixed';

export interface AboutCard {
  icon: LucideIcon;
  accent: AccentColor;
  title: string;
  description: string;
}