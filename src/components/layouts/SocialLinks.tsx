import Link from "next/link"
import { GithubIcon, LinkedInIcon } from "../ui/icons"
import { Mail } from "lucide-react"

interface SocialLinksProps {
    onNavigate?: () => void
}

const SocialLinks = ({ onNavigate }: SocialLinksProps) => {
    return (
        <>
            <Link
                href="https://github.com/T-tech26"
                aria-label="GitHub Profile" 
                className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"  
                rel="noreferrer" target="_blank"
                onClick={onNavigate}
            >
                <GithubIcon className="size-5" />
            </Link>

            <Link
                href="https://linkedin.com"
                aria-label="Linkedin Profile" 
                className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"  
                rel="noreferrer" target="_blank"
                onClick={onNavigate}
            >
                <LinkedInIcon className="size-10" />
            </Link>

            <Link
                href="mailto:taridoutua341@gmail.com"
                aria-label="Send Email"
                className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                onClick={onNavigate}
            >
                <Mail className="size-5"/>
            </Link>
        </>
    )
}

export default SocialLinks