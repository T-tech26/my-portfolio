import { Braces, CircleCheck, SquareTerminal } from "lucide-react"

const HeroRightSection = () => {
    return (
        <div className="lg:col-span-5 w-full" aria-hidden="true" >
            <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col border border-surface-container-high/40">
                <div className="px-4 py-2 bg-surface-container flex items-center justify-between border-b border-surface-container-high/40">
                    <div className="flex items-center gap-1">
                        <span className="size-2.5 rounded-full bg-error-container inline-block"></span>
                        
                        <span className="size-2.5 rounded-full bg-surface-bright inline-block"></span>
                        
                        <span className="size-2.5 rounded-full bg-tertiary-container inline-block"></span>
                    </div>

                    <div className="flex items-center gap-0.5">
                        <span className="px-2 py-1 rounded bg-surface-container-high font-mono text-caption text-primary flex items-center gap-1">
                            <SquareTerminal className="size-4" /> app/api/projects/route.ts
                        </span>

                        <span className="hidden sm:flex lg:hidden xl:flex px-2 py-1 rounded bg-transparent font-mono text-caption text-on-surface-variant hover:text-on-surface items-center gap-1">
                            <Braces className="size-4" /> portfolio.config.ts
                        </span>
                    </div>

                    <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded font-mono text-caption text-tertiary">
                        <span className="size-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        
                        <span>TypeScript</span>
                    </div>
                </div>

                <div className="p-5 font-mono text-label tracking-normal text-on-surface-variant overflow-x-auto space-y-1 bg-surface-container-lowest/80">
                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">01</span>
                        <span>
                        <span className="text-primary-container font-semibold">import</span> {`{ NextResponse, type NextRequest }`} <span className="text-primary-container font-semibold">from</span> <span className="text-tertiary">{`'next/server'`}</span>;
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">02</span>
                        <span>
                        <span className="text-primary-container font-semibold">import</span> {`{ prisma }`} <span className="text-primary-container font-semibold">from</span> <span className="text-tertiary">{`'@/lib/db'`}</span>;
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">03</span>
                        <span>
                        <span className="text-primary-container font-semibold">import</span> {`{ verifySession }`} <span className="text-primary-container font-semibold">from</span> <span className="text-tertiary">{`'@/lib/auth'`}</span>;
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">04</span>
                        <span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">05</span>
                        <span>
                            <span className="text-primary-container font-semibold">export async function</span> <span className="text-secondary">GET</span>(req: <span className="text-secondary-fixed-dim">NextRequest</span>) {`{`}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">06</span>
                        <span className="pl-4">
                        <span className="text-primary-container font-semibold">const</span> session = <span className="text-primary-container font-semibold">await</span> verifySession(req);
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption ">07</span>
                        <span className="pl-4 max-w-90">
                            <span className="text-primary-container font-semibold">if</span> (!session?.userId) <span className="text-primary-container font-semibold">return</span> NextResponse.json({`{ error: `}<span className="text-error">{`'Unauthorized'`}</span> {`}, { status:`} <span className="text-secondary-fixed-dim">401</span> {`}`});
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">08</span>
                        <span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">09</span>
                        <span className="pl-4">
                        <span className="text-primary-container font-semibold">const</span> projects = <span className="text-primary-container font-semibold">await</span>{` prisma.project.findMany({`}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">10</span>
                        <span className="pl-8">{`where: { workspaceId: session.workspaceId },`}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">11</span>
                        <span className="pl-8">{`select: { id: `}<span className="text-secondary-fixed-dim">true</span>{`, title: `}<span className="text-secondary-fixed-dim">true</span>{`, status: `}<span className="text-secondary-fixed-dim">true</span>{`, tasksCount: `}<span className="text-secondary-fixed-dim">true</span> {`}`}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">12</span>
                        <span className="pl-4">{`});`}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">13</span>
                        <span className="pl-4">
                            <span className="text-primary-container font-semibold">return</span> {`NextResponse.json({ data: projects, latencyMs: `}<span className="text-tertiary">14</span>{` });`}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-outline w-6 text-right select-none font-mono text-caption">14</span>
                        <span>{`}`}</span>
                    </div>
                </div>

                <div className="px-4 py-1 bg-surface-container-low flex items-center justify-between font-mono text-caption text-outline border-t border-surface-container-high/40">
                    <span className="flex items-center gap-1.5 text-on-surface-variant">
                        <CircleCheck className="size-4 text-tertiary" /> All type checks passed (0 errors)
                    </span>
                    <span>Node.js 20 • App Router • Strict TS</span>
                </div>
            </div>
        </div>
    )
}

export default HeroRightSection