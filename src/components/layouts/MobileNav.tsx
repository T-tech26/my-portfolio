'use client'

import { SquareArrowOutUpRight, X } from "lucide-react";
import Link from "next/link"
import React, { useEffect } from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

interface MobileNavProps {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ activeLink, setActiveLink, isOpen, setIsOpen }: MobileNavProps) => {


    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen, setIsOpen]);

    return (
        <nav
            id="mobile-nav"
            aria-label="Mobile"
            className={`w-full h-dvh absolute top-0 left-0 bottom-0 bg-surface flex flex-col overflow-y-auto transition-[transform,visibility] duration-1000 ease-out lg:hidden ${isOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'}`}
        >
            <div className="p-4 flex items-center justify-between">
                <Link 
                    href='/'
                    className="flex items-center gap-1 font-mono text-label bg-surface-container-high py-1 rounded-lg text-primary hover:text-on-surface transition-colors px-2"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                    <span>&lt;Tari Dev /&gt;</span>
                </Link>

                <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                    className="flex size-8 items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface"
                    >
                    <X className="size-6" aria-hidden="true" />
                </button>
            </div>

            <div className="p-4 flex items-center justify-between">
                <div
                    className="flex items-center gap-2"
                >
                    <SocialLinks
                        setIsOpen={setIsOpen}
                    />
                </div>
                
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 px-4 py-1 rounded-lg bg-primary-container text-on-primary-container font-mono text-label hover:bg-primary hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
                    onClick={() => setIsOpen(false) }
                >
                    View Resume
                    <SquareArrowOutUpRight className="size-5"/>
                </Link>
            </div>

            <div
                className="flex-1 flex flex-col justify-center px-4 pb-5 gap-5"
            >
                <NavLinks
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                    setIsOpen={setIsOpen}
                />   
            </div>
        </nav>
    )
}

export default MobileNav