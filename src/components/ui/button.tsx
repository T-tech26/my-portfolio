import { cn } from "@/utils";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base = "inline-flex items-center gap-1 rounded-lg font-mono! text-label! transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer";


const variants: Record<Variant, string> = {
    primary: "bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary group px-6 py-2 min-h-11",
    secondary: "bg-surface-container-high text-on-surface hover:bg-surface-bright group px-6 py-2 min-h-11",
    ghost: "px-4 py-1 bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface group"
}

export function buttonStyles(variant: Variant = "primary", className?: string) {
    return cn(base, variants[variant], className);
}

interface ButtonProps extends ComponentProps<"button"> {
    variant?: Variant;
}

export function Button({ variant, className, type = "button", ...props }: ButtonProps) {
    return <button type={type} className={buttonStyles(variant, className)} {...props} />;
}