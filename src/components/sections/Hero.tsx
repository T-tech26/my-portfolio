import Link from "next/link"
import AvailabilityBadge from "../layouts/AvailabilityBadge"
import { ArrowRight, Code, Mail, Share2 } from "lucide-react"
import { buttonStyles } from "../ui/button"
import { CopyEmailButton } from "../ui/CopyEmailButton"
import { email, github, linkedin } from "@/data/personal"
import HeroRightSection from "../layouts/HeroRightSection"

const Hero = () => {

    return (
        <section className="relative pt-8 pb-10 flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Left: Headline & Actions */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    {/* Availability Badge */}
                    <AvailabilityBadge
                        text="Available for International &amp; Remote Roles"
                    />

                    {/* Punchy Main Title */}
                    <h1 className="text-display-mobile md:text-display text-on-surface tracking-tight leading-none">Building Reliable Web Applications That Solve Real Problems.</h1>

                    {/* Subheading */}
                    <p className="text-body lg:not-only:text-body-lg text-on-surface-variant max-w-2xl">Self-taught software developer focused on building robust, performant full-stack web applications. Practical experience developing responsive client interfaces and dependable backend APIs with Next.js, React, TypeScript, Node.js, and relational databases.</p>

                    {/* Interactive Action Bar */}
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                        <Link 
                            className={buttonStyles("primary")} href="#projects"
                        >
                            View Projects
                            <ArrowRight 
                                className="size-4 -mt-1 transition-transform group-hover:translate-x-0.5"
                            />
                        </Link>
                        
                        
                        <Link 
                            className={buttonStyles("secondary")} href="#contact"
                        >
                            Contact Me
                            <Mail 
                                className="size-4 -mt-1 transition-transform group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>

                    {/* Metadata & Direct Fast Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-1 text-on-surface-variant">
                        <Link 
                            className={buttonStyles("ghost")}
                            href={github}
                            target="_blank"
                        >
                            <Code className="size-4" />
                            
                            <span>github.com/T-tech26</span>
                        </Link>

                        <Link 
                            className={buttonStyles("ghost")}
                            href={linkedin}
                            target="_blank"
                        >
                            <Share2 className="size-4" />
                            
                            <span>linkedin.com/in/developer</span>
                        </Link>

                        <CopyEmailButton email={email} />
                    </div>
                </div>

                {/* Right: Modern Code Editor Terminal Card */}
                <HeroRightSection />
            </div>

        </section>
    )
}

export default Hero