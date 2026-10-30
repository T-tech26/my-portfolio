'use client'

import Link from "next/link"
import { useState } from "react";
import { Menu, SquareArrowOutUpRight } from "lucide-react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import LogoLink from "./LogoLink";

const Header = () => {

    const [activeLink, setActiveLink] = useState<string>('/');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
        >
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
                <LogoLink />

                <nav 
                    className="hidden lg:flex items-center gap-1"
                    data-active-classes="bg-primary-container text-on-primary-container text-body rounded-lg"
                >
                    <NavLinks
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                        setIsOpen={setIsOpen}
                    />
                </nav>

                <div className="flex items-center gap-1">
                    <div
                        className="hidden sm:flex items-center gap-1"
                    >
                        <SocialLinks />
                    </div>

                    <Link
                        href="/"
                        className="hidden sm:inline-flex items-center gap-1 px-4 py-1 rounded-lg bg-primary-container text-on-primary-container font-mono text-label hover:bg-primary hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
                    >
                        View Resume
                        <SquareArrowOutUpRight className="size-5"/>
                    </Link>
                    
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden flex size-8 items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer"
                        >
                        <Menu className="size-6" aria-hidden="true" />
                    </button>
                </div>

                <MobileNav 
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
        </header>
    )
}

export default Header