import Link from "next/link"
import React from "react"

interface LogoLinkProps {
    onNavigate?: () => void
}

const LogoLink = ({ onNavigate }: LogoLinkProps) => {
    return (
        <Link 
            href='/'
            className="flex items-center gap-1 font-mono text-label bg-surface-container-high py-1 rounded-lg text-primary hover:text-on-surface transition-colors px-2"
            onClick={onNavigate}
        >
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span>&lt;Tari Dev /&gt;</span>
        </Link>
    )
}

export default LogoLink