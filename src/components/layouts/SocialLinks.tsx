import Link from "next/link"
import { GithubIcon, LinkedInIcon } from "../ui/icons"

interface SocialLinksProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const SocialLinks = ({ setIsOpen }: SocialLinksProps) => {
    return (
        <>
            <Link
                href="https://github.com/T-tech26"
                aria-label="GitHub Profile" 
                className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"  
                rel="noreferrer" target="_blank"
                onClick={() => setIsOpen && setIsOpen(false) }
            >
                <GithubIcon className="size-5" />
            </Link>

            <Link
                href="https://linkedin.com"
                aria-label="Linkedin Profile" 
                className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"  
                rel="noreferrer" target="_blank"
                onClick={() => setIsOpen && setIsOpen(false) }
            >
                <LinkedInIcon className="size-10" />
            </Link>
        </>
    )
}

export default SocialLinks