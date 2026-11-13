import { ProjectStatus } from "@/types";
import { cn } from "@/utils";
import { ComponentProps } from "react";

type Variant = "badge" | "tags" | "status";

const base =
  "inline-flex items-center gap-1 py-1 font-mono w-fit bg-surface-container-high";


const variants: Record<Variant, string> = {
  tags: "rounded px-2 text-on-surface text-caption",
  badge: "rounded-full text-label px-4",
  status: "px-2 rounded-full text-caption!"
};

const statusStyle: Record<ProjectStatus, string> = {
  planned: "text-secondary",
  "in-progress": "text-tertiary",
  live: "text-tertiary"
}

export function chipStyles(variant: Variant = "tags", status?: ProjectStatus, className?: string) {
    return cn(base, variants[variant], status && statusStyle[status], className);
}

interface ChipsProps extends ComponentProps<"span"> {
    variant?: Variant,
    status?: ProjectStatus
}

export function Chip({ variant, status, className, ...props }: ChipsProps) {
    return <span className={chipStyles(variant, status, className)} {...props} />
}