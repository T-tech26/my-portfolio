import { cn } from "@/utils";
import { ComponentProps } from "react";

type Variant = "badge" | "tags";

const base = "inline-flex items-center gap-1 px-4 py-1 font-mono text-label w-fit";

const variants: Record<Variant, string> = {
    tags: "",
    badge: "rounded-full bg-surface-container-high",
}

export function chipStyles(variant: Variant = "tags", className?: string) {
    return cn(base, variants[variant], className);
}

interface ChipsProps extends ComponentProps<"span"> {
    variant?: Variant
}

export function Chip({ variant, className, ...props }: ChipsProps) {
    return <span className={chipStyles(variant, className)} {...props} />
}