import { navItems } from "@/data/site";
import { cn } from "@/utils";
import Link from "next/link";

interface NavLinksProps {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ activeLink, setActiveLink, setIsOpen }: NavLinksProps) => {
    return (
        <>
            {navItems.map((nav, index) => {
                            
                const isActive = nav.link === activeLink;

                return (
                    <Link
                        key={index}
                        href={nav.name === 'Home' ? nav.link : `/#${nav.link}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn('px-4 py-1 rounded-lg text-body text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-center', {'bg-primary-container text-on-primary-container hover:bg-primary-container': isActive})}
                        onClick={() => {
                            setActiveLink(nav.link);
                            setIsOpen(false);
                        }}
                    >{nav.name}</Link>
            )})}
        </>      
    )
}

export default NavLinks