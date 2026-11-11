import Link from "next/link";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { email } from "@/data/socialLinks";
import { Earth, ExternalLink, SendHorizonal } from "lucide-react";
import { buttonStyles } from "../ui/button";
import { contactLinks } from "@/data/contact";
import { accentStyles } from "@/utils";

const Contact = () => {
    return (
        <section className="section flex flex-col gap-10" id="contact">
            <div className="p-6 lg:p-10 rounded-2xl bg-surface-container flex flex-col gap-10 shadow-lg relative overflow-hidden">
                <div aria-hidden className="absolute -right-20 -bottom-20 size-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="flex flex-col gap-1">
                    <span className="font-mono text-label text-primary font-bold uppercase">04 / Get in touch</span>

                    <h2 className="text-headline-xl text-on-surface">Get in touch</h2>

                    <p className="text-body lg:text-body-lg text-on-surface-variant max-w-2xl">
                        I’m looking for a junior frontend or full-stack role. The fastest way to reach me is by email.
                    </p>
                </div>

                {/* Interactive Direct Channels Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-6 rounded-xl">
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-1.5">
                            <span className="font-mono text-caption text-outline uppercase">Primary contact channel</span>

                            <div className="flex items-center justify-between">
                                <span className="text-body text-on-surface font-mono text-wrap">{email}</span>

                                <CopyEmailButton email={email} variant="secondary" />
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-5">
                                <Link
                                    href={`mailto:${email}`}
                                    className={buttonStyles('primary')}
                                >
                                    <SendHorizonal className="size-5" />
                                    <span>Send Direct Email</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-surface-container-high/40 md:pl-6 pt-4 md:pt-0">
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-caption text-outline uppercase">Repositories &amp; Networks</span>

                            <ul className="flex flex-col gap-2 mt-1">
                                {contactLinks.map(({icon: Icon, ...link}) => (
                                    <li key={link.label}>
                                        <Link 
                                            className={buttonStyles('secondary', 'justify-between w-full')}
                                            href={link.href} rel="noreferrer" target="_blank"
                                        >
                                            <span 
                                                className="flex items-center gap-2 font-mono text-body text-on-surface"
                                            >
                                                <Icon className={`${accentStyles[link.accent]} ${link.accent === 'secondary' ? 'size-8 -ml-1.5 -mr-1.5' : 'size-5'}`} />
                                                {link.label}
                                            </span>

                                            <ExternalLink className="size-5" />
                                            <span className="sr-only">(opens in a new tab)</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-1 text-on-surface-variant font-mono text-caption">
                            <Earth aria-hidden className="size-5 text-tertiary" />

                            <span>Open to international roles, remote contracts, and relocation.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact