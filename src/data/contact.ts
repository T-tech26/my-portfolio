import { ContactLink } from "@/types";
import { github, linkedin } from "./socialLinks";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import { FileText } from "lucide-react";

export const contactLinks: ContactLink[] = [
    {
        label: 'GitHub / T-tech26',
        href: github,
        icon: GithubIcon,
        accent: 'primary'
    },
    {
        label: 'LinkedIn / T-tech26',
        href: linkedin,
        icon: LinkedInIcon,
        accent: 'secondary'
    },
    {
        label: 'View Resume (PDF)',
        href: '/resume.pdf',
        icon: FileText,
        accent: 'tertiary'
    },
]