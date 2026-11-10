import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "../ui/icons";
import { Mail } from "lucide-react";
import { email, github, linkedin } from "@/data/socialLinks";

interface SocialLinksProps {
  onNavigate?: () => void;
}

const SocialLinks = ({ onNavigate }: SocialLinksProps) => {
  return (
    <>
      <Link
        href={github}
        aria-label="GitHub profile (opens in a new tab)"
        className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
        rel="noreferrer"
        target="_blank"
        onClick={onNavigate}
      >
        <GithubIcon className="size-5" />
      </Link>

      <Link
        href={linkedin}
        aria-label="Linkedin Profile (opens in a new tab)"
        className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
        rel="noreferrer"
        target="_blank"
        onClick={onNavigate}
      >
        <LinkedInIcon className="size-10" />
      </Link>

      <Link
        href={`mailto:${email}`}
        aria-label="Send Email"
        className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
        onClick={onNavigate}
      >
        <Mail className="size-5" />
      </Link>
    </>
  );
};

export default SocialLinks;
