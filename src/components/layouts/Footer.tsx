import { navItems } from "@/data/site"
import LogoLink from "./LogoLink"
import SocialLinks from "./SocialLinks"
import Link from "next/link"
import { cacheLife } from "next/cache";
import AvailabilityBadge from "./AvailabilityBadge";

async function getCurrentYear() {
    "use cache";
    cacheLife("days");
    return new Date().getFullYear();
}

const Footer = async () => {

    const year = await getCurrentYear();

    return (
        <footer className="w-full bg-surface-container-lowest mt-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <div className="w-30">
                                <LogoLink />
                            </div>

                            <AvailabilityBadge
                                text="Available for full-time &amp; remote roles"
                            />
                        </div>
                        
                        <p className="text-body text-on-surface-variant max-w-md">Junior full-stack developer building with Next.js, TypeScript and NestJS.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <SocialLinks />
                    </div>
                </div>

                <nav 
                    aria-label="Footer"
                    className="flex flex-wrap gap-4 font-mono text-label text-on-surface-variant lowercase"
                >
                    {navItems.map((nav) => (
                        <Link
                            className="hover:text-on-surface transition-colors"
                            key={nav.link}
                            href={nav.name === 'Home' ? nav.link : `/#${nav.link}`}
                        >
                            /{nav.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 bg-surface-container-low/20">
                    <span className="text-caption text-on-surface-variant">© {year} taridoutua.dev</span>
                    <span className="font-mono text-label text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">Built with Next.js &amp; Tailwind CSS</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer