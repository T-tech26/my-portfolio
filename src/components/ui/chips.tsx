import { cn } from "@/utils";
import { ComponentProps } from "react";

type Variant = "badge" | "tags";

const base =
  "inline-flex items-center gap-1 py-1 font-mono w-fit bg-surface-container-high";


const variants: Record<Variant, string> = {
  tags: "rounded px-2 text-on-surface text-caption",
  badge: "rounded-full text-label px-4",
};

export function chipStyles(variant: Variant = "tags", className?: string) {
    return cn(base, variants[variant], className);
}

interface ChipsProps extends ComponentProps<"span"> {
    variant?: Variant
}

export function Chip({ variant, className, ...props }: ChipsProps) {
    return <span className={chipStyles(variant, className)} {...props} />
}